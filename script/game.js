console.log("loaded");

FBInstant.initializeAsync().then(
  function () {
    var progress = 0;
    var interval = setInterval(function () {
      if (progress >= 95) {
        clearInterval(interval);
        FBInstant.startGameAsync().then(function () {
          console.log("Game is started");
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
var profileImage = getel("withtoung");
var gamePlay = getel("carbutton");
// Get the modal
var modal = getel("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Global veriable
var workOrNot;
var indexOfImage;
var index = 0;
var winnigImage = "./image/dog_0.jpg";
var greenColor = "#3e8e41";
var redColor = "rgb(233 103 120)";

var imageSources = [
  winnigImage,
  "./image/dog_1.jpg",
  "./image/dog_2.jpg",
  "./image/dog_3.jpg",
  "./image/dog_4.jpg",
  "./image/dog_5.jpg",
  "./image/dog_6.jpg",
  "./image/dog_7.jpg",
];

startButton.addEventListener("click", function () {
  console.log("Hi Push Start");
  startButton.disabled = true;
  startButton.style.backgroundColor = redColor;
  startButton.value = "Click on image and Win";
  //changeVisibilityOfButton();
  profileImage.disabled = false;
  rotateImage();
});

function rotateImage() {
  console.log("Hi Image Roteter");
  workOrNot = setInterval(function () {
    if (index === imageSources.length) {
      index = 0;
    }
    console.log("index " + index);
    // console.log("randome number");

    indexOfImage = Math.round(Math.random() * Math.floor(7));
    console.log("randome number " + indexOfImage);
    document.getElementById("withtoung").src = imageSources[indexOfImage];
    index++;
  }, 100);
}

function changeImage() {
  console.log("Hi Change Image");
  runOrStopButton = false;
  clearInterval(workOrNot);
  startButton.disabled = false;
  startButton.style.backgroundColor = greenColor;
  startButton.value = "Push to Start & Try It Again";
  //changeVisibilityOfButton();
  profileImage.src = imageSources[indexOfImage];
  profileImage.disabled = true; //index must less than 8.

  if (imageSources[indexOfImage] == winnigImage) {
    modal.style.display = "block";
  }
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function changeVisibilityOfButton() {
  if (startButton.style.display === "none") {
    startButton.style.display = "block";
    startButton.style.color = greenColor;
  } else {
    startButton.style.display = "none";
    startButton.style.color = redColor;
  }
}
