//CONSTANTES DEL DOM
const rootStyles = document.documentElement.style;

const hoursDigitalElement = document.getElementById('hours-digital');
const minutesDigitalElement = document.getElementById('minutes-digital');
const dayElement = document.getElementById('day');
const numberDayElement = document.getElementById('number-day');
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

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getDigitalHour = () => {
  setInterval(() => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();
    const numberDay = date.getDate();

    const getSecondsDegrees = seconds * 6;
    const getMinutesDegrees = minutes * 6 + seconds / 10;
    const getHoursDegrees = hours * 30 + minutes / 2;

    const fixTime = number => String(number).padStart(2, 0);

    dayElement.textContent = weekDays[day];
    monthElement.textContent = months[month];
    yearElement.textContent = year;

    hoursDigitalElement.textContent = fixTime(hours);
    minutesDigitalElement.textContent = fixTime(minutes);
    numberDayElement.textContent = fixTime(numberDay);

    rootStyles.setProperty('--rotate-seconds', `${getSecondsDegrees}deg`);
    rootStyles.setProperty('--rotate-minutes', `${getMinutesDegrees}deg`);
    rootStyles.setProperty('--rotate-hours', `${getHoursDegrees}deg`);
  }, 1000);
};
getDigitalHour();
