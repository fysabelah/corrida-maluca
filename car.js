//positions
let yCars = [25, 120, 220]
let speeds = [1.5, 2.0, 2.5]
let xCars = [600, 600, 600]
let carImageWidth = [140, 90, 90];
let carImageHght = [140, 90, 90];


function moveCar() {
  for (let i = 0; i < 3; i++) {
    xCars[i] -= speeds[i];
  }
}

function showCar() {
  for (let i = 0; i < 3; i++) {
    image(carImages[i], xCars[i], yCars[i], carImageWidth[i], carImageHght[i]);
  }
}

function returnCarToBeginning() {
  for (let i = 0; i < 3; i++) {
    if (isCarAtEndOfScreen(xCars[i])) {
      xCars[i] = 600;
    }
  }
}

function isCarAtEndOfScreen(car) {
  return car < -100;
}