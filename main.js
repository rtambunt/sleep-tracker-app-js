'use strict';

const btnAdd = document.querySelector('.btn-add');
const bedtimeEl = document.querySelector('.bedtime');
const lengthEl = document.querySelector('.length');
const goalDisplay = document.querySelector('.goal-display');
const isPM = true;
let bedtime;
let length;

btnAdd.addEventListener('click', function () {
  bedtime = Number(bedtimeEl.value);
  length = Number(lengthEl.value);
  const wakeUpTime =
    bedtime + length > 12 ? bedtime + length - 12 : bedtime + length;

  goalDisplay.textContent = `Your sleep goal is to sleep at ${bedtime} and wake up at ${wakeUpTime} for a total of ${length} hrs rest!`;
});

console.log(bedtime, length);
