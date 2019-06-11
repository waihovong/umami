var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//user requests the login page
//when successful make a query to the database

router.get('/restaurantINFO', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      console.log("fail");
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


router.post('/signin', function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
    }
    var query = "SELECT id, name FROM Users WHERE email = ? AND password_hash = SHA2(?, 256)";
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

router.post('/managerlog', function(req, res, next) {
  req.pool.getConnection(function(err, connection) {
    if(err) {
      res.sendStatus(402);
    }
    var query = "SELECT res_id, res_name FROM res_account WHERE email = ? AND password = SHA2(?, 256)";
    connection.query(query, [req.body.email, req.body.pass], function(err, rows, fields) {
      connection.release();
      if(rows.length > 0) {
        req.session.managerid = rows[0].id;
        res.send(rows[0].name);
      } else {
        res.sendStatus(403);
      }
    });
  });
});

router.post('/signup', function(req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if(err) {
      res.sendStatus(402);
    }
      var insertQuery = "INSERT INTO Users VALUES (id, ?, ?, SHA2(?,256))";
      connection.query(insertQuery, [req.body.name, req.body.email, req.body.pass ], function(err, rows, fields) {
        connection.release();
        if(err) {
          res.sendStatus(402);
        } else {
          res.sendStatus(200);
        }
      });
    });
});

router.post('/resRegister', function(req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if(err) {
      res.sendStatus(402);
    }
    var insertQueryRes = "INSERT INTO restaurants (restaurantID, name, email, address, phone, openhours, cuisine, password) VALUES (restaurantID, ?, ?, ?, ?, ?, ?, SHA2(?, 256))";
    connection.query(insertQueryRes, [req.body.name, req.body.email, req.body.address, req.body.phone, '%' + req.body.open + '%', req.body.cuisine , req.body.pass], function(err, rows, fields) {
      connection.release();
      if(err) {
        res.sendStatus(402);
      } else {
        console.log(rows);
        res.sendStatus(200);
      }
    });
  });
});

module.exports = router;
