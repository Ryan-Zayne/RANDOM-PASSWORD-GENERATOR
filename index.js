const generateBtn = document.getElementById('generate-btn');
const passwordBoxOne = document.getElementById('password-box-1').firstElementChild;
const passwordBoxTwo = document.getElementById('password-box-2').firstElementChild;
const copyBtn = document.querySelectorAll('.copy-btn');
const limitVal = document.querySelector('.limit-value');
const passwordSlider = document.getElementById('password-range');
const toolTip = document.querySelector('.tooltip');
let passwordLength = 8;

// Generates random characters
const generateRandomChar = () => {
	// prettier-ignore
	const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

	const randomChar = Math.floor(Math.random() * characters.length);
	return characters[randomChar];
};

//Gets password limit value from user and print on screen
const passwordLimit = () => {
	passwordLength = passwordSlider.value;

	limitVal.textContent = passwordLength;
};

// Generates and outputs the password in the DOM
const generateRandomPassword = () => {
	let randomPasswordOne = '';
	let randomPasswordTwo = '';

	for (let i = 0; i < passwordLength; i++) {
		randomPasswordOne += generateRandomChar();
		randomPasswordTwo += generateRandomChar();
	}

	passwordBoxOne.textContent = randomPasswordOne;
	passwordBoxTwo.textContent = randomPasswordTwo;
};

// Copy to clipboard feature
const copyToClipboard = async (event) => {
	const targetBtn = event.target;
	const targetAttr = targetBtn.dataset.content;
	const targetText = document.querySelector(`#${targetAttr}`);

	if (targetText.textContent === '') return;

	//Copies textcontent to clipboard
	try {
		await navigator?.clipboard?.writeText(targetText.textContent);

		toolTip.classList.add('visible');

		const timeoutID = setTimeout(() => {
			toolTip.classList.remove('visible');
			clearTimeout(timeoutID);
		}, 1200);
	} catch (error) {
		console.error(error);
	}
};

// All event listeners
generateBtn.addEventListener('click', generateRandomPassword);
passwordSlider.addEventListener('input', passwordLimit);
copyBtn.forEach((btn) => btn.addEventListener('click', copyToClipboard));
