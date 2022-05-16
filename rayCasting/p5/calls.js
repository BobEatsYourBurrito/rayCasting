function Calls() {
  b.push(createVector(0,0));
  b.push(createVector(width,0));
  b.push(createVector(0, height));
  b.push(createVector(width, height));
  walls.push(new Boundary(b[0],b[1]));
  walls.push(new Boundary(b[1],b[3]));
  walls.push(new Boundary(b[2],b[3]));
  walls.push(new Boundary(b[0],b[2]));
  particle = new Particle();

  for(var i = 0; i < b.length; i += 2) {
    

  }

}
// l.default.Vector {isPInst: true, x: 260, y: 519
// {isPInst: true, x: 234, y: 573
// x: 259, y: 519
// x: 402, y: 527 for reference this is 7
// x: 401, y: 527
//  x: 541, y: 604
// x: 540, y: 604
//  x: 234, y: 571
// x: 775, y: 609
//  x: 762, y: 693
// x: 762, y: 693 for reference this is 14
// x: 1072, y: 710,
//  x: 1072, y: 710
// , x: 1067, y: 611
// x: 1067, y: 611
// x: 774, y: 608
//  1279, y: 707
// x: 1219, y: 542 for reference(21)
// 1219, y: 542
// x: 1595, y: 569
//  x: 1595, y: 569
// x: 1725, y: 651
//  x: 1726, y: 651
// x: 1511, y: 675
//  x: 1511, y: 673 for reference 28
// x: 1278, y: 705
// x: 554, y: 289
// x: 539, y: 347
// x: 555, y: 283
// x: 801, y: 292
// x: 800, y: 292
 // x: 792, y: 383
// x: 792, y: 383
// x: 540, y: 346, for reference 37
