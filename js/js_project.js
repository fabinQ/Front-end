const sizeUp = document.querySelector(".size-up");
const sizeDown = document.querySelector(".size-down");
const color = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize = 20;
function fontSizeUp() {
	fontSize += 5;
	p.style.fontSize = fontSize + "px";
}
function fontSizeDown() {
	fontSize -= 5;
	if (fontSize < 5) {
		fontSize = 5;
	} else {
		p.style.fontSize = fontSize + "px";
	}
}

function textColor() {
	let ColorText = Math.random() * 10000000;
	let colorText = ColorText.toString(16);

	p.style.color = "#" + colorText.split(".")[0];
	console.log(colorText.split(".")[0]);
}

sizeUp.addEventListener("click", fontSizeUp);
sizeDown.addEventListener("click", fontSizeDown);
color.addEventListener("click", textColor);
