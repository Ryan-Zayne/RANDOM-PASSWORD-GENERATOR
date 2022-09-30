"use strict";

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const generateBtn = document.getElementById("generate-btn");
const passwordBoxOne = document.getElementById("password-box-1").firstElementChild;
const passwordBoxTwo = document.getElementById("password-box-2").firstElementChild;
const copyBtn = document.querySelectorAll(".copy-btn");
const passwordSlider = document.getElementById("password-range");
const toolTip = document.querySelector(".tooltip");
let passwordLength = 8;

// All event listeners
generateBtn.addEventListener("click", generateRandomPassword);
generateBtn.addEventListener("click", passwordLimit);
passwordSlider.addEventListener("input", passwordLimit);
copyBtn.forEach((btn) => btn.addEventListener("click", copyToClipboard));

// Generates random characters
function generateRandomChar() {
	const randomChar = Math.floor(Math.random() * characters.length);
	return characters[randomChar];
}

//Gets password limit value from user and print on screen
function passwordLimit() {
	const passwordSliderVal = passwordSlider.value;
	passwordLength = passwordSliderVal;

	const limitVal = document.querySelector(".limit-value");
	limitVal.textContent = passwordSliderVal;
}



// Generates and outputs the password in the DOM
function generateRandomPassword() {
	let randomPasswordOne = "";
	let randomPasswordTwo = "";

	for (let i = 0; i < passwordLength; i++) {
		randomPasswordOne += generateRandomChar();
		randomPasswordTwo += generateRandomChar();
	}

	passwordBoxOne.textContent = randomPasswordOne;
	passwordBoxTwo.textContent = randomPasswordTwo;
}

// Copy to clipboard feature
function copyToClipboard(e) {
	const targetBtn = e.target;
	const targetAttr = targetBtn.getAttribute("data-content");
	const targetText = document.querySelector(`#${targetAttr}`);

	//Copies textcontent to clipboard
	if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(targetText.textContent);
	} else {
		Promise.reject("The Clipboard API is not available.");
	}

	//Prints Copied! statement on tooltip
	if (targetText.textContent !== "") {
		toolTip.textContent = "Copied!👌";
		toolTip.classList.add("visible");

		setTimeout(() => {
			toolTip.classList.remove("visible");
		}, 1200);
	}
}

