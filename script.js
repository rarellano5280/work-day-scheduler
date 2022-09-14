//added date and time to header using Moment.js
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm a'));