(this["webpackJsonpsensores-ambiente-cml"]=this["webpackJsonpsensores-ambiente-cml"]||[]).push([[0],{16:function(e,n,o){},17:function(e,n,o){},25:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),a=o(7),s=o.n(a),u=(o(16),o(3)),l=(o(17),o(8)),c=o.n(l),i="#92D050",d="#FFFF00",b="#FFC000",f="#FF0000",h=[{when:function(e){return"Radia\xe7\xe3o Ultravioleta"===e.sensor&&e.value<6},style:{backgroundColor:i}},{when:function(e){return"Radia\xe7\xe3o Ultravioleta"===e.sensor&&e.value>6},style:{backgroundColor:d}},{when:function(e){return"Radia\xe7\xe3o Ultravioleta"===e.sensor&&e.value>8},style:{backgroundColor:b}},{when:function(e){return"Radia\xe7\xe3o Ultravioleta"===e.sensor&&e.value>=11},style:{backgroundColor:f}},{when:function(e){return"Part\xedculas \xf8 < 2.5\xb5m"===e.sensor&&e.value<20},style:{backgroundColor:i}},{when:function(e){return"Part\xedculas \xf8 < 2.5\xb5m"===e.sensor&&e.value>21},style:{backgroundColor:d}},{when:function(e){return"Part\xedculas \xf8 < 2.5\xb5m"===e.sensor&&e.value>26},style:{backgroundColor:b}},{when:function(e){return"Part\xedculas \xf8 < 2.5\xb5m"===e.sensor&&e.value>51},style:{backgroundColor:f}},{when:function(e){return"Part\xedculas \xf8 < 10\xb5m"===e.sensor&&e.value<35},style:{backgroundColor:i}},{when:function(e){return"Part\xedculas \xf8 < 10\xb5m"===e.sensor&&e.value>101},style:{backgroundColor:"red"}},{when:function(e){return"Ozono"===e.sensor&&e.value<101},style:{backgroundColor:i}},{when:function(e){return"Ozono"===e.sensor&&e.value>101},style:{backgroundColor:d}},{when:function(e){return"Ozono"===e.sensor&&e.value>181},style:{backgroundColor:b}},{when:function(e){return"Ozono"===e.sensor&&e.value>241},style:{backgroundColor:f}},{when:function(e){return"Temperatura"===e.sensor&&e.value<34},style:{backgroundColor:i}},{when:function(e){return"Ozono"===e.sensor&&e.value<37},style:{backgroundColor:d}},{when:function(e){return"Ozono"===e.sensor&&e.value<40},style:{backgroundColor:b}},{when:function(e){return"Ozono"===e.sensor&&e.value>40},style:{backgroundColor:f}},{when:function(e){return"Ru\xeddo"===e.category&&e.value<=54},style:{backgroundColor:i}},{when:function(e){return"Ru\xeddo"===e.category&&e.value>55},style:{backgroundColor:d}},{when:function(e){return"Ru\xeddo"===e.category&&e.value>60},style:{backgroundColor:b}},{when:function(e){return"Ru\xeddo"===e.category&&e.value>65},style:{backgroundColor:f}}],g=o(1);var m=function(e){var n=e.filterText,o=e.onFilter,t=e.onClear;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{id:"search",type:"text",placeholder:"Procurar","aria-label":"Search Input",value:n,onChange:o}),Object(g.jsx)("button",{type:"button",onClick:t,children:"X"})]})};var v=function(){var e=Object(t.useState)([]),n=Object(u.a)(e,2),o=n[0],a=n[1],s=[];Object(t.useEffect)((function(){fetch("https://api.allorigins.win/raw?url=http://opendata-cml.qart.pt:8080/lastmeasurements").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),o.forEach((function(e){var n,o={};o.id=e.id,o.address=e.address,o.date=function(e){var n=e.match(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/i),o=n[1],t=n[2],r=n[3],a=n[4],s=n[5];return"".concat(r,"/").concat(t,"/").concat(o," - ").concat(a,":").concat(s)}(e.date),o.value="-99"==e.value?"N/D":e.value,o.unit=e.unit,o.lat=e.coordinates.lat,o.lng=e.coordinates.lng,o.category=(n=e.id).includes("QA")?"Qualidade do Ar":n.includes("ME")?"Meteorologia":n.includes("RU")?"Ru\xeddo":n.includes("CT")?"??":n.includes("ME00PA")?"Meteorologia - Press\xe3o Atmosf\xe9rica (m\xe9dia hor\xe1ria)":n.includes("METEMP")?"Meteorologia - Temperatura":n,o.sensor=function(e){return e.includes("PM25")?"Part\xedculas \xf8 < 2.5\xb5m":e.includes("PM10")?"Part\xedculas \xf8 < 10\xb5m":e.includes("00CO")?"Mon\xf3xido de Carbono":e.includes("00HR")?"Humidade Relativa":e.includes("00PA")?"Press\xe3o Atmosf\xe9rica":e.includes("00UV")?"Radia\xe7\xe3o Ultravioleta":e.includes("00VI")?"Vento - Intensidade":e.includes("00VD")?"Vento - Dire\xe7\xe3o":e.includes("0SO2")?"Di\xf3xido de Enxofre":e.includes("00O3")?"Ozono":e.includes("0NO2")?"Di\xf3xido de Azoto":e.includes("TEMP")?"Temperatura":e.includes("00PP")?"Precipita\xe7\xe3o":e.includes("LAEQ")?"N\xedvel sonoro cont\xednuo equivalente, em dB(A)":e.includes("0TMD")?"Ve\xedculos (por hora)":e}(e.id),o.map="http://maps.google.com/maps?q=".concat(o.lat,",").concat(o.lng),s.push(o)}));var l=[{name:"ID",selector:"id",sortable:!0},{name:"Data / Hora",selector:"date",sortable:!0},{name:"Categoria",selector:"category",sortable:!0},{name:"Sensor",selector:"sensor",sortable:!0},{name:"Esta\xe7\xe3o",selector:"address",sortable:!0},{name:"Valor",selector:"value",sortable:!0},{name:"Unidade",selector:"unit",sortable:!0},{name:"Localiza\xe7\xe3o",selector:"map",sortable:!0,cell:function(e){return Object(g.jsx)("a",{href:e.map,children:"Mapa"})}}],i=r.a.useState(""),d=Object(u.a)(i,2),b=d[0],f=d[1],v=r.a.useState(!1),C=Object(u.a)(v,2),p=C[0],w=C[1],y=s.filter((function(e){return e.address&&e.address.toLowerCase().includes(b.toLowerCase())||e.category.toLowerCase().includes(b.toLowerCase())||e.sensor.toLowerCase().includes(b.toLowerCase())})),O=r.a.useMemo((function(){return Object(g.jsx)(m,{onFilter:function(e){return f(e.target.value)},onClear:function(){b&&(w(!p),f(""))},filterText:b})}),[b,p]);return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(c.a,{title:"Sensores de Qualidade do Ambiente - CML",columns:l,data:y,theme:"solarized",responsive:!0,conditionalRowStyles:h,subHeader:!0,subHeaderComponent:O,persistTableHead:!0})})},C=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,26)).then((function(n){var o=n.getCLS,t=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;o(e),t(e),r(e),a(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),C()}},[[25,1,2]]]);
//# sourceMappingURL=main.3f90723e.chunk.js.map