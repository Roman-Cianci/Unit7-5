// Connects the button to the funtion with the user input.
document.getElementById('button').addEventListener('click', schoolorWork)
let userAge = 0
let userDate = 'Friday'

function schoolorWork () {
  // Connects the input boxes to the user's input and makes program read numbers as integers.
  userAge = document.getElementById('input-first').value
  userAge = parseInt(userAge)

  userDate = document.getElementById('input-second').value

  // Checks the age and day of week entered in the boxes by user, checks if they have to go to school, work or if it's the weekend.
  if ((userAge < 18) && (userDate !== 'Saturday' && userDate !== 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Time for school!'