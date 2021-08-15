const birthdate = document.querySelector("#birthdateinput");
const btn = document.querySelector("#btn");
const output = document.querySelector('#output');


function reverseString(str){
  return str.split('').reverse().join('');  
}
function isPalindrome(str){
    let reverseStr = reverseString(str);
    return reverseStr === str;
} 

function getDateAsString(date){
    var dateInString = {day : '',month : '',year : ''};
    if(date.day<10)
       dateInString.day = '0'+ date.day;
    else
        dateInString.day = date.day.toString();
    if(date.month<10)
        dateInString.month = '0'+ date.month;
     else
         dateInString.month = date.month.toString();
     
    dateInString.year = date.year.toString();
    return dateInString;
}
function getDateInAllFormat(date){
    var dateStr = getDateAsString(date);
    
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day+ dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(2);
    var yymmdd = dateStr.year.slice(2) + dateStr.month + dateStr.day;
    var dateFormats = [ddmmyyyy , mmddyyyy , yyyymmdd , ddmmyy , mmddyy , yymmdd];
    return dateFormats;
    

}
var date = {
    day : 1,
    month : 2,
    year : 2020
};
var dateInAllFormat = getDateInAllFormat(date);

function checkForPalindrome(dateInAllFormat){
    var flag = false;
    for(var i =1; i< dateInAllFormat.length ; i++){
        if(isPalindrome(dateInAllFormat[i])){
            flag = true;
            break;
        }
    }
    return flag;
    }
    
function isLeapYear(year){
    if(year%400 === 0)
        return true;
    if(year%4 === 0)
        return true;
    if(year%100 === 0)
        return false;
    return false;


}
function getNextDate(date){
    var lastDayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    if (month === 2) {
        if (isLeapYear(year)) {
          if (day > 29) {
            day = 1;
            month = 3;
          }
        }
        else {
          if (day > 28) {
            day = 1;
            month = 3;
          }
        }
      }
      else {
        if (day > lastDayInMonth[month - 1]) {
          day = 1;
          month++;
        }
      }
    
      if (month > 12) {
        month = 1;
        year++;
      }
      var nextDate = {day : day,month : month,year : year};
 
      return nextDate;
}
function getNextPalindromeDate(date){
    var nextDate = getNextDate(date);
    var counter = 0;
    while(1){
        counter++;
        var nextDateInString = getDateAsString(nextDate);
        var nextDateInAllFormat = getDateInAllFormat(nextDateInString);
        var flag1 = checkForPalindrome(nextDateInAllFormat);
        if(flag1)
            return [counter ,nextDate];
        nextDate = getNextDate(nextDate);
       
    }


}

// btn.addEventListener('click',);

console.log(checkForPalindrome(dateInAllFormat));
console.log(getNextPalindromeDate(date));

