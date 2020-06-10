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

