let b = [];
let walls = [];
let ray, particle, calls;
let xoff = 0;
let counter = 0;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // for(let i = 0; i < 5; i++) {
  //   walls.push(new Boundary(random(width), random(height), random(width), random(height)));
  // }
  calls = Calls();
  noiseDetail(1)
}

function mouseDragged() {
  particle.update(mouseX, mouseY);
}

function keyPressed() {
  if(keyCode === 32) {
    b.push(createVector(mouseX, mouseY));
    counter += 1;

    if(counter % 2 == 0 && counter > 1){
      walls.push(new Boundary(b[2 + counter], b[3 + counter]));
    }
  }

}

function draw() {
  background(0);
  particle.show();
  for(let wall of walls) {
    wall.display();
  }
  particle.look(walls[1]);
  let n = noise(xoff) * width;
  let m = map(noise(xoff + 1000), 0, 1, 0, 200);
  particle.update(n, m);
  xoff += 0.005;
  //let pt = ray.cast(wall);
  //console.log(pt);

  // ray.lookAt(mouseX,mouseY);
  // if(pt) {
  //   fill(255)
  //   ellipse(pt.x, pt.y, 4)
  // }
}
