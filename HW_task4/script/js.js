/* TASK1 */

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

