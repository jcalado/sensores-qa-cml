const LOW = "#92D050";
const MEDIUM = "#FFFF00";
const HIGH = "#FFC000";
const DANGER = "#FF0000";
const EXTREME = "#8234ff";

const RowStyles = [
  {
    when: row => row.sensor === 'Radiação Ultravioleta' && row.value < 6,
    style: {
      backgroundColor: LOW,
    },
  },
  {
    when: row => row.sensor === 'Radiação Ultravioleta' && row.value > 6,
    style: {
      backgroundColor: MEDIUM,
    },
  },
  {
    when: row => row.sensor === 'Radiação Ultravioleta' && row.value > 8,
    style: {
      backgroundColor: HIGH,
    },
  },
  {
    when: row => row.sensor === 'Radiação Ultravioleta' && row.value >= 11,
    style: {
      backgroundColor: DANGER,
    },
  },
  {
    when: row => row.sensor === 'Partículas ø < 2.5µm' && row.value < 20,
    style: {
      backgroundColor: LOW,
    },
  },
  {
    when: row => row.sensor === 'Partículas ø < 2.5µm' && row.value > 21,
    style: {
      backgroundColor: MEDIUM,
    },
  },
  {
    when: row => row.sensor === 'Partículas ø < 2.5µm' && row.value > 26,
    style: {
      backgroundColor: HIGH,
    },
  },
  {
    when: row => row.sensor === 'Partículas ø < 2.5µm' && row.value > 51,
    style: {
      backgroundColor: DANGER,
    },
  },
  {
    when: row => row.sensor === 'Partículas ø < 10µm' && row.value < 35,
    style: {
      backgroundColor: LOW,
    },
  },
  {
    when: row => row.sensor === 'Partículas ø < 10µm' && row.value > 101,
    style: {
      backgroundColor: 'red',
    },
  },
  {
    when: row => row.sensor === 'Ozono' && row.value < 101,
    style: {
      backgroundColor: LOW,
    },
  },
  {
    when: row => row.sensor === 'Ozono' && row.value > 101,
    style: {
      backgroundColor: MEDIUM,
    },
  },
  {
    when: row => row.sensor === 'Ozono' && row.value > 181,
    style: {
      backgroundColor: HIGH,
    },
  },
  {
    when: row => row.sensor === 'Ozono' && row.value > 241,
    style: {
      backgroundColor: DANGER,
    },
  },
  {
    when: row => row.sensor === 'Temperatura' && row.value < 34,
    style: {
      backgroundColor: LOW,
    },
  },
  {
    when: row => row.sensor === 'Ozono' && row.value < 37,
    style: {
      backgroundColor: MEDIUM,
    },
  },
  {
    when: row => row.sensor === 'Ozono' && row.value < 40,
    style: {
      backgroundColor: HIGH,
    },
  },
  {
    when: row => row.sensor === 'Ozono' && row.value > 40,
    style: {
      backgroundColor: DANGER,
    },
  },
  {
    when: row => row.category === 'Ruído' && row.value <= 54,
    style: {
      backgroundColor: LOW,
    },
  },
  {
    when: row => row.category === 'Ruído' && row.value > 55,
    style: {
      backgroundColor: MEDIUM,
    },
  },
  {
    when: row => row.category === 'Ruído' && row.value > 60,
    style: {
      backgroundColor: HIGH,
    },
  },
  {
    when: row => row.category === 'Ruído' && row.value > 65,
    style: {
      backgroundColor: DANGER,
    },
  }
];

export default RowStyles;