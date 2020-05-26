/* TASK1 */
/*
let myArr = [2, 3, 4, 5];
let res = 1;
for (let i = 0; i < myArr.length; i++) {
	res = res * myArr[i];
}
console.log(res);

let q = 0;
let res1 = 1;
while ( q < myArr.length) {
	res1*=myArr[q];
	q++;
}
console.log(res1);


/* TASK2 */
/*
for (let i = 0; i < 16; i++) {
	if (i % 2 === 0) {
		alert(i + " -- is even");
	} else {
		alert(i + " -- is odd");
	}
}


/*TASK3*/
/*
let k = new Array(5);
function randArray() {
	for (let i = 0; i < k.length; i++) {
		k[i] = Math.floor((Math.random() * (500-1+1))+1);
	}
	console.log(k);
}
randArray(k);


/* TASK4 */
/*
function raiseToDegree() {
	let a = Number(prompt("Enter your number : "));
	let b = Number(prompt("Enter your degree for number : "));
	let res4 = parseInt(a) ** parseInt(b);
		console.log( "Your result : " + res4);
		
}
raiseToDegree();


/* TASK5 */

function findMin() {
	let min = 2;
	for (let i = 0; i < arguments.length; i++) {
		min *= arguments[i]
	}
	console.log("Min element is :  " + min);
}
findMin(3, 5, 8, -3, 0.2);