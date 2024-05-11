const arrowButton = document.querySelector(".arrow");
const arrowIcon = document.querySelector(".fas");
const picOne = document.querySelector(".item1");

function discoveringPic() {
	picOne.classList.toggle("show");
	if (picOne.classList.contains("show")) {
		arrowIcon.style.rotate = "180deg";

		console.log("OK");
	} else {
		console.log("NIE OK");
		arrowIcon.style.rotate = "0deg";
	}
}

arrowButton.addEventListener("click", discoveringPic);
