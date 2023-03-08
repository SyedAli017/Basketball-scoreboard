let homePointCount = document.getElementById("home-point-count");
let guestPointCount = document.getElementById("guest-point-count");

let homePoints = 0;
let guestPoints = 0;

function homePoint1() {
  homePoints += 1;
  homePointCount.textContent = homePoints;
}

function homePoint2() {
  homePoints += 2;
  homePointCount.textContent = homePoints;
}

function homePoint3() {
  homePoints += 3;
  homePointCount.textContent = homePoints;
}

function guestPoint1() {
  guestPoints += 1;
  guestPointCount.textContent = guestPoints;
}

function guestPoint2() {
  guestPoints += 2;
  guestPointCount.textContent = guestPoints;
}

function guestPoint3() {
  guestPoints += 3;
  guestPointCount.textContent = guestPoints;
}
