import React, { useState } from 'react';

function FiltrosClassMerc({ data, setConsultedData }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');

  const applyFilters = () => {
    let filteredData = data.filter(item => {
      // Lógica para aplicar os filtros
      let matchesFilter = true;
      if (startDate && endDate) {
        // Implemente a lógica para verificar se a data está dentro do intervalo
      }
      if (departmentFilter) {
        matchesFilter = matchesFilter && item.departamento === departmentFilter;
      }
      if (sectionFilter) {
        matchesFilter = matchesFilter && item.secao === sectionFilter;
      }
      return matchesFilter;
    });
    setConsultedData(filteredData);
  };

  return (
    <div className="FiltrosClassMerc">
      <h2>Consulta produtos</h2>
      <div className="input-container">
        <label>Data Inicial:</label>
        <input type="date" className="date-input" value={startDate} onChange={e => setStartDate(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Data Final:</label>
        <input type="date" className="date-input" value={endDate} onChange={e => setEndDate(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Departamento:</label>
        <input type="text" className="text-input" value={departmentFilter} onChange={e => setDepartmentFilter(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Seção:</label>
        <input type="text" className="text-input" value={sectionFilter} onChange={e => setSectionFilter(e.target.value)} />
      </div>
      <button className="consulta" onClick={applyFilters}>Consultar</button>
    </div>
  );
}

export default FiltrosClassMerc;
