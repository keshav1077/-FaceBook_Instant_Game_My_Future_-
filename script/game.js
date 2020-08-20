console.log("loaded");

FBInstant.initializeAsync().then(
  function () {
    var progress = 0;
    var interval = setInterval(function () {
      if (progress >= 95) {
        clearInterval(interval);
        FBInstant.startGameAsync().then(function () {
          console.log("Game has started");
        });
      }
      // Informs the SDK of loading progress
      FBInstant.setLoadingProgress(progress);
      progress += 5;
    }, 100);
  }
  // Start loading game assets here
);

function getel(id) {
  console.log(id);
  return document.getElementById(id);
}

var startButton = getel("startGame");
var gamePlay = getel("carbutton");
var gamePlay = getel("carbutton");

startButton.addEventListener("click", function () {
  console.log("Hi");
});

function changeImage() {
  var image = document.getElementById("withtoung");
  var girl = true;
  if (girl) {
    var girl = false;
    image.src = "https://homepages.cae.wisc.edu/~ece533/images/cat.png";
  } else {
    girl = true;
    image.src = "https://homepages.cae.wisc.edu/~ece533/images/girl.png";
  }
}
