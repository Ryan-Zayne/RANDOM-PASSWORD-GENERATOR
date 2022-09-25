const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const generateEl = document.getElementById("generate-el");
const passwordBoxOne = document.getElementById("password-el-1");
const passwordBoxTwo = document.getElementById("password-el-2");
const passwordBoxArr = [passwordBoxOne, passwordBoxTwo];
let passwordLength = 8;


generateEl.addEventListener("click", passwordLimit);
generateEl.addEventListener("click", generateRandomPassword);
passwordBoxArr.forEach((box) => console.log(box));


// Generates random characters
function generateRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}


//Gets password limit value from user
function passwordLimit() {
    let passwordLengthVal = document.getElementById("password").value;

    if (passwordLengthVal === "" || passwordLengthVal < 1) {
        passwordLength = 8;
    } else {
        passwordLength = passwordLengthVal;
    }

}


// Generates and outputs the password in the DOM
function generateRandomPassword() {
    
    let randomPasswordOne = " ";
    let randomPasswordTwo = " ";

    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += generateRandomChar();
    }

    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += generateRandomChar();
    }
    passwordBoxOne.textContent = randomPasswordOne;
    passwordBoxTwo.textContent = randomPasswordTwo;

}


function copyToClipboard(str) {
    const targetBox = str.target;

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(targetBox.textContent)
    } else {
        return Promise.reject('The Clipboard API is not available.');
    }

}