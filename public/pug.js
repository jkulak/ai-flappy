class Pug {
  constructor(gameWidth, gameHeight, gravity) {
    this.width = 30;
    this.height = 30;

    this.image = document.getElementById("img-brain");

    this.gameHeight = gameHeight;
    this.gravity = gravity;

    this.dead = false;
    this.velocity = 0;
    this.jumpHeight = 9;
    this.x = gameWidth / 4;
    this.y = gameHeight / 2 - this.height / 2;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
  }

  update() {
    this.velocity = this.constrain(this.velocity, -25, 1000);
    this.velocity += this.gravity;
    this.y += this.velocity;

    // hit floor
    if (this.y + this.height > this.gameHeight) {
      this.y = this.gameHeight - this.height;
    }

    // hit ceiling
    if (this.y <= 0) {
      this.y = 0;
      // this.velocity = 0;
    }
  }

  jump() {
    this.velocity = -this.jumpHeight;
  }
}
