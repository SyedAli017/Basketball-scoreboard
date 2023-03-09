let homePointCount = document.getElementById("home-point-count");
let awayPointCount = document.getElementById("away-point-count");

let homePoints = 0;
let awayPoints = 0;

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

function awayPoint1() {
  awayPoints += 1;
  awayPointCount.textContent = awayPoints;
}

function awayPoint2() {
  awayPoints += 2;
  awayPointCount.textContent = awayPoints;
}

function awayPoint3() {
  awayPoints += 3;
  awayPointCount.textContent = awayPoints;
}
