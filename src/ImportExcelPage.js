import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './styles.css';
import { saveDataToDatabase } from './dbConfig';
import excelImage from './img/excel.PNG';

const ImportExcelPage = () => {
  const [file, setFile] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [consultedData, setConsultedData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleImport = async () => {
    if (!file) {
      alert('Por favor, selecione um arquivo Excel.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Aplicar filtros, se necessário, nos dados importados
      const filteredData = jsonData.filter(item => {
        // Implementar lógica de filtragem aqui
        return true;
      });

      // Aqui você pode enviar filteredData para o backend para salvar no banco de dados
      saveDataToDatabase(filteredData);

      // Atualizar o estado com os dados consultados
      setConsultedData(filteredData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="container">
      <h2>Importar Planilha do Excel</h2>
      <p>Por favor, estruture sua planilha conforme mostrado abaixo:</p>
      <p>( sku , descricao , departamento, secao, grupo, subgrupo, preco_venda, curva )</p>
      <img 
        src={excelImage} alt="Exemplo de estrutura de planilha" 
        className="excel-image"
      />
      <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
      <button onClick={handleImport}>Importar Planilha</button>

      <div className="filters">
        <div className="input-container">
          <label>Data Inicial:</label>
          <input type="date" className="date-input" value={startDate} onChange={e => setStartDate(e.target.value)} />
        
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

        <button className="consulta" onClick={handleImport}>Consultar</button>
      </div>

      {/* Grid para exibir os dados consultados */}
      <div className="consulted-data">
      <h1>Dados da Tabela Class Mercadologica</h1>
        <table>
          <thead>
            <tr>
              <th>Coluna 1</th>
              <th>Coluna 2</th>
              {/* Adicione mais colunas conforme necessário */}
            </tr>
          </thead>
          <tbody>
            {consultedData.map((rowData, index) => (
              <tr key={index}>
                <td>{rowData[0]}</td>
                <td>{rowData[1]}</td>
                {/* Adicione mais células conforme necessário */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportExcelPage;
