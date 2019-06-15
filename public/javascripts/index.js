function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

// var bookSide = document.getElementById("mySidemenu");
function openSM() {
  document.getElementById("mySidemenu").style.width = "450px";
  // document.getElementsByClassName("banner-img")[0].style.marginRight = "450px";
}

function closeSM() {
  document.getElementById("mySidemenu").style.width = "0";
  // document.getElementsByClassName("banner-img")[0].style.marginRight = "0";
}

function toNextDiv() {
  var scrolling = document.getElementById("second-content");
  scrolling.scrollIntoView();
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var address;
var rates;
var sum;
var start;
var keyword;
function searchBarFunction() {
  keyword = document.getElementById("search-bar").value;
  sum = 0;
  start = 0;
  if (event.keyCode == 13) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var resSearch = JSON.parse(this.responseText);

        var pdiv = document.getElementById('Results');
        pdiv.innerHTML = '';
        if (resSearch.length == 0) {
          pdiv.innerHTML += '<div id=noResults>' +
            '<h2>No results found for "' + keyword + '" </h2>' +
            '<p>Please try again </p> \n' +
            '</div>\n';

        } else {
          sum = resSearch[0].rating;
          resSearch.forEach(function (element) {
            pdiv.innerHTML +=
              '<div id="searchResults" onclick="resSave(\'' + element.name + '\')"> \n' +
              '<div id="searchImage">\n' +
              '<img id="resImage" src="./images/res' + element.restaurantID + '-compressor.jpg" alt="restaurant 1"> \n' +
              '</div> \n' +
              '<div id="searchInfo"> \n' +
              '<h2>' + element.name + '</h2> \n' +
              '<p>#' + element.cuisine + '</p> \n' +
              '<a id="address" v-bind:href="https://maps.google.com/?q=' + element.address + '" target="_blank" v-cloak><i class="fas fa-map-marker-alt"></i>' + element.address + '</a> \n' +
              '<div id="rating"> \n' +
              '<h4>Rating:</h4> \n' +
              '<span class="fa fa-star"></span> \n' +
              '<span class="fa fa-star"></span> \n' +
              '<span class="fa fa-star"></span> \n' +
              '<span class="fa fa-star"></span> \n' +
              '<span class="fa fa-star"></span> \n' +
              '<span>' + element.rating + '/5</span> \n' +
              '</div> \n' +
              '</div> \n'; +
                '</div>\n';

            var rates = element.rating;
            sum = start + rates;
            for (var i = start; i < sum; i++) {
              document.getElementsByClassName("fa-star")[i].className += ' checked';
            }
            start += 5;
          });
        }
      }
    };
    xhttp.open("GET", "/getSearch?q=" + encodeURIComponent(keyword), true);
    xhttp.send();

    // window.location.href = "booking.html";
    var main = document.getElementById("main");
    var menu = document.getElementById("Results");
    if (keyword == '') {
      main.style.display = "block";
      menu.style.display = "none";
    } else {
      main.style.display = "none";
      menu.style.display = "block";
    }
    return false;
  }
}

var cuisine;
function searchLink(value) {
  cuisine = value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var resSearch = JSON.parse(this.responseText);
      start = 0;

      var pdiv = document.getElementById('Results');
      pdiv.innerHTML = '';
      if (resSearch.length == 0) {
        pdiv.innerHTML += '<div id=noResults>' +
          '<h2>No results found for "' + cuisine + '" </h2>' +
          '<p>Please try again </p> \n' +
          '</div>\n';
      } else {
        sum = resSearch[0].rating;
        resSearch.forEach(function (element) {
          pdiv.innerHTML +=
            '<div id="searchResults" onclick="resSave(\'' + element.name + '\')"> \n' +
            '<div id="searchImage">\n' +
            '<img id="resImage" src="./images/res1-compressor.jpg" alt="restaurant 1"> \n' +
            '</div> \n' +
            '<div id="searchInfo"> \n' +
            '<h2>' + element.name + '</h2> \n' +
            '<p>#' + element.cuisine + '</p> \n' +
            '<a id="address" v-bind:href="https://maps.google.com/?q=' + element.address + '" target="_blank" v-cloak><i class="fas fa-map-marker-alt"></i>' + element.address + '</a> \n' +
            '<div id="rating"> \n' +
            '<h4>Rating:</h4> \n' +
            '<span class="fa fa-star checked"></span> \n' +
            '<span class="fa fa-star checked"></span> \n' +
            '<span class="fa fa-star checked"></span> \n' +
            '<span class="fa fa-star"></span> \n' +
            '<span class="fa fa-star"></span> \n' +
            '<span>' + element.rating + '/5</span> \n' +
            '</div> \n' +
            '</div> \n'; +
              '</div>\n';

          var rates = element.rating;
          sum = start + rates;
          for (var i = start; i < sum; i++) {
            document.getElementsByClassName("fa-star")[i].className += ' checked';
          }
          start += 5;
        });
      }
    }
  };
  xhttp.open("GET", "/getSearch?q=" + encodeURIComponent(cuisine), true);
  xhttp.send();


  // window.location.href = "booking.html";
  var main = document.getElementById("main");
  var menu = document.getElementById("Results");
  if (cuisine == '') {
    main.style.display = "block";
    menu.style.display = "none";
  } else {
    main.style.display = "none";
    menu.style.display = "block";
  }
  return false;
}



