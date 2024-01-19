const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const special = "!@#$%^&*_"
const all = uppercase + lowercase + number + special;
function generate() {
    var password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];
    while (password.length < 9) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    console.log(password);
    document.getElementById("password").value = password;
}
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
}