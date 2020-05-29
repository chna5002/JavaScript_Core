/* TASK1 */
/*
function calcReactangleArea() {
	let width = Number( prompt("Task1--> Enter width : "));
	let height = Number( prompt("Task1--> Enter height : "));
	let s = height * width;
		if ((isNaN(width)) || (isNaN(height)) ) {
			throw new Error ("width or height is not a NUMBER");
		}
		return s;
}
try {
	console.log( calcReactangleArea());
} catch (exception) {
	console.log(exception.name);
	console.log(exception.message);
	console.log(exception.stack);
}

/* TASK2 */
/*
function checkAge() {
	let age = prompt("Task2--> Enter your age : ");
		if (age == "") {
			throw new Error ("The field is empty!!!");
		} else if (isNaN(age)) {
			throw new Error ("Age is not a NUMBBER!!!");
		} else if (age < 14) {
			throw new Error ("You must have 14 years old");
		}
		return alert("Access was gave to watch the movie !!!");
}
try {
	checkAge();
} catch (error_age) {
	alert(error_age.name  + " --> " + error_age.message);
}
*/


/* TASK4 */
/*
function showUser(id) {
		if (id < 0) {
			throw new Error ("ID must not be negative:  " + id[i]);
		} 
		return id = {'id': id};
}
try {
	console.log(showUser(7));
} catch (error_id) {
	alert(error_id.name  + " --> " + error_id.message);
}

function showUser(ids) {
	for (let i = 0; i < ids.length; i++) {
		if (ids[i] < 0) {
			throw new Error ("ID must not be negative:  " + id[i]);
		}
	} 
	let a = {'id': id[i]};
	return a;
}
try {
	showUser([7, -12, 44, 22]);
	console.log(a);
} catch (error_id) {
	alert(error_id.name  + " --> " + error_id.message);
}
*/
let result
function showUsers(ids) {
	for (let i = 0; i < ids.length; i++) {
		if (ids[i] < 0) {
			throw new Error ("ID must not be negative:  " + ids[i]);
		}
	} 
	result = ids.filter(function(currentValue) {
		return currentValue > 0;
	});
}
try {
	showUsers([7, -12, 44, 22]);
	console.log(result);
} catch (error_id) {
	alert(error_id.name  + " --> " + error_id.message);
}