// function loadTimes() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       var data = JSON.parse(xhttp.responseText);
//       // document.getElementById("openTime1").innerHTML = data.openingTimes;
//       myFunction(data);
//     }
//   }
//   xhttp.open("GET", "restaurants.txt");
//   xhttp.send();
// }

function myFunction(data) {
  var string = "";
  var i;

  // var data = document.getElementsByClassName("openTime");
  for (i = 0; i < data.length; i++) {
    string += '<tr>' + '<th>' + data[i].day + '</th>' + '<td>' + data[i].openingTimes + '</td>' + '</tr>';
  }
  // document.getElementsByClassName("openTime")[1].innerHTML = string;
  document.getElementById("openingHours").innerHTML = string;
}

// function resPage(rName) {

//   var xhttp = new XMLHttpRequest();

//   xhttp.open("POST", "/saveRes?name=" + encodeURIComponent(rName), true);
//   xhttp.setRequestHeader('Content-Type', 'application/json');
//   xhttp.send(rName);
// }

function restaurant() {
  // Create new AJAX request
  var xhttp = new XMLHttpRequest();

  // Define function that runs on response
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var restDetails = JSON.parse(this.responseText);
      restDetails.forEach(function(e) {
        var resName = e.name;
        var resAddress = e.address;
        var resCuisine = e.cuisine;
        var resPhone = e.phone;
        var resEmail = e.email;
        var resRating = e.rating;
        var resOpen = e.openhours;
        var resClose = e.closehours;
        var imagess=e.imageurl;
        var imagess2=e.imageurl2;
        var imagess3=e.imageurl3;
        var imagess4=e.imageurl4;
        var imagess5=e.imageurl5;

        var vueinst = new Vue({
          el: '.main-container-booking',
          data: {
            restaurant: resName,
            address: resAddress,
            linkAddress: "https://maps.google.com/?q=" + resAddress,
            phone: resPhone,
            linkPhone: 'tel:' + resPhone,
            email: resEmail,
            linkEmail: 'mailto:' + resEmail,
            rating: resRating + '/5',
            open: resOpen,
            close: resClose,
            img: imagess,
            img2: imagess2,
            img3: imagess3,
            img4: imagess4,
            img5: imagess5,
            
          },
        });

        var rates = e.rating;
        for (var i = 0; i < rates; i++) {
          document.getElementsByClassName("fa-star")[i].className += ' checked';
        }

      });
    }
  };
  // Open connection
  xhttp.open("GET", "/restaurantINFO?name=" + encodeURIComponent(name), true);

  // Send request
  xhttp.send();
}

function resSave(resName) {
  window.location = "/booking.html";
  var name = resName;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert('save!');
    } else if (this.readyState == 4 && this.status >= 400) {
      alert('No save');
    }
  };

  xhttp.open("POST", "/resLink", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify({ restaurantName: name }));
}

function book() {
  
if (session !== "user")
{
  alert('Please sign in to book');
}
  else if (document.getElementById('datePicker').value == 0 || document.getElementById('timePicker').value == 0 || document.getElementById('numberPicker').value === null) {
    alert('Missing Input Fields');
  } else {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        alert('booked!');
      } else if (this.readyState == 4 && this.status >= 400) {
        alert('Error adding Blog Post. Please try again.');
      }
    };

    xhttp.open("POST", "/addbooking", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({ date: document.getElementById('datePicker').value, time: document.getElementById('timePicker').value, people: document.getElementById('numberPicker').value }));
  }
}

