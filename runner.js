let xRunner = 100;
let yRunner = 340;
let yMinRunner = -2;
let yMaxRunner = 345;
let hasColided = false;
let score = 0;

function showRunner() {
  image(runner, xRunner, yRunner, 45, 40);
}

function moveRunner() {
  if(keyIsDown(UP_ARROW) && yRunner >= yMinRunner) {
    yRunner -= 2;
  }
  
  if (keyIsDown(DOWN_ARROW) && yRunner <= yMaxRunner) {
    yRunner += 2;
  }
}

function collide() {
  for(let i = 0; i < 3; i++) {
    hasColided = collideRectCircle(xCars[i], 
                      yCars[i], 
                      carImageWidth[i], 
                      carImageHght[i], 
                      xRunner, 
                      yRunner,
                     5);
    
    if (hasColided) {
      doAfterColision();
    }    
  }
}

function doAfterColision() {
  lostSound.play();
  returnRunnerToBeginning();
  removePoint();
}

function showScore() {
  textAlign(CENTER);
  textSize(15);
  text('Score: ' + score, width / 2, 20);
}

function removePoint() {
  if (score > 0) {
    score -= 1;
  }
}

function updateScore() {
  if (yRunner <= 15) {
    score += 1;
    winSound.play();
    returnRunnerToBeginning();
  }
}

function returnRunnerToBeginning() {
  yRunner = 340;
}