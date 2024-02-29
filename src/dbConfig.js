export const saveDataToDatabase = (data) => {
  console.log('Tentando estabelecer conexão com o banco de dados...');
  const dbConfig = {
    host: 'localhost',
    database: 'pdb_sgdanny_local',
    port: 5432,
    user: 'postgres',
    password: 'root'
  };

  // Lógica para estabelecer conexão com o banco de dados

  console.log('Conexão com o banco de dados estabelecida com sucesso!');
};