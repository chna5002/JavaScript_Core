/*TASK1*/

function upperCase(b) {
	let regExp = /^[A-Z]/;
	if (!regExp.test(b)) {
		console.log("String's not starts with uppercase ")
	} else {
		console.log("String's starts with uppercase character")
	}
}

upperCase('Regexp');


/*TASK2*/

function checkEmail (email) {
	let regExp = /@/;
	return regExp.test(email);
}
console.log( checkEmail("Qmail2@gmail.com"));


/* TASK3 */

let regExp3 = /d(b+)(d)/ig;
let str3 = "cdbBdbsbz";
console.log(regExp3.exec(str3));


/* TASK4 */

let regExp4 = /(\w+)\s(\w+)/;
let str4 = "Java Script";
console.log( str4.replace(regExp4, "$2, $1"));


/* TASK5 */

function checkBankCard (card) {
	let regExp = /^[\d]{4}[\-]{1}[\d]{4}[\-]{1}[\d]{4}[\-]{1}[\d]{4}$/g;
	return regExp.test(card);
}
console.log( checkBankCard("9999-9999-9999-9999"));


/* TASK6 */

function checkEmail6 (email6) {
	let regExp6 = /^[^\-\_][\w]+[-]?[\w]+@[\w-]+\.[a-z]{2,4}$/i;
	if (regExp6.test(email6)) {
		console.log('Email is correct!');
	} else {
		console.log('Email is not correct!');
	}
}
checkEmail6("my_ma-il@gmail.com");


/* TASK7 */

function checkLogin (login) {
	let regExp7 = /^[^\d][\w/.]{2,10}$/i;
	if (regExp7.test(login)) {
		console.log(true);
		console.log(login.match(/\d{0,}[\d\.\d]?\d/g));
	} else {
		console.log(false);
		console.log(login.match(/\d{0,}[\d\.\d]?\d/g));
	}
}
checkLogin("ee1.1ret3");