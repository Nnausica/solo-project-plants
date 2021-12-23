const express = require('express');
const { actionChannel } = require('redux-saga/effects');
const pool = require('../modules/pool');
const router = express.Router();


/*** GET route ***/
router.get('/:id', (req, res) => {
  // GET route code here
  const query = `SELECT * FROM "offered_trades" WHERE owner_id=${req.params.id};`
  pool.query( query )
  .then((result) =>{
    console.log();
    res.send(result.rows)
  })
  .catch(err=>{
    console.log(err);
    res.sendStatus(500)
  })
});

/*** POST route template ***/
router.post('/', (req, res) => {
  console.log('in offered_trades post:', req.body);
  const addTradeQuery = `INSERT INTO "offered_trades" ("owner_id", "ownedplant_id", "trader_id", "tradeplant_id", "accepted_trade") VALUES ($1, $2, $3, $4, $5)`;
  values = [req.body.owner_id, req.body.ownedplant_id, req.body.trader_id, req.body.tradeplant_id, req.body.accepted_trade];
  pool.query( addTradeQuery, values).then( (results)=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

// router.put('/', (req, res) => {
//   console.log('in edit:', req.body);
//   pool.query( ).then( ()=>{
//     res.sendStatus( 200);
//   }).catch( (err)=>{
//     console.log( err);
//     res.send( 500);
//   })
// });

module.exports = router;
