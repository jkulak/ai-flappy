let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 300;
const GAME_HEIGHT = 400;
const GRAVITY = 0.9;
const PAN_SPEED = 2;
let playing = true;

const inputHandler = new InputHandler();
const pug = new Pug(GAME_WIDTH, GAME_HEIGHT, GRAVITY);
const PIPES_COUNT = 2;
const pipes = [];

function init() {
  for (let i = 1; i <= PIPES_COUNT; i++) {
    pipes[i] = new Pipe(GAME_WIDTH, GAME_HEIGHT, PAN_SPEED, (GAME_WIDTH / (PIPES_COUNT - 1)) * i);
  }
  gameLoop();
}

function restart() {
  init();
}

// pug.draw(ctx);

function clear(ctx) {
  ctx.clearRect(0, 0, 300, 400);
}

function pause() {
  let pauseDiv = document.getElementById("paused");
  pauseDiv.style.display = playing ? "flex" : "none";
  playing = !playing;
}

function die() {
  playing = !playing;
  console.log("☠️");
}

function gameLoop() {
  // console.log(playing);
  if (playing) {
    clear(ctx);
    pug.update();
    pug.draw(ctx);

    pipes.forEach(pipe => {
      pipe.update();
      pipe.draw(ctx);
      if (pipe.colided(pug)) {
        die();
      }
    });
  }
  requestAnimationFrame(gameLoop);
}

init();
