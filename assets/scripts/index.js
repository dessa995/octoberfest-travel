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

const submit = document.getElementById("click-button")
  submit.addEventListener("click" function(getInputValue));


function getInputValue(){
  var inputVal = document.getElementById("fname").value;
  alert(inputVal);
}

