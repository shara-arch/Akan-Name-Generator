// Akan Names table
const akanNames = {
     maleNames: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"], 
     femaleNames: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] 
    };

//1. DOM ELEMENTS
const birthYear = document.getElementById('birthyear');
const birthMonth = document.getElementById('birthmonth');
const birthDay = document.getElementById('birthday');
const genderInput = document.getElementById('gender');
const resultBox = document.getElementById('result-message');

// Check leap-year 
function isLeapYear(year) {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

//2.MAIN FUNCTION
function getAkanName(event) {
  event.preventDefault();

  //2.1 RETRIEVE USER INPUT
  const year = parseInt(birthYear.value.trim(), 10); // (,10 ) used to ensure numbers are in base 10
  const month = parseInt(birthMonth.value.trim(), 10); 
  const day = parseInt(birthDay.value.trim(), 10);
  const gender = (genderInput.value || '').toLowerCase();

  //2.2 DATA VALIDATION
  const currentYear = new Date().getFullYear();
  if (isNaN(year) || year < 1900 || year > currentYear) {
    alert(`Please enter a valid year between 1900 and ${currentYear}.`);
    birthYear.focus();
    resultBox.innerHTML = '';
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert('Please enter a valid month (1–12).');
    birthMonth.focus();
    resultBox.innerHTML = '';
    return;
  }

  const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isNaN(day) || day < 1 || day > daysInMonth[month - 1]) {
    alert('Please enter a valid day for the selected month/year.');
    birthDay.focus();
    resultBox.innerHTML = '';
    return;
  }

  if (!gender) {
    alert('Please select a gender.');
    resultBox.innerHTML = '';
    return;
  }

  //2.3 CALCULATE THE DAY OF THE WEEK using Date (0=Sunday..6=Saturday)
  const dateObj = new Date(year, month - 1, day);
  const dayOfWeek = dateObj.getDay();

  // Select Akan name based on gender
  let akanName;
  if (gender === 'male') {
    akanName = akanNames.maleNames[dayOfWeek];
  } else if (gender === 'female') {
    akanName = akanNames.femaleNames[dayOfWeek];
  } else {
    alert('Unknown gender selected.');
    return;
  }

  //Map results of week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[dayOfWeek];

  //Show result box
  resultBox.innerHTML = `
    <p>You were born on <strong>${dayName}</strong>, ${day}/${month}/${year}.</p>
    <p>Your Akan name is <strong>${akanName}</strong>.</p>`;
}

// Attach event listener to form
document.getElementById('nameForm').addEventListener('submit', getAkanName);
