const mysql = require('mysql');

//configuração do banco
const config = {
  host: 'db',
  user: 'people',
  password: 'S3cr3t0',
  database: 'nodedb',
  multipleStatements: true
};
const db = mysql.createConnection(config);

//efetiva a conexão com banco
db.connect((erro) => {
  if (erro) {
    throw erro;
  };
  console.log(`Conectado ao banco!`);
});

global.db = db;

module.exports = db;
