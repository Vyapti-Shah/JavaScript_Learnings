//Date Objects - Objects that contain values that represents the dates and times
//             - These date objects can be changed and formatted
//             - year, month, day, hour, minute, second, ms
const date = new Date(2024, 3, 13, 11, 11, 11);
console.log(date);

const dates = new Date("2024-3-13T11:11:11Z");
console.log(dates);

const d = new Date(0);
console.log(d);

const da = new Date(1700000000000);
console.log(da);

const year = date.getFullYear();
console.log(year);

const mon = date.getMonth();
console.log(mon);

const day = date.getDate();
console.log(day);

const hour = date.getHours();
console.log(hour);

const min = date.getMinutes();
console.log(min);

const sec = date.getSeconds();
console.log(sec);

const dayofWeek = date.getDay()
console.log(dayofWeek);

const fulldate = new Date();
fulldate.setFullYear(2024);
console.log(fulldate);

const fulldate1 = new Date();
fulldate1.setMonth(9);// only month will be changed wrt ongoing date
console.log(fulldate1);

const fulldate2 = new Date();
fulldate2.setDate(14);
console.log(fulldate2);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");
if(date1<date2){
    console.log("HAPPY NEW YEAR")
}