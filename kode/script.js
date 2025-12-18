let points = 0;
let pointsPerClick = 1;
let upgrade1Bought = false;
let upgrade2Bought = false;

const jsLogo = document.querySelector('.js-logo');
const header = document.querySelector('.header');
const btnUpgrades = document.querySelectorAll('.btn-upgrade');

jsLogo.addEventListener('click', function() {
  points += pointsPerClick;
  header.textContent = points;
});

btnUpgrades[0].addEventListener('click', function() {
  if (points >= 20 && !upgrade1Bought) {
    points -= 20;
    pointsPerClick = 10;
    upgrade1Bought = true;
    header.textContent = points;
    btnUpgrades[0].textContent = 'Bought';
    btnUpgrades[0].style.opacity = '0.5';
    btnUpgrades[0].style.cursor = 'default';
  }
});

btnUpgrades[1].addEventListener('click', function() {
  if (points >= 200 && !upgrade2Bought && upgrade1Bought) {
    points -= 200;
    pointsPerClick = 50;
    upgrade2Bought = true;
    header.textContent = points;
    btnUpgrades[1].textContent = 'Bought';
    btnUpgrades[1].style.opacity = '0.5';
    btnUpgrades[1].style.cursor = 'default';
  }
});
