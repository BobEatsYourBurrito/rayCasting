class Boundary {
  constructor(pos, pos1) {
    this.pos = pos;
    this.pos1 = pos1;
  }

  display() {
    stroke(255);
    line(this.pos.x, this.pos.y, this.pos1.x, this.pos1.y)
  }
}
