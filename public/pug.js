class Pug {
  constructor(gameWidth, gameHeight, gravity) {
    this.width = 30;
    this.height = 30;

    this.gameHeight = gameHeight;

    this.gravity = gravity;

    this.dead = false;

    this.velX = 0;
    this.velY = 0;

    this.jumpHeight = 15;

    this.position = {
      x: gameWidth / 10,
      y: gameHeight / 2 - this.height / 2
    };
  }

  draw(ctx) {
    ctx.fillStyle = "salmon";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
  }

  update() {
    this.velY = this.constrain(this.velY, -25, 1000);
    this.velY += this.gravity;
    this.position.y += this.velY;

    // bounce back
    if (this.position.y > this.gameHeight) {
      this.velY = -25;
    }

    // hit ceiling
    if (this.position.y < 0) {
      this.position.y = 0;
    }
  }

  jump() {
    this.velY = -this.jumpHeight;
  }
}
