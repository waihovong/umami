function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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

var bookSide = document.getElementById("mySidemenu");
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
function searchBarFunction(event) {
  address = document.getElementById("search-bar").value;
  if (event.keyCode == 13) {
    window.location.href = "booking.html";
  }
  return false;
}

function onLogin() {
  console.log(1);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert('Welcome '+xhttp.responseText);
    } else if (this.readyState == 4 && this.statue == 403) {
      alert('Username or Password Incorrect');
    }
  };
  xhttp.open("POST", "/template", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify({email:document.getElementById('email').value, pass:document.getElementById('pass').value}));
}