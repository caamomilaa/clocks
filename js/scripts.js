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
		const getMinutesDegrees = minutes * 6;
		const getHoursDegrees = hours * 30;

		dayElement.textContent = weekDays[day];
		monthElement.textContent = months[month];
		yearElement.textContent = year;

		if (hours < 10) {
			hoursDigitalElement.textContent = `0${hours}`;
		} else {
			hoursDigitalElement.textContent = hours;
		}

		if (minutes < 10) {
			minutesDigitalElement.textContent = `0${minutes}`;
		} else {
			minutesDigitalElement.textContent = minutes;
		}

		if (numberDay < 10) {
			numberDayElement.textContent = `0${numberDay}`;
		} else {
			numberDayElement.textContent = numberDay;
		}

		rootStyles.setProperty('--rotate-seconds', `${getSecondsDegrees}deg`);
		rootStyles.setProperty('--rotate-minutes', `${getMinutesDegrees}deg`);
		rootStyles.setProperty('--rotate-hours', `${getHoursDegrees}deg`);
	}, 1000);
};
getDigitalHour();
