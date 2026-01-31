// Akan names table
const akanNames = {
     male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"], 
     female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] 
    };

//1. DOM ELEMENTS
const birthYear = document.getElementById('birthyear');
const birthMonth = document.getElementById('birthmonth');
const birthDay = document.getElementById('birthday');
const genderInput = document.getElementById('gender');
const resultBox = document.getElementById('result-message');

//Check Leap-year
function isLeapYear(year){
  return (year % 4 === 0 );
}

//2.MAIN FUNCTION
function getAkanName() {
    event.preventDefault();
    //2.1 GETTING USER INPUT
    const year = parseInt(birthYear.value, 10);  //(,10) makes sure numbers are in base 10
    const month = parseInt(birthMonth.value, 10) ;
    const day = parseInt(birthDay.value, 10);
    const gender = genderInput.value;
    
    //2.2 DATA VALIDATION
    const currentYear = new Date().getFullYear(); 
    if (isNaN(year) || year < 1900 || year > currentYear) {
         alert("Please enter a valid Year");
        return; 
    } 
    if (isNaN(month) || month < 0 || month > 11) {
        alert("Please enter a valid Month (1–12)"); 
        return; 
    } 
    // Validation: Day (with leap year check for February)
    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
    if (isNaN(day) || day < 1 || day > daysInMonth[month - 1]) {
         alert("Please enter a valid Day for the selected month/year"); 
         return; 
    }
    if (!gender) {
         alert("Please select a gender");
        return;
    }

    //2.3 CALCULATE THE DAY OF THE WEEK
    const CC = Math.floor[year/100];
    const YY = year % 100;
    const MM = birthMonth;
    const DD = day;
    const d = ((( CC / 4 ) - ( 2 * CC ) - 1 ) + (( 5 * YY ) / 4 ) + (( 26 * ( MM + 1 )) / 10 )) % 7 ;
    
    //Map results of week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday"];
    const dayName = daysOfWeek[d]
    //Get Akan Name
    const akanName = akanNames[gender][d];
    //Show result box
    // resultBox.classList.add('show');
    resultBox.innerHTML = `
     <p>You were born on <strong>${dayName}</strong>, ${day}/${month}/${year}.</p>
     <p>Your Akan name is <strong>${akanName}</strong>.</p> `
     ;
}
// Attach event listener to form
 document.getElementById("nameForm").addEventListener("submit", getAkanName);
