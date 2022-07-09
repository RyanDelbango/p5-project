import p5 from 'p5';
import '../css/style.scss';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const sketch = (p: p5) => {
  let grass: p5.Image;
  let img: p5.Image;

  p.preload = () => {
    grass = p.loadImage('assets/grass.jpeg');
    img = p.loadImage('assets/rabbit.png');
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(grass)
  };
  const initial = 10;
  let width = initial;
  let height = initial;
  const increment = 30;
  let x = getRandomInt(0, p.windowWidth);
  let y = getRandomInt(0, p.windowHeight);
  let bunnyCount = 1;
  p.draw = () => {
    p.image(img, x, y, width, height)
    p.mouseWheel = (event: any) => {
      x = getRandomInt(0, p.windowWidth);
      y = getRandomInt(0, p.windowHeight);
      bunnyCount += 1;
      if (event?.delta < 0) {
        width += increment;
        height += increment;
      } else if (event?.delta > 0) {
        if (width > 0) {
          width -= increment;
        }
        if (height > 0) {
          height -= increment;
        }
      }
    };
    if (p.keyIsPressed) {
      p.clear(0,0,0,0);
      p.background(grass)
      bunnyCount = 1;
      width = initial;
      height = initial;
    }
    p.mouseClicked = () => {
      alert(`Current Bunny Size: ${height}x${width} \nBunny Count: ${bunnyCount}`);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => { };
};

new p5(sketch);
