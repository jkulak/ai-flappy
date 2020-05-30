class PipePair {
  constructor(gameWidth, gameHeight, panSpeed, offset) {
    this.width = 60;
    this.height = Math.random() * (gameHeight - 300) + 50;

    this.image = document.getElementById("img-wall");

    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;

    this.panSpeed = panSpeed;

    this.x = gameWidth + offset;
    this.y = gameHeight - this.height;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update() {
    this.pipe1.update();
    this.pipe2.update();
  }

  colided(p) {
    return this.pipe1.colided(p) || this.pipe2.colided(p);
  }

  reset() {}
}
