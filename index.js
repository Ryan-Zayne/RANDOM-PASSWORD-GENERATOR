const generateBtn = document.getElementById('generate-btn');
const passwordBoxOne = document.getElementById('password-box-1').firstElementChild;
const passwordBoxTwo = document.getElementById('password-box-2').firstElementChild;
const copyBtn = document.querySelectorAll('.copy-btn');
const limitVal = document.querySelector('.limit-value');
const passwordSlider = document.getElementById('password-range');
const toolTip = document.querySelector('.tooltip');
let passwordLength = 8;

const generateRandomChar = () => {
	// prettier-ignore
	const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

	const randomIndex = Math.floor(Math.random() * characters.length);

	const randomChar = characters[randomIndex];

	return randomChar;
};

const generateRandomString = ({ stringlength = 30 } = {}) => {
	const randomString = crypto.randomUUID().split('-').join('').slice(0, stringlength);

	return randomString;
};

// Generates and outputs the password in the DOM
const generateRandomPasswordOne = () => {
	let randomPasswordOne = '';

	for (let i = 0; i < passwordLength; i++) {
		randomPasswordOne += generateRandomChar();
	}

	passwordBoxOne.textContent = randomPasswordOne;
};

const generateRandomPasswordTwo = () => {
	const randomPasswordTwo = generateRandomString({ stringlength: passwordLength });

	passwordBoxTwo.textContent = randomPasswordTwo;
};

const oldSchoolCopy = (text) => {
	const tempTextArea = document.createElement('textarea');
	tempTextArea.value = text;
	document.body.appendChild(tempTextArea);
	tempTextArea.select();
	document.execCommand('copy');
	document.body.removeChild(tempTextArea);
};

// Copy to clipboard feature
const copyToClipboard = async (event) => {
	const targetBtn = event.target;
	const targetAttr = targetBtn.dataset.content;
	const targetText = document.querySelector(`#${targetAttr}`);

	if (targetText.textContent === '') return;

	try {
		if (!navigator?.clipboard?.writeText) {
			throw new Error('writeText not supported');
		}

		await navigator.clipboard.writeText(targetText.textContent);

		toolTip.classList.add('visible');

		const timeoutID = setTimeout(() => {
			toolTip.classList.remove('visible');
			clearTimeout(timeoutID);
		}, 1200);
	} catch (e) {
		oldSchoolCopy(targetText.textContent);
	}
};

// All event listeners
passwordSlider.addEventListener('input', () => {
	passwordLength = passwordSlider.value;

	limitVal.textContent = passwordLength;
});

generateBtn.addEventListener('click', () => {
	generateRandomPasswordOne();
	generateRandomPasswordTwo();
});

copyBtn.forEach((btn) => btn.addEventListener('click', copyToClipboard));
