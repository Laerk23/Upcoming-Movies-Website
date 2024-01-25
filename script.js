const API_KEY = "2f21cc85"

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

//function that will remove html tags from a string
function stripTags(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.body.textContent || "";
}

//function to fetch movies for a given date
function fetchMoviesForMonth(year, month) {
  // Update for buttons
  document.getElementById('PreviousMonth').style.display = (month <= new Date().getMonth() - 1 && year === new Date().getFullYear()) ? 'none' : 'block';
  document.getElementById('NextMonth').style.display = (month >= new Date().getMonth() + 1 && year === new Date().getFullYear()) ? 'none' : 'block';

  //API request
  fetch('')

}