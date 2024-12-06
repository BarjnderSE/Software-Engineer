const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)]; // Fix: Use 'number' instead of 'numberCase'
    password += symbol[Math.floor(Math.random() * symbol.length)]; // Fix: Use 'symbol' instead of 'symbolCase'

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password; // Fix: Use 'value' instead of 'Value'
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
