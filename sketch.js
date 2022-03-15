let font;
let points;
let bounds;

function preload() {
  font = loadFont('./assets/AbrilFatface-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  points = font.textToPoints(
    'I M P O S S I B L E   R E A L I T I E S', 0, 0, 60, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

  bounds = font.textBounds(
    'I M P O S S I B L E   R E A L I T I E S', 0, 0, 60);

  cursor(CROSS);
  fill(0);
  noStroke();
}

function draw() {
  background(mouseY/9, mouseX/9);
  

  
  let centerDist = dist(mouseX, mouseY, width/3, height/7);

  let transparency = map(centerDist, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
	fill(mouseX/2 , 220, mouseY/2);
  
  let jiggle = map(centerDist, 8, width, 3, 400);

  translate((width - abs(bounds.w)) / 2, 
            (height + abs(bounds.h)) / 2);
  
  
 // 	stroke(mouseY, 220, mouseX);
//   rect(bounds.x, bounds.y, bounds.w, bounds.h);
  
   //console.log("x: " + bounds.x 
          //     + ", y: " + bounds.y
          //     + ", w: " + bounds.w
          //     + ", h: " + bounds.h);
  
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(p.x + jiggle * randomGaussian(), 
      p.y + jiggle * randomGaussian(), 2, 2);
  }

  //noLoop();
}
