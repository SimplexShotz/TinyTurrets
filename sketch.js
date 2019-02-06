
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

var themes, theme, t;

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
    apiKey: "AIzaSyAMmHk53itobniTDacP2c4XGZo90VmGxY4",
    authDomain: "tiny-turrets.firebaseapp.com",
    databaseURL: "https://tiny-turrets.firebaseio.com",
    projectId: "tiny-turrets",
    storageBucket: "",
    messagingSenderId: "296161920968"
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
  themes = [
    {
      name: "Light",
      background: color(255, 255, 255),
      text: color(50, 50, 50)
    }, {
      name: "Dark",
      background: color(50, 50, 50),
      text: color(200, 200, 200)
    }
  ];
  theme = 0;
  t = themes[theme];
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
  background(t.background);
  if (pin !== "") {
  
  } else {
    fill(t.text);
    textAlign(CENTER, CENTER);
    textSize(window.innerWidth / 50);
    text("Add ?<PIN> to the end of the URL to join a game. Replace <PIN> with a number.", window.innerWidth / 2, window.innerHeight / 2);
  }
  mp = false, mc = false;
}
