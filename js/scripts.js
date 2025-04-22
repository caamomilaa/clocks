//CONSTANTES DEL DOM
const hoursDigitalElement = document.getElementById('hours-digital');
const minutesDigitalElement = document.getElementById('minutes-digital');
const dayElement = document.getElementById('day');
const numberDayelement = document.getElementById('number-day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

//CONSTANTES DE JS

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const getDigitalHour = () => {
  setInterval(() => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const numberDay = date.getDay();

    hoursDigitalElement.textContent = hours;
    minutesDigitalElement.textContent = minutes;
    numberDayelement.textContent = numberDay;
    console.log(seconds);
  }, 1000);
};
getDigitalHour();

// const getDay = () => {
//   const date = new Date();
//   const day = date.getDay();
//   console.log(day);
// };
// getDay();
