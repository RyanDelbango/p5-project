function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var grass;
var img;
var initial;
var width;
var height;
var increment;
var x;
var y;
var bunnyCount = 1;

function preload () {
    grass = loadImage('assets/grass.jpeg');
    img = loadImage('assets/rabbit.png');
};
function setup () {
    createCanvas(windowWidth, windowHeight);
    background(grass);
    initial = 10;
    width = initial;
    height = initial;
    increment = 20;
    x = getRandomInt(0, windowWidth);
    y = getRandomInt(0, windowHeight);
    bunnyCount = 1;
};



function draw () {
    image(img, x, y, width, height);
    mouseWheel = function (event) {
        x = getRandomInt(height > windowHeight / 2 ? -300 : 0, windowWidth);
        y = getRandomInt(height > windowHeight / 2 ? -300 : 0, windowHeight);
        bunnyCount += 1;
        if ((event === null || event === void 0 ? void 0 : event.delta) < 0) {
            if (height < windowHeight * .75) {
                width += increment;
                height += increment;
            }
        }
        else if ((event === null || event === void 0 ? void 0 : event.delta) > 0) {
            if (width > 10) {
                width -= increment;
            }
            if (height > 10) {
                height -= increment;
            }
        }
    };
    if (keyIsPressed) {
        clear(0, 0, 0, 0);
        background(grass);
        bunnyCount = 1;
        width = initial;
        height = initial;
    }
    mouseClicked = function () {
        alert("Current Bunny Size: ".concat(height, "x").concat(width, " \nBunny Count: ").concat(bunnyCount));
    };
    windowResized = function () {
        clear(0, 0, 0, 0);
        background(grass);
        bunnyCount = 1;
        width = initial;
        height = initial;
    };
};
