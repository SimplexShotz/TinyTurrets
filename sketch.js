
var database, ref;

var pin = window.location.href.split("/").pop().split("?").pop();

var gameInfo = {};

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
for (var y = -1; ++y < 24;) {
  grid.push([]);
  for (var x = -1; ++x < 16;) {
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
    game: database.ref("games")
  };
  
  if (pin !== "") {
    ref.game.once("value", function(data) {
      var d = data.val();
      var found = false;
      for (var i in d) {
        if (i === pin) {
          // set game info to d[i]
          found = true;
          break;
        }
      }
      if (!found) {
        // create game
        ref.game.child(pin).set({
          grid: grid,
          bullets: [],
          players: [{

          }]
        });
      }
    });
  }
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
  if (pin !== "") {
  
  } else {
    background(50);
    fill(200);
    textAlign(CENTER, CENTER);
    textSize(window.innerWidth / 500);
    text("Add ?<PIN> to the end of the URL to join a game. Replace <PIN> with a number.", window.innerWidth / 2, window.innerHeight / 2);
  }
  mp = false, mc = false;
}
