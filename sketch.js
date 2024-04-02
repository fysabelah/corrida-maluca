function setup() {
  createCanvas(500, 400);
  soundtrack.loop();
}

function draw() {
  background(raceTrack);
  showRunner();
  showCar();
  moveCar();
  moveRunner();
  returnCarToBeginning();
  collide();
  showScore();
  updateScore();
}