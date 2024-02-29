import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ImportExcelPage from './ImportExcelPage';

function App() {
  const [classMercadologicaData, setClassMercadologicaData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/class_mercadologica');
      setClassMercadologicaData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
     
      <div className="data-container">
        <ImportExcelPage data={classMercadologicaData} />
      </div>
    </div>
  );
}

export default App;
