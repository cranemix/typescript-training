/*- on every year that is evenly divisible by 4
- except every year that is evenly divisible by 100
- unless the year is also evenly divisible by 400

For example, 1997 is not a leap year, 
but 1996 is. 1900 is not a leap year, but 2000 is.

Author: Renn Caday
*/

function isLeapYear(year: number): boolean {
    let boolLeap: boolean = true;

    if(year % 4 == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                boolLeap = true;
            }
            else{
                boolLeap = false;
            }
        }
    }
    else{
        boolLeap = false;
    }
    return boolLeap;
}


let year1: number = 2020;
let sel = document.querySelector('h1');

sel.textContent = isLeapYear(year1) ? 'Year ' + year1 + ' is a leap year.': 'Year ' + year1 + ' is not a leap year.';