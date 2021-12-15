const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in router.get plant');
  const query = `SELECT * FROM plants`
  pool.query(query)
  .then((result) =>{
    console.log('plants return data:', result.rows);
    res.send(result.rows)
  })
  .catch(err =>{
    console.log('error in GET PLANTS router', err);
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
