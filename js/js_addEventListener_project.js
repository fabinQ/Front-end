const redButton = document.querySelector("#btn1");
const blueButton = document.querySelector(".btn2");
const square = document.querySelector(".color");
const removeColorButton = document.querySelector(".remove-color");

function redColor() {
	// square.classList.add("red");
	// square.classList.remove("blue")
	square.classList.toggle("red");
}
function blueColor() {
	square.classList.add("blue");
	square.classList.remove("red");
}
function removeColor() {
	square.classList.remove("blue");
	square.classList.remove("red");
}

redButton.addEventListener("click", redColor);
blueButton.addEventListener("click", blueColor);
removeColorButton.addEventListener("click", removeColor);
