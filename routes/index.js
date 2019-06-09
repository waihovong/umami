var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//user requests the login page
//when successful make a query to the database
router.post('/template', function(req, res, next) {
  req.pool.getConnection( function(err, connection) {
    if(err) {
      res.sendStatus(402);
    }
    var query = "SELECT id, name FROM Users WHERE email = ? AND password_hash = SHA2(?, 256)";
    connection.query(query, [req.body.email,req.body.pass], function(err, rows, fields) {
      connection.release();
      console.log(rows);
      if(rows.length > 0) {
        req.session.userid = rows[0].id;
        res.send(rows[0].name);
      } else {
        res.sendStatus(403);
        }
    });
  });
});

module.exports = router;
