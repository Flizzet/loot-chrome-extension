ChestType = {
  IRON: 0,
  GOLD: 1,
  DIAMOND: 2
}

var chestOpened = false;
var chosenColor = '#e5d592'
var currentChest = ChestType.IRON;
var growAmount = 0;
var maximumGrowAmount = 50;

var growInterval;

$(document).ready(function() {
  $('#page').css('background-color', chosenColor);

  findChest();


  $('#chest .chest').on('click', openChest);
  //.addEventListener("click", openChest);
});

function findChest() {
}

function growChest() {
  growAmount++;

  $('#chest .chest').css('transform', 'scale(1.' + growAmount + ') translateY(-50%)');

  if (growAmount > maximumGrowAmount) {
    clearInterval(growInterval);
  }
}

function openChest() {
  if (chestOpened) return;

  chestOpened = true;

  growInterval = setInterval(function() {
    growChest();
  }, 1000/30);

  console.log('chest opened');
}
