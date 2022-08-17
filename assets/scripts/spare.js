$(document).ready();

const logInButton = document.querySelector("login-button");

let images = [
  "./assets/Images/pexels-leah-kelley-3935702.jpg",
  "./assets/Images/pexels-john-cahil-rom-2088282.jpg",
  "./assets/Images/pexels-flo-maderebner-238622.jpg",
];

let img = document.querySelector(".header-heading-div");

function displayImage(x) {
  img.style.backgroundImage = "url(" + images[x] + ")";
}

let i = 0;

// % = modul, ostatak pri deljenju ali se koristi da bi nesto kruzilo u odredjenom intervalu
setInterval(function () {
  displayImage(i % images.length);

  i++;
}, 7000);

function myFunction() {
  const test = document.getElementById("fname").value;
  console.log(test);
  const heading = document.getElementById("header-heading");
  heading.textContent = test;
}

function changeBackgroundImageAutomatically() {
  let headerImg = document.getElementById("header-img");
  headerImg.style.backgroundImage =
    "url('./assets/Images/pexels-leah-kelley-3935702.jpg')";
}

logInButton.addEventListener("click", function () {
  alert(1);
});
