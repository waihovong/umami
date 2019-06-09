var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/restaurantINFO', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }


    var query = "SELECT * FROM restaurants WHERE restaurantID = 1;";
    connection.query(query, function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.status(402).send(err);
      } else {
        res.json(rows); //send response
      }
    });

  });
});


router.get('/getSearch', function (req, res, next) {

  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      console.log("connection fail");
      res.sendStatus(402);
      return;
    }

    if ('q' in req.query) {

      var query = "SELECT * FROM restaurants WHERE name LIKE ?";
      connection.query(query, ['%' + req.query.q + '%'], function (err, rows, fields) {
        connection.release(); // release connection
        if (err) {
          res.status(402).send(err);
        } else {
          res.json(rows);
        }
      });

    } else {
      var query = "SELECT * FROM restaurants";
      connection.query(query, function (err, rows, fields) {
        connection.release(); // release connection
        if (err) {
          res.status(402).send(err);
        } else {
          res.json(rows);
        }
      });
    }
  });


});


router.post('/template', function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
    }
    var query = "SELECT id, name FROM Users WHERE email = ? AND password_hash = sha2(?, 256)";
    connection.query(query, [req.body.email, req.body.pass], function (err, rows, fields) {
      connection.release();
      console.log(rows);
      if (rows.length > 0) {
        req.session.userid = rows[0].id;
        res.send(rows[0].name);
      } else {
        res.sendStatus(403);
      }
    });
  });
});

module.exports = router;
