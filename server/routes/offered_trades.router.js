const express = require('express');
const { actionChannel } = require('redux-saga/effects');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
  // GET route code here
  const query = `SELECT * FROM "offered_trades" WHERE owner_id=${req.params.id};`
  pool.query( query )
  .then((results) =>{
    let objectToSend = [];
    results.rows.map((offer) => {
      console.log( 'offer:', offer );
      const ownedQuery = `SELECT * FROM "plants" WHERE id=${offer.ownedplant_id};`;
      pool.query( ownedQuery ).then( (result1)=>{
        console.log( result1.rows );
        offer.ownedPlant= result1.rows[0];
        const tradeQuery = `SELECT * FROM "plants" WHERE id=${offer.tradeplant_id};`;
        pool.query( tradeQuery ).then( (result2)=>{
          console.log( result2.rows );
          offer.tradePlant= result2.rows[0];
          console.log( offer );
          objectToSend.push( offer );
          if( objectToSend.length === results.rowCount ){
            console.log( ' ------------------------> end of map:', objectToSend );
            res.send( objectToSend );
          }
        }).catch( (err)=>{
          console.log( err );
          res.sendStatus( 500 );
        }) // end owned
      }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
      }) // end traded
    }) // end map
  }) // end all
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

/*** UPDATE route ***/
router.put('/', (req, res) => {
  console.log('in owneredit:', req.body);
  const editOwnerQuery = `UPDATE offered_trades WHERE id=${req.body};`
  const values = [req.body];
  pool.query( editOwnerQuery).then( ()=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

/*** DELETE route ***/
router.delete('/:id', (req, res) => {
  console.log('in delete route on server:', req.params);
  const deleteOfferedTrades = `DELETE FROM offered_trades WHERE id=${req.params.id};`
  // const values = req.body];
  pool.query( deleteOfferedTrades).then( ()=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

module.exports = router;
