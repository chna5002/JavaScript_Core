/* TASK1 */

let myArr = [2, 3, 4, 5];
let res = 1;
for (let i = 0; i < myArr.length; i++) {
	res = res * myArr[i];
}
console.log( "Task1.1--> " + res);

let q = 0;
let res1 = 1;
while ( q < myArr.length) {
	res1*=myArr[q];
	q++;
}
console.log("Task1.2--> " + res1);


/* TASK2 */

for (let i = 0; i < 16; i++) {
	if (i % 2 === 0) {
		alert("Task2--> " + i + " -- is even");
	} else {
		alert("Task2--> " + i + " -- is odd");
	}
}


/*TASK3*/

let k = new Array(5);

function randArray() {
	for (let i = 0; i < k.length; i++) {
		k[i] = Math.floor(( Math.random() * (500-1+1))+1);
	}
	console.log("Task3--> " + k);
}
randArray(k);


/* TASK4 */

function raiseToDegree() {
	let a = Number( prompt("Task4--> Enter your number : "));
	let b = Number( prompt("Task4--> Enter your degree for number : "));
	let res4 = parseInt(a) ** parseInt(b);
		console.log( "Task4--> Your result : " + res4);
		
}
raiseToDegree();


/* TASK5 */

function findMin() {
	let min;
	for (let i = 0; i < arguments.length; i++) {
		min = Math.min.apply(null, arguments);
	}
	console.log("Task5--> Min element is :  " + min);
}
findMin(3, 5, 8, -3, 0.2, 0.5);


/* TASK6 */

function findUnique(arr) {
	for (let i = 0; i < arr.length - 1; i++) { 
		for (let j = i+1; j < arr.length; j++) {
		 	if (arr[i] === arr[j]) return false; 
		}
	}
	return true;
}

let res5 = findUnique([1, 5, 3, 2, 8]);
	console.log("Task6--> " + res5);


/* TASK7 */

function lastElem(arrSeven, x) {
	if (x == null) return arrSeven[arrSeven.length - 1];
	return arrSeven.slice( Math.max(arrSeven.length - x, 0));
};

console.log("Task7--> " + lastElem([3, 5, 8, 10, 4]));
console.log("Task7--> " + lastElem([3, 5, 8, 10, 4], 3));
console.log("Task7--> " + lastElem([3, 5, 8, 10, 4, 7], 15));


/* TASK8 */

let str = prompt("Task8--> Enter your phrase", "i love java script"); 

function firstUpLetter(str) {
	return str.replace(/(^|\s)\S/g, function(y) {
		return y.toUpperCase()})
};
alert(firstUpLetter(str));