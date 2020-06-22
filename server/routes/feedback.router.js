const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('GET /api/feedback');
  pool.query('SELECT * from "feedback";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /api/feedback', error)
    res.sendStatus(500);
  });
})

router.post('/', (req, res) => {
  let info = req.body;
  console.log(`Adding book`, info);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [info.feeling, info.understanding, info.support, info.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});


module.exports = router;