function loadUpcomingBookings() {
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var resBookings = JSON.parse(this.responseText);

      var pdiv = document.getElementById('upcomingBookings');
      if (resBookings.length == 0) {
        pdiv.innerHTML += '<p>NO UPCOMING BOOKINGS </p>';
        
      } else {
        var iterateEdit = 0;
        pdiv.innerHTML = 
        '<tr> \n' +
        '<th>Restaurant</th> \n' +
        '<th>Date</th> \n' +
        '<th>Time</th> \n' +
        '<th>Number of people</th> \n' +
        '<th></th>' +
        '</tr>\n';
        resBookings.forEach(function (element) {
          pdiv.innerHTML +=
          '<tr> \n' +
          '<td>' + element.name + '</td> \n' +
          '<td>' + element.date + '</td> \n' +
          '<td>' + element.time + '</td> \n' +
          '<td>' + element.people + '</td> \n' +
          '<td><button type="button" class="editbutton" onclick="accountEditopenSM(' + iterateEdit + ')">Edit</button></td> \n'
          '</tr> \n';
          iterateEdit++;
        });
      }
    }
  };
  xhttp.open("GET", "/getUpcomingBooking", true);
  xhttp.send();

  return false;
}


var bookID;
function accountEditopenSM(value) {
  document.getElementsByClassName("mySidemenu")[0].style.width = "450px";
  bookID = value;
}

function CloseSM() {
  document.getElementsByClassName("mySidemenu")[0].style.width = "0";
  document.getElementsByClassName("mySidemenu")[1].style.width = "0";
  // document.getElementsByClassName("banner-img")[0].style.marginRight = "0";
}

function updateUpcomingbook() {

if (session !== "user")
{
  alert('Please sign in to book');
}
  else if (document.getElementById('datePicker').value == 0 || document.getElementById('timePicker').value == 0 || document.getElementById('numberPicker').value === null) {
    alert('Missing Input Fields');
  } else {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        alert('Updated!');
      } else if (this.readyState == 4 && this.status >= 400) {
        alert('Error updating booking. Please try again.');
      }
    };

    xhttp.open("POST", "/updateUpcomingbooking", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({bDate: document.getElementById('datePicker').value, bTime: document.getElementById('timePicker').value, bPeople: document.getElementById('numberPicker').value, bookingID: bookID}));
  }
}

function loadPastBookings() {
  var iterateReview = 0;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var resBookings = JSON.parse(this.responseText);

      var pdiv = document.getElementById('pastBookings');
      if (resBookings.length == 0) {
        pdiv.innerHTML += '<p>NO PAST BOOKINGS </p>';
        
      } else {
        pdiv.innerHTML = 
        '<tr> \n' +
        '<th>Restaurant</th> \n' +
        '<th>Date</th> \n' +
        '<th>Time</th> \n' +
        '<th>Number of people</th> \n' +
        '<th></th>' +
        '</tr>\n';
        resBookings.forEach(function (element) {
          pdiv.innerHTML +=
          '<tr> \n' +
          '<td>' + element.name + '</td> \n' +
          '<td>' + element.date + '</td> \n' +
          '<td>' + element.time + '</td> \n' +
          '<td>' + element.people + '</td> \n' +
          '<td><button type="button" class="reviewbutton" onclick="accountReviewopenSM(' + iterateReview + ')">Add Review</button></td> \n'
          '</tr> \n';
          iterateReview++;
        });
      }
    }
  };
  xhttp.open("GET", "/getPastBooking", true);
  xhttp.send();

  return false;
}

var reviewID;
function accountReviewopenSM(value) {
  document.getElementsByClassName("mySidemenu")[1].style.width = "450px";
  reviewID = value;
}

function onLogin() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // alert('Welcome ' + xhttp.responseText);
      window.location.pathname = "./index.html";
      // document.getElementById("userSession").innerHTML = "My Account";

    } else if (this.readyState == 4 && this.status == 403) {
      alert('Username or Password Incorrect');
    }
  };
  xhttp.open("POST", "/signin", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify({ email: document.getElementById('email').value, pass: document.getElementById('pass').value }));
}

