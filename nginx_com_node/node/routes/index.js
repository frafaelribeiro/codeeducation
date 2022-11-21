var express = require( 'express' );
var db = require( '../Util/db' );
var router = express.Router();

/* GET home page. */
router.get( '/', function ( req, res, next ) {
  // Criar tabela people
  var createPeople = `create table if not exists people(
                        id int not null auto_increment, 
                        name varchar(255), 
                        primary key (id))`;
  db.query( createPeople, ( erro, resultado, campos ) => {
    if ( erro ) {
      res.status( 500 ).send( erro );
      return console.error( erro.message );
    };
    console.log( 'Tabela people criada!' );
  } );

  // Inserir dado na tabela
  var insertPeople = 'insert into people(name) values("Rafael")';
  db.query( insertPeople, ( erro, resultado, campos ) => {
    if ( erro ) {
      res.status( 500 ).send( erro );
      console.log( erro.message );
    };
    console.log( 'Linha inserida: ' + resultado.affectedRows );
    console.log( 'People Id: ' + resultado.insertId );
  } )

  /*
  // Atualiza dado na tabela
  var updatePeople = 'update people set name= ?';
  var dataPeopleUpdate = ['Rafael Ribeiro'];

  db.query( updatePeople, dataPeopleUpdate, ( erro, resultado, campos ) => {
    if ( erro ) {
      res.status( 500 ).send( erro );
      return console.error( erro.message );
    };
    console.log( 'Linhas afetadas: ', resultado.affectedRows );
  } );
  */

  // Consulta o banco
  var selectPeople = 'select * from people';
  db.query( selectPeople, ( erro, resultado, campos ) => {
    if ( erro ) {
      res.status( 500 ).send( erro );
      return console.error( erro.message );
    };
    res.render( 'index', { title: 'Full Cycle Rocks!', lista: resultado } );
    console.log( resultado );
  } );

} );

module.exports = router;
