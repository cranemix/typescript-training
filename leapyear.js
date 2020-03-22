/*- on every year that is evenly divisible by 4
- except every year that is evenly divisible by 100
- unless the year is also evenly divisible by 400

For example, 1997 is not a leap year,
but 1996 is. 1900 is not a leap year, but 2000 is.

Author: RCaday
*/
function isLeapYear(year) {
    var boolLeap = true;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                boolLeap = true;
            }
            else {
                boolLeap = false;
            }
        }
    }
    else {
        boolLeap = false;
    }
    return boolLeap;
}
var year1 = 2020;
var sel = document.querySelector('h1');
sel.textContent = isLeapYear(year1) ? 'Year ' + year1 + ' is a leap year.' : 'Year ' + year1 + ' is not a leap year.';
