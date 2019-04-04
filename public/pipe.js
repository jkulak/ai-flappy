class Pipe {
  constructor(gameWidth, gameHeight, panSpeed) {
    this.width = 60;
    this.height = Math.random() * (gameHeight - 200) + 100;

    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;

    this.panSpeed = panSpeed;

    this.position = {
      x: gameWidth,
      y: gameHeight - this.height
    };
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
  }

  update() {
    this.position.x -= this.panSpeed;
  }

  jump() {
    this.velY = -this.jumpHeight;
  }
}
