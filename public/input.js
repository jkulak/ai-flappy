class InputHandler {
  constructor() {
    document.addEventListener("keydown", event => {
      // console.log(event.keyCode);

      switch (event.keyCode) {
        case 32:
          pug.jump();
          break;

        case 80:
          pause();
          break;
      }
    });
  }
}
