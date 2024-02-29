import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './styles.css';
import { saveDataToDatabase } from './dbConfig';
import excelImage from './img/excel.PNG';

const ImportExcelPage = () => {
  const [file, setFile] = useState(null);
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

      // Aqui você pode enviar jsonData para o backend para salvar no banco de dados
      saveDataToDatabase(jsonData);

      // Atualizar o estado com os dados consultados
      setConsultedData(jsonData);
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

    </div>
  );
};

export default ImportExcelPage;
