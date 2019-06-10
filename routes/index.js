var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


//Review functions and stuff
//post request to send reviews to the database
router.post('/addreview', function(req, res, next) {

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }
    var query = "INSERT INTO reviews (review_title, content, post_time) VALUES (?, ?, NOW())";
    connection.query(query, [req.body.title, req.body.content], function(err, rows, fields) {
      connection.release();
      if (err) {
        res.sendStatus(402);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

//get request to retrieve the posted review from the database
router.get('/postreview', function(req, res, next) {


  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }

    if ('q' in req.query) {

      var query = "SELECT review_id AS id, review_title, content AS body, post_time AS timestamp FROM reviews WHERE review_title LIKE ? OR content LIKE ?";
      connection.query(query, ['%'+req.query.q+'%','%'+req.query.q+'%'], function(err, rows, fields) {
          connection.release(); // release connection
          if (err) {
              res.status(402).send(err);
          } else {
              res.json(rows);
          }
      });

    } else {
        var query = "SELECT review_id AS id, review_title, content AS body, post_time AS timestamp FROM reviews";
        connection.query(query, function(err, rows, fields) {
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

    var query = "SELECT * FROM restaurants WHERE restaurantID = 8;";
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
    // var name = req.body.name;
    // var email = req.body.email;
    // var password = req.body.pass2;
    // var pass = SHA2(password,256);
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

module.exports = router;
