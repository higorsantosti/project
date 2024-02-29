export const saveDataToDatabase = (data) => {
    // Implemente a lógica para salvar os dados no banco de dados
    // utilizando as informações de configuração fornecidas
    const dbConfig = {
      host: '192.168.0.61',
      database: 'hub',
      port: 5432,
      user: 'postgres',
      password: 'terc1978@'
    };
  
    console.log('Dados importados:', data);
    console.log('Configurações do banco de dados:', dbConfig);
    
  };
  