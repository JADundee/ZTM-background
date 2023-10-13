let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("randomizer");


// Initial gradient

window.onload = function() {
	setGradient()
}

// Button functionality

const createHex = () => {
	let hexCode = "";
	let hexValues = "0123456789abcdef";
  
	for (let i = 0; i < 6; i++) {
	  hexCode += hexValues.charAt(
		Math.floor(Math.random() * hexValues.length)
	  );
	}
	return hexCode;
  };

const randomGradient = () => {
	let randomColor1 = createHex();
	let randomColor2 = createHex();
	color1.value = `#${randomColor1}`;
	color2.value = `#${randomColor2}`;



	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}




color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomGradient);

