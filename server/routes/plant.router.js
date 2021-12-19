const express = require('express');
const { actionChannel } = require('redux-saga/effects');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('in addplant post:', req.body);
  const addPlantQuery = `INSERT INTO "plants" ("user_id", "plant_name", "description", "available") VALUES ($1, $2, $3, $4)`;
  values = [req.body.user_id, req.body.plant_name, req.body.description, req.body.available];
  pool.query( addPlantQuery, values).then( (results)=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

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
