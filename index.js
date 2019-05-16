// var imageSlider = 0;
// var images = ["jakub-kapusnak-296881-unsplash.jpg", "kyle-296856-unsplash.jpg", "qu-c-trung-689159-unsplash.jpg"];

// function displayImage() {
//   for(imageSlider = 0; imageSlider < images.length; imageSlider++) {
//     var img = document.createElement(images[imageSlider]);
//     img.setAttribute("width", "250");
//     img.setAttribute("height", "250");
//     document.getElementById("image-next").appendChild(img);
//   }
// }

// function nextImage() {
//   if(imageSlider < images.length) {
//     imageSlider++;
//   } else {
//     imageSlider = 0;
//   }
//   // document.getElementsByClassName("scroll-image").src = images[i];
//   document.getElementById("image-next").src = images[imageSlider];
//   console.log("next");
// }

// function prevImage() {
//   if(imageSlider > 0) {
//     imageSlider--;
//   } else {
//     imageSlider = images.length - 1;
//   }
//   // document.getElementsByClassName("scroll-image").src = images[i];
//   document.getElementById("image-previous").src = images[imageSlider];
//   console.log("previous")
//   console.log(  document.getElementById("image-previous").src = images[imageSlider]
//   );
// }

function toNextDiv() {
  var scrolling = document.getElementById("second-content");
  scrolling.scrollIntoView();
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}