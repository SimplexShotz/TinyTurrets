
var database, ref;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC82qKSxASHV73ab3MhmfZOw1OUryZwEqI",
    authDomain: "realtimefirebasetest.firebaseapp.com",
    databaseURL: "https://realtimefirebasetest.firebaseio.com",
    projectId: "realtimefirebasetest",
    storageBucket: "realtimefirebasetest.appspot.com",
    messagingSenderId: "628446710214"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  ref = {
    games: database.ref("games")
  };
}

function hover(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}

var kp = [];
var keyPressed = function() {
  kp[keyCode] = true;
};
var keyReleased = function() {
  kp[keyCode] = false;
};

var mp = false;
var mc = false;
function mousePressed() {
  mp = true;
}
function mouseClicked() {
  mc = true;
}

function draw() {
  cursor();
  background(50);
  
  mp = false, mc = false;
}
