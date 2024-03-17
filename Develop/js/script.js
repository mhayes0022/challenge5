const apiUrl = "path/to/dayjs/dayjs.min.js";

$(function () {
  let currentDay = document.getElementById('currentDay');
  
  //retrieves the current month, day, and year from day.js
  currentDay = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(currentDay);
 
  //saves text content to local storage when the 'save' button is clicked
  $('.btn').on('click', function () {
    //save to local storage
    let key = $(this).parent().attr('id');
    let value = $(this).siblings('textarea').val()
    localStorage.setItem(key, value)
  })

  //retrieves saved text content from local storage
  for (let i = 9; i < 18; i++) {
    $('#hour-' + i + ' textarea').val(localStorage.getItem('hour-' + i))
  }

  //applies styling based on the current time
  function checkHour() {
    const currentHour = dayjs().hour();
    const timeBlockEls = $('.time-block');
    for (const timeBlock of timeBlockEls) {
      const hour = $(timeBlock).attr('id').split('-')[1];
      //compares currentHour with hour on the planner
      if (currentHour > hour) {
        $(timeBlock).addClass('past');
      }
      else if (currentHour == hour) {
        $(timeBlock).addClass('present');
      }
      else {
        $(timeBlock).addClass('future');
      }
    }
  }

  checkHour();

});

//test

