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
const clearBtn = document.getElementById("clearBtn");


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
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert('Please enter a valid month (1–12).');   
    return;
  }

  const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isNaN(day) || day < 1 || day > daysInMonth[month - 1]) {
    alert('Please enter a valid day for the selected month/year.');
        return;
  }

  if (!gender) {
    alert('Please select a gender.');
        return;
  }

  //2.3 CALCULATE THE DAY OF THE WEEK using formula
  let CC = Math.floor(year / 100);
  let YY = Math.floor(year % 100);
  let MM = month;
  let DD = day;

  let d = Math.floor(
    (
      ((CC / 4) - (2 * CC) - 1)
      + ((5 * YY) / 4)
      + ((26 * (MM + 1)) / 10)
      + DD
    ) % 7
  );

  // Select Akan name based on gender and day d
  let akanName;
  if (gender === 'male') {
    akanName = akanNames.maleNames[d -1 ];
  } else {
    akanName = akanNames.femaleNames[d - 1];
  }

  //Map results of week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[d - 1];

  //Show result box
  resultBox.classList.add('show');
  resultBox.style.display = "block";
  resultBox.innerHTML = 
  ` <p>You were born on <strong>${dayName}</strong>, ${day}/${month}/${year}.</p>
    <p>Your Akan name is <strong>${akanName}</strong>.</p>`;
    
    
}

// Runs function using submit button
document.getElementById('nameForm').addEventListener('submit', getAkanName);
// Trigger calculation when "Enter" key is pressed.
massInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getAkanName(event);
    }
    });
