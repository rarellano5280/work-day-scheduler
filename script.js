// GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//added date and time to header using Moment.js
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm a'));

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future


function colorOfTimeBlock() { //need to create a function that will allow me to determine what color needs to added to the time-block
var hour = moment().hours(); //need to define a var for the hours within the time-block

$('.time-block').each(function () {
console.log(typeof "time-block");
let presentHour = parseInt($(this).attr('id'));

if (presentHour > hour){
    $(this).addClass('future');
} else if (presentHour === hour) {
    $(this).addClass('present');
} else {
    $(this).addClass('past');
    }
});
};
colorOfTimeBlock();

