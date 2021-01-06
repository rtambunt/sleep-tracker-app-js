'use strict';

const btnAdd = document.querySelector('.btn-add');
const bedtimeEl = document.querySelector('.bedtime');
const lengthEl = document.querySelector('.length');
const goalDisplay = document.querySelector('.goal-display');
let bedtime;
let length;

btnAdd.addEventListener('click', function () {
  bedtime = bedtimeEl.value;
  length = lengthEl.value;

  goalDisplay.textContent = `Your sleep goal is from ${bedtime} to ${length} for a total of ${length} hrs rest!`;
});

console.log(bedtime, length);
