/* TASK1 */
/*
let openedWindow;

function openWindow() {
	openedWindow = window.open("", "", "width=300, height=300");
}
openWindow();

function changeSize() {
	 openedWindow.resizeTo(500, 500);
}
setTimeout(changeSize, 2000);

function moveWindow() {
	openedWindow.moveTo(200, 200);
}
setTimeout(moveWindow, 4000);

function closeOpenedWindow() {
	openedWindow.close();
}
setTimeout(closeOpenedWindow, 6000);
*/

/* TASK2 */

function changeCSS() {
	 let changeStyle = document.getElementById("text");
	 changeStyle.style.color = 'orange';
	 changeStyle.style.fontSize = "20px";
	 changeStyle.style.fontFamily = "Comic Sans MS";

}
document.querySelector("button").onclick = changeCSS;


/* TASK3 */

function bodyBackgroundBlue() {
	let backgroundBlue = document.querySelector("body");
	backgroundBlue.style.background = "blue";
}

function bodyBackgroundPink() {
	let backgroundPink = document.querySelector("body");
	backgroundPink.style.background = "pink";
}

function bodyBackgroundBrown() {
	let changeBackgroundBrown = document.querySelector("body");
	changeBackgroundBrown.style.background = "brown";

}
function bodyBackgroundWhite() {
	let changeBackgroundBrown = document.querySelector("body");
	changeBackgroundBrown.style.background = "white";
}

function bodyBackgroundYellow() {
	let changeBackgroundBrown = document.querySelector("body");
	changeBackgroundBrown.style.background = "yellow";
}


but1.addEventListener("click", bodyBackgroundBlue);
but2.addEventListener("dblclick", bodyBackgroundPink);
but3.addEventListener("mousedown", bodyBackgroundBrown);
but3.addEventListener("mouseup", bodyBackgroundWhite);
link1.addEventListener("mouseenter", bodyBackgroundYellow);


/* TASK4 */

delItem.addEventListener("click", () =>{
	let e = document.getElementById("optionItem");
	e.remove(e.selectedIndex);
});


/* TASK5 */

addText.addEventListener("click", () =>{
	let newPress = document.createElement("p");
	newPress.innerHTML = "I was pressed!";
	document.body.appendChild(newPress);
});
addText.addEventListener("mouseenter", () =>{
	let newFocusOn = document.createElement("p");
	newFocusOn.innerHTML = "Mouse on me!";
	document.body.appendChild(newFocusOn);
});
addText.addEventListener("mouseout", () =>{
	let newFocusOff = document.createElement("p");
	newFocusOff.innerHTML = "Mouse is not on me!";
	document.body.appendChild(newFocusOff);
});

/* TASK6 */

function currentWindowSize() {
	wight = document.documentElement.clientWidth;
	height = document.documentElement.clientHeight;
	document.getElementById("sizeWin").innerHTML = "Width: " + wight +", " + "Height: " + height;
}

window.addEventListener("resize", currentWindowSize);
currentWindowSize();


/* TASK7 */
let ourCoutry = document.getElementById("country");
let x = document.getElementById("cities");
ourCoutry.options[0].cities = [];
ourCoutry.options[1].cities = ["","New-York","Montana","Boston","Chicago"];
ourCoutry.options[2].cities = ["","Berlin","Humburg","Dotrmund","Leverkuzen"];
ourCoutry.options[3].cities = ["","Kyev","Kharkiv","Lviv","Dnipro"];
country.addEventListener("change", () =>{
while (x.options.length > 0) {
    x.options.remove(0);
}
ourCoutry.options[ourCoutry.selectedIndex].cities.forEach(element => {
let option = document.createElement("option");
			option.text = element;
			x.add(option);
});
});

cities.addEventListener("change", () =>{
	document.getElementById("countryCities").innerHTML = ourCoutry.options[ourCoutry.selectedIndex].text
+"," +  cities.options[cities.selectedIndex].text
});


