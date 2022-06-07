import p5 from 'p5';
import '../css/style.scss';

const sketch = (p: p5) => {
  let logo: p5.Image;
  let logoWidth = 250;
  let logoHeight = 114;

  p.preload = () => {
    logo = p.loadImage('assets/p5js.svg');
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.point(p.mouseX, p.mouseY);
      p.fill(0);
      p.strokeWeight(30);
    }
    if (p.keyIsPressed) {
      p.clear(0, 0, 0, 0);
      p.background(255);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => {};
};

new p5(sketch);
