console.log("loaded");

function getel(id) {
  console.log(id);
  return document.getElementById(id);
}

// var carModol = false;
// var startButton = getel("car_button");
document.getElementById("car_button").onclick = function () {
  startGame();
  console.log("Selected Car benZ");
};
// startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Selected Car");
}
document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
  console.log("Selected Car toyota");
}
// document.getElementById("car_button").addEventListener("click", function () {
//   document.getElementById("demo").innerHTML = "Hello World";
// });
// console.log(carModol);
