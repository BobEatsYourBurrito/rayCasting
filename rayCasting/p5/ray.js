class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.dir = p5.Vector.fromAngle(angle);
  }

  lookAt(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();

  }

  display() {
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y);
    line(0,0,this.dir.x*10,this.dir.y*10);
    pop();
  }

  cast(wall) {
    const x1 = wall.pos.x;
    const y1 = wall.pos.y;
    const x2 = wall.pos1.x;
    const y2 = wall.pos1.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    const den = (x1 - x2)*(y3 - y4)-(y1 - y2)*(x3 - x4);
    if(den == 0){
      return;
    }

    let t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4)) / den;
    let u = ((x1-x3)*(y1-y2)-(y1-y3)*(x1-x2)) / den;
    if (t > 0 && t < 1 && u > 0) {
      let point = createVector();
      point.x = x1 + t *(x2 - x1);
      point.y = y1 + t *(y2 - y1);
      return point;
    } else{
      return;
    }
  }
}
