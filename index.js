const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let generateEl = document.getElementById("generate-el");
let passwordBoxOne = document.getElementById("password-el-1");
let passwordBoxTwo = document.getElementById("password-el-2");
let passwordBoxArr = [passwordBoxOne, passwordBoxTwo]
let passwordLength = 8;

function generateRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

generateEl.addEventListener("click", passwordLimit);

function passwordLimit() {
    let passwordLengthx = document.getElementById("password").value;

    if (passwordLengthx === "" || passwordLengthx < 1) {
        passwordLength = 8;
    } else {
        passwordLength = passwordLengthx;
    }

}


generateEl.addEventListener("click", generateRandomPassword);

function generateRandomPassword() {
    let randomPasswordOne = " ";


    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += generateRandomChar();
    }

    let randomPasswordTwo = " ";
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += generateRandomChar();
    }
    passwordBoxOne.textContent = randomPasswordOne;
    passwordBoxTwo.textContent = randomPasswordTwo;

}


passwordBoxArr.forEach((box) => box.addEventListener("click", copyToClipboard))

function copyToClipboard(str) {
    const targetBox = str.target;

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(targetBox.textContent)
    } else {
        return Promise.reject('The Clipboard API is not available.');
    }

}
