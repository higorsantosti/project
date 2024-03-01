import React, { useState, useEffect } from 'react';
import './App.css';
import ImportExcelPage from './ImportExcelPage';
import FiltrosClassMerc from './FiltrosClassMerc';

function App() {
  const [classMercadologicaData, setClassMercadologicaData] = useState([]);
  const [consultedData, setConsultedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/class_merc');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
  
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const data = await response.json();
        setClassMercadologicaData(data);
      } else {
        // Aqui você pode lidar com a resposta de acordo com a sua lógica de aplicativo
        console.error('Erro: Resposta do servidor não está no formato JSON');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  return (
    <div className="App">
      <div className="data-container">
        <ImportExcelPage data={consultedData.length > 0 ? consultedData : classMercadologicaData} />
        <FiltrosClassMerc data={classMercadologicaData} setConsultedData={setConsultedData} />
      </div>
    </div>
  );
}

export default App;
