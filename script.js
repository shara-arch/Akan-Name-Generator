//1. DOM ELEMENTS
const birthYear = document.getElementById('birthyear');
const birthMonth = document.getElementById('birthmonth');
const birthDay = document.getElementById('birthday');
const genderInput = document.getElementById('gender');

//2.MAIN FUNCTION
function getAkanName() {
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
    if (isNaN(day) || day < 1 || day > 31) {
        alert("Please enter a valid Day (1–31)"); 
        return; 
    }
    if (!gender) {
         alert("Please select a gender");
        return;
    }
}
