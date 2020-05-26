/* TASK1 */

let x = 1;
let y = 2;

let res1 = ("" + x + y); // Допишіть код, необхідно використовувати змінні x і y
	console.log(res1); // "12"
	console.log(typeof res1); // "string"

let res2 = ("true" + y); // Допишіть код, необхідно використовувати змінні x і y
	console.log(res2); // "true2"
	console.log(typeof res2); // "string"

let res3 = !!x; // Допишіть код, необхідно використовувати змінні x і y
	console.log(res3); // true
	console.log(typeof res3); // "boolean"

let res4 = parseInt("xy");// Допишіть код, необхідно використовувати змінні x і y
	console.log(res4); // NaN
	console.log(typeof res4); // "number"


/* TASK2 */

let x = prompt("Enter your number (TASK2)", "");

x = prompt("Enter your number (TASK2)", "");
let res = x > 0 && x % 7===0 && x % 2===0;
	console.log(res);


/* TASK3 */

let arr = [];
arr[0] = 25;
arr[1] = "array";
arr[2] = true;
arr[3] = null;
	console.log(arr.length);

arr[4] = prompt("Enter your number (TASK3)", "");
	console.log(arr[4]);

arr.shift( );
	console.log(arr);


/* TASK4 */

let cities = ["Rome", "Lviv", "Warsaw"]; 
	console.log(cities.join("*"));


/* TASK5_old */

let isAdult = confirm("Ви досягнули повноліття ? (TASK5)");
if (isAdult === true ) {
   console.log("Ви досягли повнолітнього віку");
} else if (isAdult === false) {
   console.log("Ви ще надто молоді");
} 

/* TASK5_new */

let isAdult = prompt("Скільки вам років ? (TASK5)", "");


isAdult = prompt("Скільки вам років ? (TASK5)", "");

if (isAdult >=18 ) {
   console.log("Ви досягли повнолітнього віку");
} else if (isAdult <= 10) {
   console.log("Ви ще надто молоді");
} 

/* TASK6 */

let p,s;
let a = +prompt("(TASK6) ---> Введіть довжину сторони a (a>0)");
let b = +prompt("(TASK6) ---> Введіть довжину сторони b (b>0)");
let c = +prompt("(TASK6) ---> Введіть довжину сторони c (c>0)");
if ((a > 0) && (b > 0) && (c > 0) ) {
	p = (a+b+c)/2;
	s = (p*(p-a)*(p-b)*(p-c)) ** 0.5;
} else if ((a < 0 ) || (b < 0) || (c < 0) || (a =="" )|| (b =="") || (c == "") || (a !== Number) || (b !== Number) || (c !== Number) ) {
	alert("Incorect data");
}
 console.log(("S=" + s.toFixed(3)));

 if (((a*b)/2) == s) { 
	console.log("Цей трикутник прямокутний!!!"); 
}


/* TASK7.1 */

let hours = +(new Date()).getHours();

switch (true) {
	case ((hours >= 0) && (hours <5)) :
		console.log("Доброї ночі");
		break;
	case ((hours >= 5) && (hours <11)) :
		console.log("Доброго ранку");
		break;
	case ((hours >= 11) && (hours <17)) :
		console.log("Доброго дня");
		break;
	case ((hours >= 17) && (hours <23)) :
		console.log("Доброго вечора");
		break;
}


/* TASK7.2 */

let hours = +(new Date()).getHours();


hours = +(new Date()).getHours();

if ((hours >= 0) && (hours <5)) {
	console.log("Доброї ночі");
} else if ((hours >= 5) && (hours <11)) {
	console.log("Доброго ранку");
} else if ((hours >= 11) && (hours <17)) {
	console.log("Доброго дня");
} else if ((hours >= 17) && (hours <23)) {
	console.log("Доброго вечора");
}