function onSignUp() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // alert('You have Signed up to UMAMI');
      var success = document.getElementById("logSuccess").innerHTML = "Sign Up Successful";
    } else if (this.readyState == 4 && this.status >= 400) {
      alert('Email address already in use, please use another email!!!!!!!!!!!!!!');
    }
  };

  xhttp.open("POST", "/signup", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify({ name: document.getElementById('name2').value, email: document.getElementById('email2').value, pass: document.getElementById('pass2').value }));
}

function checkPasswords(value) {
  var check = value;
  var passCheck2 = document.getElementById("pass2").value;
  var passCheck3 = document.getElementById("pass3").value;

  if (passCheck2 !== passCheck3) {
    alert("Password does not match");
    return false;
  } else {
    if (value == 1) {
      onSignUp();
    } else if (value == 0) {
      restaurantSignUp();
    }
  }
}

function managerSignIn() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // alert('Welcome ' + xhttp.responseText);
      window.location.pathname = "./index.html";
      // document.getElementById("userSession").innerHTML = "My Account";

    } else if (this.readyState == 4 && this.status == 403) {
      alert('Username or Password Incorrect');
    }
  };
  xhttp.open("POST", "/managerlog", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify({ email: document.getElementById('email').value, pass: document.getElementById('pass').value }));
}

function restaurantSignUp() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // alert('Welcome ' + xhttp.responseText);
      var success = document.getElementById("logSuccess").innerHTML = "Sign Up Successful";
      // document.getElementById("userSession").innerHTML = "My Account";

    } else if (this.readyState == 4 && this.status == 403) {
      alert('Username or Password Incorrect');
    }
  };
  xhttp.open("POST", "/resRegister", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify({
    name: document.getElementById('res_name').value,
    email: document.getElementById('res_email').value,
    address: document.getElementById('res_address').value,
    phone: document.getElementById('res_phone').value,
    open: document.getElementById('res_open').value,
    close: document.getElementById('res_close').value,
    cuisine: document.getElementById('res_cuisine').value, 
    pass: document.getElementById('pass2').value }));
}

function logOutUser() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // alert('Welcome ' + xhttp.responseText);
      window.location.pathname = "./index.html";

    } else if (this.readyState == 4 && this.status == 403) {
      alert('failed to sign out');
    }
  };
  xhttp.open("POST", "/logoutUser", true);
  xhttp.send();    
}

var session;
function checkSessions() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200 && this.responseText == "user") {
      // alert('Welcome ' + xhttp.responseText);
      // document.getElementById("userSession").innerHTML = "My Account";
      document.getElementById("userSession").innerHTML = "Sign Out";
      document.getElementById("userSession").removeAttribute("href"); 
      document.getElementById("userSession").addEventListener("click", logOutUser);
      document.getElementById("userIcon").removeAttribute("href");
      document.getElementById("userIcon").setAttribute("href","./accounts.html");
      session = this.responseText;
      
    } else if (this.readyState == 4 && this.status == 200 && this.responseText == "not logged") {
      session = this.responseText;
    }
  };
  xhttp.open("POST", "/checkSession", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(); 
}

function addreview() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          alert('Posted!');
      } else if (this.readyState == 4 && this.status >= 400) {
          alert('Error adding review. Please try again.');
      }
  };

  xhttp.open("POST", "/addreview", true);
  xhttp.setRequestHeader('Content-Type','application/json');
  xhttp.send(JSON.stringify({title:document.getElementById('reviewtitle').value, content:document.getElementById('reviewcontent').value, rating: document.getElementById('rating').value, res_ID: reviewID}));
}

//function to grab reviews from database and display them
function postreview() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

          var breviews = JSON.parse(this.responseText);


          var pdiv = document.getElementById('reviews');
          pdiv.innerHTML = '';

          breviews.forEach(function(element){
              pdiv.innerHTML += '<div class="reviewpost">\n'+
                  '   <span>'+element.timestamp+'</span>\n'+
                  '   <h3>'+element.review_title+'</h3>\n'+
                  '   <p>'+element.body+'</p>\n'+
                  '<div>\n';
          });

      }
  };
  xhttp.open("GET", "/postreview?q="+encodeURIComponent(document.getElementById('reviewsearch').value), true);
  xhttp.send();
}

