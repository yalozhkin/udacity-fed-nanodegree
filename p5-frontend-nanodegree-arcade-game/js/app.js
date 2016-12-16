// App's tiles and canvas sizes
var APP = {
  'TILE_X': 101,
  'TILE_Y': 83,
  'CANVAS_WIDTH': 101 * 5,
  'CANVAS_HEIGHT': 83 * 6
};

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  'use strict';
  // Variables applied to each of enemy instances
  this.sprite = 'images/enemy-bug.png';
  this.speed = speed;
  this.x = x * APP.TILE_X;
  this.y = y * APP.TILE_Y - 22; // Adjust Y position due the sprite size
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  'use strict';
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x < APP.CANVAS_WIDTH) {
    this.x = this.x + this.speed;
  } else {
    this.x = -APP.TILE_X;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  'use strict';
  // Render enemies on canvas
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player descripton
var Player = function(x, y) {
  'use strict';
  // Variables applied to each of player instances
  this.sprite = 'images/char-boy.png';
  this.x = x * APP.TILE_X;
  this.y = y * APP.TILE_Y - 12; // Adjust Y position due the sprite size
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
  'use strict';
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x;
  this.y = this.y;

  if (this.y < 0) {
    this.x = 2 * APP.TILE_X;
    this.y = 5 * APP.TILE_Y - 12;
    alert("Win!");
  }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
  'use strict';
  // Render object on canvas
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Move player using keyboard
Player.prototype.handleInput = function(key) {
  'use strict';
  // Listen keys and check layer position
  if (key === 'left' && this.x > 0) {
    this.x -= APP.TILE_X;
  }
  if (key === 'right' && this.x < APP.CANVAS_WIDTH - APP.TILE_X) {
    this.x += APP.TILE_X;
  }
  if (key === 'up' && this.y > 0) {
    this.y -= APP.TILE_Y;
  }
  if (key === 'down' && this.y < APP.CANVAS_HEIGHT - APP.TILE_Y - 12) {
    this.y += APP.TILE_Y;
  }
};

// Check Collisions
checkCollisions = function() {
  'use strict';
  // Go through the enemies in array
  for (var i = 0, len = allEnemies.length; i < len; i++)
    if (
      player.x >= allEnemies[i].x - APP.TILE_X / 2 &&
      player.x <= allEnemies[i].x + APP.TILE_X / 2) {
      if (
        player.y >= allEnemies[i].y - APP.TILE_Y / 2 &&
        player.y <= allEnemies[i].y + APP.TILE_Y / 2) {
        player = new Player(2, 5);
        alert("Bump!");
      }
    }
};

// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
  new Enemy(-1, 1, 2.75),
  new Enemy(-1, 2, 3.50),
  new Enemy(-1, 3, 1.75),
  new Enemy(-1, 4, 2.25),
];

var player = new Player(2, 5);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  'use strict';
  // Bind keys
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
