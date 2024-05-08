const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
console.log(btn1, btn2);

function clickOnButton(){
    console.log('Kliknięto w przycisk nr 1');

}

function addTwo (){
    console.log(2+2);
}

clickOnButton();
addTwo();

// ZMIENNA.addEventListener('even', function);
btn1.addEventListener('click', clickOnButton)
btn2.addEventListener('click', addTwo)