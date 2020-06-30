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


/* TASK3.OLD*/
/*
function mul(... values) {
	return values.reduce(function(a, b) {
	if(Number(a)&&Number(b))
		return a * b;
	else if(Number(a)&&!Number.isInteger(b))
		return a ;
	else if(!Number.isInteger(a)&&Number(b))
		return b;
	else return 0;
	});
}
console.log("-----TASK3-------");
console.log(mul(1, null, 0.5, 0.5, "str", 2, 3, true));  // 6
console.log(mul(null, "str", false, true)); // 0


/* TASK3.NEW */

function mul(... values) {
	let arrNumber = [];
	values.forEach(function(num){
		if(Number.isFinite(num) )
			arrNumber.push(num);
	});
	if (arrNumber.length == 0) {
		return 0;
	} else {
		 arrNumber.reduce(function(a, b) {
			return a * b;
		});
	}
	
}
console.log("-----TASK3-------");
console.log( mul(null, false, 1, null, 0.5, 0.5, "str", 2, 3, true)); // 1.5
console.log( mul(null, "str", false, true)); // 0


/* TASK4 */

let server = {
   data: 0,
   convertToString: function(callback) {
      callback( () => {
         return this.data + "";
      });
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return ( (callback) => {
         this.result = callback();
      });
   }
};
client.calc(123);
console.log("-----TASK5-------");
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


/* TASK5 */

function mapBuilder (keysArray, valuesArrays) {
	let myArr = [];
keysArray.forEach(function(item, index) {
	myArr.push([item,valuesArrays[index]])
});
	return new Map(myArr);
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b","i"];
let map = mapBuilder(keys, values);

console.log("-----TASK5-------");
console.log(map);
console.log(map.size); // 4
console.log(map.get(2)); // "span"