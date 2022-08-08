// function definition
// function findElementAndHandleEvent(element, textChange, typeOfEvent) {
//   const myButton = document.getElementById(element);

//   myButton.addEventListener(typeOfEvent, function () {
//     input(textChange);
//   });
// }

// // function call

// findElementAndHandleEvent("fname", "Promenila se vrednost", "keyup");

// fetch('https://jsonplaceholder.cypress.io/todos/1')
//   .then(response => response.json())
//   .then(function (json) {
//     document.querySelector(".header-heading").textContent = json.title;
//   });

let images = [
  './assets/Images/pexels-leah-kelley-3935702.jpg',
  './assets/Images/pexels-john-cahil-rom-2088282.jpg'
];

let img = document.querySelector(".header-heading-div");

function displayImage(x){
  img.style.backgroundImage = "url(" + images[x] + ")"
};

let i = 0;


// % = modul, ostatak pri deljenju ali se koristi da bi nesto kruzilo u odredjenom intervalu
setInterval(function(){
  displayImage(i % images.length);

  i++;
}, 2000);

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

