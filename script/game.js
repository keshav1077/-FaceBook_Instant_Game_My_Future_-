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
  var image = document.getElementById("withtoung");
  if (
    image.src.match("https://homepages.cae.wisc.edu/~ece533/images/cat.png")
  ) {
    changeImage();
  } else {
    rotateImage();
  }
});
function rotateImage() {
  console.log("Hi");
  var imageSources = [
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
  ];

  var index = 0;
  setInterval(function () {
    if (index === imageSources.length) {
      index = 0;
    }
    console.log(index);
    document.getElementById("withtoung").src = imageSources[index];
    index++;
  }, 1000);
}

function changeImage() {
  var image = document.getElementById("withtoung");

  if (
    image.src.match("https://homepages.cae.wisc.edu/~ece533/images/cat.png")
  ) {
    var girl = false;
    image.src = "https://homepages.cae.wisc.edu/~ece533/images/girl.png";
  } else {
    girl = true;
    image.src = "https://homepages.cae.wisc.edu/~ece533/images/cat.png";
  }
}
