// date.html
//   Illustrates the use of the Date object by
//   displaying the parts of a current date and
//   using two Date objects to time a calculation

// Get the current date

var today = new Date();

// Fetch the various parts of the date

let dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var dateString = today.getDate();
var day = dayOfWeek[today.getDay()];
var month = months[today.getMonth()];

//Write your own code here

// Display the parts

document.write(
  `${day} ${dateString} ${month} ${today.getFullYear()}, ${today.toLocaleString()}`
);
//Write your own code here
