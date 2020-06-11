/* TASK1 */

let mentor = {
		course: "JS fundamental",
		duratoin: 3,
		direction: "web-developer"
	};

function propsCount(mentor) {
	return Object.keys(mentor).length;
}
alert( "Task1--> " + propsCount(mentor));


/* TASK2 */

let personalInfo = {
	firstName : "Nazar",
	lastName : "Chornous",
	studyGroup : "510JavaScriptCore",
	yearOfBirth : 1993,
	maritalStatus : true
};

function showProps(personalInfo) {
	let personalKeys = Object.keys(personalInfo);
	let personalValues = Object.values(personalInfo);

	console.log("TASK2-->  " + personalKeys);
	console.log("TASK2-->  " + personalValues);
}
showProps(personalInfo);


/* TASK3 */

class Person {
	constructor(name,surname) {
		this.name = name;
		this.surname = surname;
	}
	showFullName() {
		return this.name + " " + this.surname;
	}
}

class Student extends Person {
	constructor(name,surname,year) {
		super(name,surname);
		this.year = year;
	}
	showFullName(midleName) {
		return this.surname + " " + this.name + " " + midleName;
	}
	showCourse() {
		let d = new Date();
		return d.getFullYear() - this.year;
	}
}

let stud1 = new Student( "Petro","Petrenko", 2015);
console.log(stud1);
console.log(stud1.showFullName("Petrovuch"));
console.log("Current course: " + stud1.showCourse());


/* TASK4 */
console.log('');
console.log("<<< TASK4 >>>");

class Worker {
	#experience = 1.2;
	get showExp() {
		return this.#experience;
	}
	set setExp(value) {
		return this.#experience = value;
	}

	constructor(fullName, dayRate, workingDays) {
		this.fullName = fullName;
		this.dayRate = dayRate;
		this. workingDays = workingDays;
	}
	showSalary() {
		let salary = this.dayRate * this.workingDays;
		console.log(this.fullName + " salary: " + salary);
		return salary;
	}
	showSalaryWithExperience() {
		let salaryExp = this.dayRate * this.workingDays * this.#experience;
		console.log(this.fullName + " salary: " + salaryExp);
		return salaryExp;
	}
	showSalaryExp() {
		return this.dayRate * this.workingDays * this.#experience;
	}
}

let worker1 = new Worker("John Johnson", 20, 23);
	console.log(worker1.fullName);
worker1.showSalary();
	console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.6;
	console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log("");

let worker2 = new Worker("Tom Tomson", 35, 20);
	console.log(worker2.fullName);
worker2.showSalary();
	console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
	console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log("");

let worker3 = new Worker("Andy Ander", 27, 25);
	console.log(worker3.fullName);
worker3.showSalary();
	console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.3;
	console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log("");

let arrWorkers = [worker1, worker2 ,worker3];
let sortWorker = arrWorkers.sort((a, b) => {
	return a.showSalaryExp() - b.showSalaryExp();
	})
for (var i = 0; i < sortWorker.length; i++) {
	console.log(sortWorker[i].fullName + ":" + sortWorker[i].showSalaryExp());
}



/* TASK5 */

console.log('');
console.log("<<< TASK5 >>>");

class GeometricFigure {
	getArea() {
		return 0;
	}
	toString() {
		return Object.getPrototypeOf(this).constructor.name;
	}
}
class Triangle extends GeometricFigure {
	constructor(kat1, kat2) {
		super();
		this.kat1 = kat1;
		this.kat2 = kat2;
	}
	getArea() {
		let area = (this.kat1 * this.kat2)/2;
		return area;
	}
}
class Square extends GeometricFigure {
	constructor(front) {
		super();
		this.front = front;
	}
	getArea() {
		let area = this.front * this.front;
		return area;
	}
}
class Circle extends GeometricFigure {
	constructor(radius) {
		super();
		this.radius = radius;
	}
	getArea() {
		let area = this.radius * this.radius * 3.14159;
		return area;
	}
}

function handleFigures(figures) {
	let totalArea = 0;
	for (let i = 0; i < figures.length; i++) {
		console.log(figures[i] instanceof GeometricFigure);
		console.log("GeometricFigure: " + figures[i].toString() + " - area: " + figures[i].getArea());
		totalArea += figures[i].getArea();}
		console.log(totalArea);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
	handleFigures(figures);
