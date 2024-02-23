const pasbox=document.getElementById("psw");
const length=8;
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxz";
const number = "0123456789";
const symbols ="~!@#$%^&*()<>?{}";

const allChars=upperCase + lowerCase + number +symbols;

function genrator(){
let password ='';
password += upperCase[Math.floor(Math.random()*upperCase.length)];
password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
password += number[Math.floor(Math.random()*number.length)];
password += symbols[Math.floor(Math.random()*symbols.length)];

while(length>password.length){
    password +=allChars[Math.floor(Math.random()*allChars.length)];

}
pasbox.value =password;
}
function copyPaste(){
    pasbox.select();
    document.execCommand("copy");
}