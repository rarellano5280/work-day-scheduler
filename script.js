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
console.log(typeof "time-block"); //string
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

 //WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
var saveBtn = $(".saveBtn"); 

saveBtn.on("click" , function() { //function to allow me to store the text that is within the textarea to local storage. 
    var timeInput = $(this).siblings(".hour").text()
    var savedInput = $(this).siblings(".description").val();
    localStorage.setItem(timeInput, savedInput);
});

//WHEN I refresh the page
//THEN the saved events persist
function persistOnReload() { 
    $(".hour").each(function() {
        var presentHour = $(this).text();
        var curDescrip = localStorage.getItem(presentHour);

        if(curDescrip !== null) {
            $(this).siblings(".description").val(curDescrip);
        }
    });
}

//Call functions to load. 
colorOfTimeBlock();
persistOnReload();


