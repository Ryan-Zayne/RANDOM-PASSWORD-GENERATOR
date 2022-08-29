const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate-el");
let passwordBoxOne = document.getElementById("password-el-1");
let passwordBoxTwo = document.getElementById("password-el-2");
let passwordLength = 10;

function generateRandomChar(){
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

generateEl.addEventListener("click", passwordLimit)
generateEl.addEventListener("click", generateRandomPassword);


function passwordLimit(){
    let passwordLengthx = document.getElementById("password").value;

    if (passwordLengthx === "" || passwordLengthx < 1){
        passwordLength = 10;
    } else {
        passwordLength = passwordLengthx;
    }
    
}

function generateRandomPassword(){
    let randomPasswordOne = " ";
    
    
    for (i = 0; i < passwordLength; i++){
        randomPasswordOne += generateRandomChar();
    }

    let randomPasswordTwo = " ";
    for (i = 0; i < passwordLength; i++){
        randomPasswordTwo += generateRandomChar();
    }
    passwordBoxOne.textContent = randomPasswordOne;
    passwordBoxTwo.textContent = randomPasswordTwo;
    
}



