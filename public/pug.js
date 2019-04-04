class Pug {
  constructor(gameWidth, gameHeight, gravity) {
    this.width = 30;
    this.height = 30;

    this.gameHeight = gameHeight;

    this.gravity = gravity;

    this.dead = false;

    this.velocity = 0;

    this.jumpHeight = 11;

    this.position = {
      x: gameWidth / 4,
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
    this.velocity = this.constrain(this.velocity, -25, 1000);
    this.velocity += this.gravity;
    this.position.y += this.velocity;

    // bounce back
    if (this.position.y + this.height > this.gameHeight) {
      // this.velocity = -25;
      this.position.y = this.gameHeight - this.height;
    }

    // hit ceiling
    if (this.position.y <= 0) {
      this.position.y = 0;
      // this.velocity = 0;
    }
  }

  jump() {
    this.velocity = -this.jumpHeight;
  }
}
