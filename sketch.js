
var database, ref;

var colors = [
  {
    name: "Red",
    color: {
      r: 255,
      g: 0,
      b: 0
    }
  }
];

var turrets = [
  {
    name: "Turret",
    health: 20,
    color: {
      r: [],
      g: [],
      b: []
    },
    damage: {
      initial: 13,
      operator: "*",
      amount: 0,
      cutoff: 0,
      rounding: Math.round
    },
    slowdown: {
      initial: 0,
      operator: "*",
      amount: 0,
      cutoff: 0,
      rounding: Math.round
    },
    attack: {
      attacks: true,
      friendlyfire: false,
      helpful: false
    },
    bullets: {
      speed: 3,
      color: {
        r: 127,
        g: 127,
        b: 127
      }
    }
  }
];

var grid = [];
for (var y = 0; ++y < 24;) {
  grid.push([]);
  for (var x = 0; ++x < 16;) {
    grid[y].push({
      turret: -1,
      colornum: 0,
      color: {
        r: 0,
        g: 0,
        b: 0
      },
      health: 0,
      cooldown: 0
    });
  }
}

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
