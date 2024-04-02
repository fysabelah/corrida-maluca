let raceTrack;
let runner;
let carImages;
let lostSound;
let winSound;
let soundtrack;

function preload() {
  raceTrack = loadImage("images/race-track.png");
  runner = loadImage("images/runner.png");
  
  carImages = [
    loadImage("images/car-1.png"),
    loadImage("images/car-2.png"),
    loadImage("images/car-3.png")
  ];
  
  lostSound = loadSound("sounds/colidiu.mp3");
  winSound = loadSound("sounds/pontos.wav");
  soundtrack = loadSound("sounds/trilha.mp3");
}