class Pug {
  constructor(gameWidth, gameHeight, gravity) {
    this.width = 30;
    this.height = 30;
    this.gravity = gravity;

    this.jumpHeight = 100;

    this.position = {
      x: gameWidth / 10,
      y: gameHeight / 2 - this.height / 2
    };
  }

  draw(ctx) {
    ctx.fillStyle = "salmon";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(dt) {
    // 5 pixels every delta time
    if (!dt) return;
    this.position.y += this.gravity / dt;

    if (this.position.y < 0) {
      this.position.y = 0;
    }
  }

  jump() {
    this.position.y -= this.jumpHeight;
  }
}
