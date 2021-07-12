import './App.css';
import React, {useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

import conditionalRowStyles from './RowStyles';


function getCategoryFromId(id) {
  if (id.includes('QA')) return "Qualidade do Ar"
  else if (id.includes('ME')) return "Meteorologia"
  else if (id.includes('RU')) return "Ruído"
  else if (id.includes('CT')) return "??"
  else if (id.includes('ME00PA')) return "Meteorologia - Pressão Atmosférica (média horária)"
  else if (id.includes('METEMP')) return "Meteorologia - Temperatura"
  else return id;
}

function getSensorFrom(id) {
  if (id.includes('PM25')) return "Partículas ø < 2.5µm"
  else if (id.includes('PM10')) return "Partículas ø < 10µm"
  else if (id.includes('00CO')) return "Monóxido de Carbono"
  else if (id.includes('00HR')) return "Humidade Relativa"
  else if (id.includes('00PA')) return "Pressão Atmosférica"
  else if (id.includes('00UV')) return "Radiação Ultravioleta"
  else if (id.includes('00VI')) return "Vento - Intensidade"
  else if (id.includes('00VD')) return "Vento - Direção"
  else if (id.includes('0SO2')) return "Dióxido de Enxofre"
  else if (id.includes('00O3')) return "Ozono"
  else if (id.includes('0NO2')) return "Dióxido de Azoto"
  else if (id.includes('TEMP')) return "Temperatura"
  else if (id.includes('00PP')) return "Precipitação"
  else if (id.includes('LAEQ')) return "Nível sonoro contínuo equivalente, em dB(A)"
  else if (id.includes('0TMD')) return "Veículos (por hora)"
  else return id;
}

function dateStringToText(dateString) {
  var re = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/i;
  var found = dateString.match(re);

  var year = found[1];
  var month = found[2];
  var day = found[3];
  var hour = found[4];
  var minute = found[5];

  return `${day}/${month}/${year} - ${hour}:${minute}`;
}

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input id="search" type="text" placeholder="Procurar" aria-label="Search Input" value={filterText} onChange={onFilter} />
    <button type="button" onClick={onClear}>X</button>
  </>
);

function App() {
  let [centers, setCenters] = useState([])
  let data = [];

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=http://opendata-cml.qart.pt:8080/lastmeasurements")
    .then(response => response.json())
    .then(data => setCenters(data))
  },[])


  centers.forEach((center) => {
    var item = {};
    item.id = center.id;
    item.address = center.address;
    item.date = dateStringToText(center.date);
    item.value = center.value == "-99" ? "N/D" : center.value;
    item.unit = center.unit;
    item.lat = center.coordinates.lat;
    item.lng = center.coordinates.lng;
    item.category = getCategoryFromId(center.id)
    item.sensor = getSensorFrom(center.id);
    item.map = `http://maps.google.com/maps?q=${item.lat},${item.lng}`;
    data.push(item);
  })

  let columns =  [
    {name: 'ID', selector: 'id', sortable: true},
    {name: 'Data / Hora', selector: 'date', sortable: true},
    {name: 'Categoria', selector: 'category', sortable: true},
    {name: 'Sensor', selector: 'sensor', sortable: true},
    {name: 'Estação', selector: 'address', sortable: true},
    {name: 'Valor', selector: 'value', sortable: true},
    {name: 'Unidade', selector: 'unit', sortable: true},
    {name: 'Localização', selector: 'map', sortable: true, cell: (row) => <a href={row.map}>Mapa</a>},
  ]

  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredData = data.filter(item => item.address && item.address.toLowerCase().includes(filterText.toLowerCase()) ||
  item.category.toLowerCase().includes(filterText.toLowerCase()) || 
  item.sensor.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="App">
    <DataTable
        title="Sensores de Qualidade do Ambiente - CML"
        columns={columns}
        data={filteredData}
        theme="solarized"
        responsive
        conditionalRowStyles={conditionalRowStyles}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
      
    </div>
  );
}

export default App;
