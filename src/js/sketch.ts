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
  const initial = 10;
  let width = initial;
  let height = initial;
  const increment = 30;
  p.draw = () => {
    p.rect(initial, initial, width, height)
    p.mouseWheel = (event: any) => {
      p.clear(0, 0, 0, 0);
      if (event?.delta < 0) {
        if (width < p.windowWidth - (initial + 10)) {
          width += increment;
        };
        if (height < p.windowHeight - (initial + 10)) {
          height += increment;
        };
      } else if (event?.delta > 0) {
        if (width > initial) {
          width -= increment;
        }
        if (height > initial) {
          height -= increment;
        }
      }
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => { };
};

new p5(sketch);
