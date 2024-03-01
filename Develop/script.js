const apiUrl = "path/to/dayjs/dayjs.min.js";
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//Do I even need the variables below?
//let hourNine = document.getElementById('hour-9');
// let hourTen = document.getElementById('hour-10');
// let hourEleven = document.getElementById('hour-11');
// let hourTwelve = document.getElementById('hour-12');
// let hourThirteen = document.getElementById('hour-13');
// let hourFourteen = document.getElementById('hour-14');
// let hourFifteen = document.getElementById('hour-15');
// let hourSixteen = document.getElementById('hour-16');
// let hourSeventeen = document.getElementById('hour-17');
//above: wont let me create variable with numbers as the name


$(function () {
  let currentDay = document.getElementById('currentDay');

  currentDay = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(currentDay);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //Could I just name all HTML ids as nums, have checkHours read the value?

  //plannerHour();
  // let hourNine = [document.getElementById('hour-9'), 9];
  // let hourTen = document.getElementById('hour-10');
  // let hourEleven = document.getElementById('hour-11');
  // let hourTwelve = document.getElementById('hour-12');
  // let hourThirteen = document.getElementById('hour-13');
  // let hourFourteen = document.getElementById('hour-14');
  // let hourFifteen = document.getElementById('hour-15');
  // let hourSixteen = document.getElementById('hour-16');
  // let hourSeventeen = document.getElementById('hour-17');

  // plannerHour = [
  //   hourNine = 9,
  //   hourTen = 10,
  //   hourEleven = 11,
  //   hourTwelve = 12,
  //   hourThirteen = 13,
  //   hourFourteen = 14,
  //   hourFifteen = 15,
  //   hourSixteen = 16,
  //   hourSeventeen = 17
  // ]


  function checkHour() {
    const currentHour = dayjs().hour();
    //const currentHour = 14;
    const timeBlockEls = $('.time-block');
    //console.log(timeBlockEls);
    for (const timeBlock of timeBlockEls) {
      const hour = $(timeBlock).attr('id').split('-')[1];
      //compare currentHour with hour
      if (currentHour > hour) {
        //add past to classlist 
        $(timeBlock).addClass('past');
      }
      else if(currentHour == hour) {
        $(timeBlock).addClass('present');
      }
      else {
        $(timeBlock).addClass('future');
      }
    }
  }
  
  checkHour();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});

//document.getElementById("myNumber").value = "16";

//To start:
//$('#myElement').addClass('active'); remember you can use jQuery now to select & change the class