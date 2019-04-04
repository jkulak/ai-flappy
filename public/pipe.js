class Pipe {
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

  constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
  }

  update() {
    this.x -= this.panSpeed;

    // went out of the screen
    if (this.x + this.width < 0) {
      this.reset();
    }
  }

  colided(p) {
    if (
      p.x + p.width / 2 > this.x &&
      p.y + p.height / 2 >= this.y &&
      p.x < this.x + this.width / 2
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.height = Math.random() * (this.gameHeight - 200) + 100;
    this.x = this.gameWidth;
    this.y = this.gameHeight - this.height;
  }
}
