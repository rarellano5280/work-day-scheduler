//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
$(document).ready(function (){

    $(".saveBtn").on("click" , function(){  

        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, event)
    });

// GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar


var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm a')); //Used moment.js to display current day and current time.

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future


function colorOfTimeBlock() { //need to create a function that will allow me to determine what color needs to added to the time-block
var hour = moment().hours(); //need to define a var for the hours within the time-block

$('.time-block').each(function () {
console.log(typeof "time-block");
let presentHour = parseInt($(this).attr('id'));  //Used parseInt to convert string into an interger so I can compare equality. 

if (presentHour > hour){   //conditonal to assign correct color for time-blocks 
    $(this).addClass('future');
} else if (presentHour === hour) {
    $(this).addClass('present');
} else {
    $(this).addClass('past');
    }
});
};


colorOfTimeBlock();
});
