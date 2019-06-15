var express = require('express');
var router = express.Router();
var link;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
  res.clearCookie("resID");
});

//Review functions and stuff
//post request to send reviews to the database
router.post('/addreview', function (req, res, next) {

  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }
    var query = "INSERT INTO reviews (review_title, content, post_time) VALUES (?, ?, NOW())";
    connection.query(query, [req.body.title, req.body.content], function (err, rows, fields) {
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
router.get('/postreview', function (req, res, next) {


  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }

    if ('q' in req.query) {

      var query1 = "SELECT review_id AS id, review_title, content AS body, post_time AS timestamp FROM reviews WHERE review_title LIKE ? OR content LIKE ?";
      connection.query(query1, ['%' + req.query.q + '%', '%' + req.query.q + '%'], function (err, rows, fields) {
        connection.release(); // release connection
        if (err) {
          res.status(402).send(err);
        } else {
          res.json(rows);
        }
      });

    } else {
      var query = "SELECT review_id AS id, review_title, content AS body, post_time AS timestamp FROM reviews";
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

// router.get('/resLink', function (req, res, next) {
//   link = req.query.name;
//   res.cookie("name", link);
//   res.send("name");
// });

router.post('/resLink', function (req, res, next) {

  //Connect to the database
  link = req.body.restaurantName;
});

//user requests the login page
//when successful make a query to the database

router.get('/restaurantINFO', function (req, res, next) {
  //Connect to the database

  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }

    if (link !== null || link != '') {
      var query = "SELECT images.imageurl,images.imageurl2,images.imageurl3,images.imageurl4,images.imageurl5, restaurants.restaurantID, restaurants.name, restaurants.email, restaurants.address, restaurants.phone, TIME_FORMAT(restaurants.openhours, \"%h:%i %p\") openhours, TIME_FORMAT(restaurants.closehours, \"%h:%i %p\") closehours, restaurants.rating, restaurants.cuisine FROM restaurants, images WHERE name LIKE '" + link + "' AND restaurants.restaurantID = images.resID;";
      connection.query(query, function (err, rows, fields) {
        connection.release(); // release connection
        if (err) {
          res.status(402).send(err);
        } else {
          res.cookie('resID', rows[0].restaurantID, {
            maxAge: 86400 * 1000, // 24 hours
          });
          res.json(rows); //send response

        }

      });
    }
  });
});

router.post('/addbooking', function (req, res, next) {

  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }
    var query = "INSERT INTO bookings (res_id,user_id,date,time,people) VALUES (" + req.cookies['resID'] + "," + req.cookies['userid'] + ",?,?,?)";
    connection.query(query, [req.body.date, req.body.time, req.body.people], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(402);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

router.get('/getUpcomingBooking', function (req, res, next) {
  res.clearCookie("upcomingBookingID");
  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }

    var query = "SELECT restaurants.name, bookings.booking_id, DATE_FORMAT(bookings.date, \"%d/%m/%Y\") date, TIME_FORMAT(bookings.time, \"%h:%i %p\") time, bookings.people FROM bookings, restaurants WHERE bookings.user_id = " + req.cookies['userid'] + " AND restaurants.restaurantID = bookings.res_id AND CURRENT_TIMESTAMP() <= TIMESTAMP(bookings.date, bookings.time)";
    connection.query(query, function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.status(402).send(err);
      } else {
        res.cookie('upcomingBookingID', rows, {
          maxAge: 86400 * 1000, // 24 hours
        });
        res.json(rows);
      }
    });
  });
});

router.post('/updateUpcomingbooking', function (req, res, next) {
  var bookingCookie = req.cookies['upcomingBookingID'];
  var bookID = bookingCookie[req.body.bookingID].booking_id;
  console.log(bookID);
  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }
    console.log("bookingID:" + bookID);
    var query = "UPDATE bookings SET date = ?, time = ?, people = ? WHERE booking_id =" + bookID + ";"
    connection.query(query, [req.body.bDate, req.body.bTime, req.body.bPeople], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(402);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

router.get('/getPastBooking', function (req, res, next) {

  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }

    var query = "SELECT restaurants.name, DATE_FORMAT(bookings.date, \"%d/%m/%Y\") date, TIME_FORMAT(bookings.time, \"%h:%i %p\") time, bookings.people FROM bookings, restaurants WHERE bookings.user_id = " + req.cookies['userid'] + " AND restaurants.restaurantID = bookings.res_id AND CURRENT_TIMESTAMP() > TIMESTAMP(bookings.date, bookings.time);";
    connection.query(query, function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.status(402).send(err);
      } else {
        res.json(rows);
      }
    });
  });
});


router.get('/getSearch', function (req, res, next) {

  //Connect to the database
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
      return;
    }

    if ('q' in req.query) {
      var query = "SELECT * FROM restaurants WHERE name LIKE ? OR cuisine LIKE ?";
      connection.query(query, ['%' + req.query.q + '%', '%' + req.query.q + '%'], function (err, rows, fields) {
        connection.release(); // release connection
        if (err) {
          res.status(402).send(err);
        } else {
          res.json(rows);
        }
      });

    } else {
      var query3 = "SELECT * FROM restaurants";
      connection.query(query3, function (err, rows, fields) {
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
      if (rows.length > 0) {
        req.session.userid = rows[0].id;
        res.send(rows[0].name);
      } else {
        res.sendStatus(403);
      }
    });
  });
});

router.post('/managerlog', function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
    }
    var query = "SELECT res_id, res_name FROM res_account WHERE email = ? AND password = SHA2(?, 256)";
    connection.query(query, [req.body.email, req.body.pass], function (err, rows, fields) {
      connection.release();
      if (rows.length > 0) {
        req.session.managerid = rows[0].id;
        res.send(rows[0].name);
      } else {
        res.sendStatus(403);
      }
    });
  });
});

router.post('/signup', function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
    }
    var insertQuery = "INSERT INTO Users VALUES (id, ?, ?, SHA2(?,256))";
    connection.query(insertQuery, [req.body.name, req.body.email, req.body.pass], function (err, rows, fields) {
      connection.release();
      if (err) {
        res.sendStatus(402);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

router.post('/resRegister', function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(402);
    }
    var insertQueryRes = "INSERT INTO restaurants (restaurantID, name, email, address, phone, openhours, closehours, cuisine, password) VALUES (restaurantID, ?, ?, ?, ?, ?, ?, ?, SHA2(?, 256))";
    connection.query(insertQueryRes, [req.body.name, req.body.email, req.body.address, req.body.phone, req.body.open, req.body.close, req.body.cuisine, req.body.pass], function (err, rows, fields) {
      connection.release();
      if (err) {
        res.sendStatus(402);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

router.post('/checkSession', function (req, res, next) {
  if (req.session.userid !== undefined) {
    res.cookie('userid', req.session.userid, {
      maxAge: 86400 * 1000, // 24 hours
    });
    res.send("user");
  } else {
    res.send("not logged");
  }
});

router.post('/logoutUser', function (req, res, next) {
  if (req.session.userid !== undefined) {
    req.session.destroy();
  }
  res.sendStatus(200);
});

module.exports = router;
