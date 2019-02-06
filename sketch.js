
var database, ref;

var txt = {};

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
    pts: database.ref("pts"),
    txt: database.ref("txt")
  };

  ref.txt.once("value", function(data) {
    var d = data.val();
    txt = d;
  });
  ref.txt.on("value", function(data) {
    var d = data.val();
    txt = d;
  });
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

var a = [1, 2, 3, 4, 5];
function draw() {
  cursor();
  background(50);
  console.log(a.map(v => v * 2 - 1));
  mp = false, mc = false;
}
