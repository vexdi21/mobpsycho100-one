var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Введите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Добро пожаовать" + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name')
    myHeading.textContent = 'Привет ' + storedName;
}
myButton.oneclicl= function() {
    setUserName()
}