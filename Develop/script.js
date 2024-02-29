// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});

//Beginnings of API request
const apiUrl = "path/to/dayjs/dayjs.min.js";
//dateOutput;
let currentDay = document.getElementById('currentDay');

currentDay = dayjs().format('MMM D, YYYY');
$('#currentDay').text(currentDay);

//function test() {
//fetch('https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js')
//.then(response => {
//  if (!response.ok) {
//    throw new Error('Something went wrong with network response');
//  }
//  return response.json();
//})
//.then(data => {
  //.textContent = JSON.stringify()
//  console.log(data);
//})
// .catch(error => {
//   console.error('Error', error);
// });
//}
// test();
//Ok. so the above needs to be more specific. Right now it's calling all of the API I think.


// .catch(error => {
//   console.error('Error:', error);
// });
//To start:
//finish API request, get it to display at top of page
//$('#myElement').addClass('active'); remember you can use jQuery now to select & change the class