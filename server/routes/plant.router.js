const express = require('express');
const { actionChannel } = require('redux-saga/effects');
const pool = require('../modules/pool');
const router = express.Router();


/*** GET route ***/
router.get('/userplant', (req, res) => {
  // GET route code here
  console.log('in router.get plant', req.query);
  const query = `SELECT * FROM plants WHERE user_id=${req.query.id};`
  pool.query(query )
  .then((result) =>{
    console.log('plants return data:', result.rows);
    res.send(result.rows)
  })
  .catch(err =>{
    console.log('error in GET PLANTS router', err);
    res.sendStatus(500)
  })
});

router.get('/tradeplants', (req, res) => {
  // GET route code here
  console.log('in trades router- whats the query:', req.query.id);
  const query = `SELECT * FROM plants WHERE available=true AND user_id<>${req.query.id};`
  pool.query(query)
  .then((result) =>{
    console.log('trade plants return data:', result.rows);
    res.send(result.rows)
  })
  .catch(err =>{
    console.log('error in GET trade PLANTS router', err);
    res.sendStatus(500)
  })
});

router.get('/tradeitems:id?', (req, res) => {
  // GET route code here
  console.log('in ITEMS router- whats the query:', req.query.id);
  const query = `SELECT plants.plant_name AS owned_plant_name, plants.description AS owned_plant_description FROM "user" JOIN plants ON plants.user_id="user".id
  JOIN offered_trades on offered_trades.owner_id=plants.user_id WHERE owner_id=${req.query.id} AND plants.id=offered_trades.ownedplant_id;`
  pool.query(query)
  .then((result) =>{
    console.log('trade items return data:', result.rows);
    res.send(result.rows)
  })
  .catch(err =>{
    console.log('error in GET trade ITEMS router', err);
    res.sendStatus(500)
  })
});

router.get('/ownertradeitems:id?', (req, res) => {
  // GET route code here
  console.log('in OWNER ITEMS router- whats the query:', req.query.id);
  const query = `SELECT plants.plant_name AS traded_plant_name, plants.description AS traded_plant_description FROM "user" JOIN plants ON plants.user_id="user".id
  JOIN offered_trades on offered_trades.trader_id=plants.user_id WHERE trader_id=${req.query.id} AND plants.id=offered_trades.tradeplant_id;`
  pool.query(query)
  .then((result) =>{
    console.log('owned items return data:', result.rows);
    res.send(result.rows)
  })
  .catch(err =>{
    console.log('error in GET trade OWNED ITEMS router', err);
    res.sendStatus(500)
  })
});

/*** POST route ***/
router.post('/', (req, res) => {
  console.log('in addplant post:', req.body);
  const addPlantQuery = `INSERT INTO "plants" ("user_id", "plant_name", "description", "available", "photo") VALUES ($1, $2, $3, $4, $5)`;
  values = [req.body.user_id, req.body.plant_name, req.body.description, req.body.available, req.body.photo];
  pool.query( addPlantQuery, values).then( (results)=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

/*** UPDATE route ***/
router.put('/', (req, res) => {
  console.log('in edit:', req.body);
  const editPlantQuery = `UPDATE plants SET available=$1 WHERE id=${req.body.id};`;
  const values = [req.body.available];
  pool.query( editPlantQuery, values).then( ()=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

module.exports = router;
