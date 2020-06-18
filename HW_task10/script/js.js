/* TASK1 */

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y, ,...z] = arr;
console.log("-----TASK1-------");
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


/* TASK2 */

let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names:[, name2, , name4], ages:[, age2, ,age4]} = data;
console.log("-----TASK2-------");
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26


/* TASK3 */
function mul(... values) {
	return values.reduce(function(a, b) {
	if(Number.isInteger(a)&&Number.isInteger(b))
		return a * b;
	else if(Number.isInteger(a)&&!Number.isInteger(b))
		return a ;
	else if(!Number.isInteger(a)&&Number.isInteger(b))
		return b;
	else return 0;
	});
}
console.log("-----TASK3-------");
console.log(mul(1, "str", 2, 3, true));  // 6
console.log(mul(null, "str", false, true)); // 0

/* TASK4 */


/* TASK5 */
function mapBuilder (keysArray, valuesArrays) {
	
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log("-----TASK5-------");
console.log(map.size); // 4
console.log(map.get(2)); // "span"
