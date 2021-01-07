'use strict';

const btnAdd = document.querySelector('.btn-add');
const bedtimeEl = document.querySelector('.bedtime');
const lengthEl = document.querySelector('.length');
const goalDisplay = document.querySelector('.goal-display');
const ampmSelect = document.getElementById('am-pm');

let ampmValue;

btnAdd.addEventListener('click', function () {
  let bedtime = Number(bedtimeEl.value);
  let sleepLength = Number(lengthEl.value);
  let wakeUpTime = bedtime + sleepLength;

  let ampmValueStart = ampmSelect.value;

  if (ampmValueStart === 'pm' && wakeUpTime > 12) {
    wakeUpTime -= 12;
    ampmValue = 'am';
  } else if (ampmValueStart === 'am' && wakeUpTime > 12) {
    wakeUpTime -= 12;
    ampmValue = 'pm';
  } else {
    ampmValue = ampmValueStart;
  }

  // 1) If pm is selected and wakeuptime > 12, set to am and wakeuptime - 12
  // 2) If am and wakeuptime > 12, set to pm and wakeuptume - 12

  //   const wakeUpTime =
  //     bedtime + sleepLength > 12 ? bedtime + sleepLength - 12 : bedtime + sleepLength;

  goalDisplay.textContent = `Your sleep goal is to sleep at ${bedtime}${ampmValueStart} and wake up at ${wakeUpTime}${ampmValue} for a total of ${sleepLength} hrs rest!`;
});
