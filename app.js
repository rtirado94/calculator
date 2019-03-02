const oneBtn = document.getElementById('calc-one');
const twoBtn = document.getElementById('calc-two');
const threeBtn = document.getElementById('calc-three');
const fourBtn = document.getElementById('calc-four');
const fiveBtn = document.getElementById('calc-five');
const sixBtn = document.getElementById('calc-six');
const sevenBtn = document.getElementById('calc-seven');
const eightBtn = document.getElementById('calc-eight');
const nineBtn = document.getElementById('calc-nine');
const zeroBtn = document.getElementById('calc-zero');

const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const backspaceBtn = document.getElementById('calc-backspace');

const calcNumBtn = document.getElementsByClassName('calc-btn-num');
const calcOpBtn = document.getElementsByClassName('calc-btn-operator');

const displayValElement = document.getElementById('calc-display');
let displayVal = '0';
let pendingVal;
let evalStringArray = [];

const updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;
    
    if(displayVal === '0')
        displayVal = '';
    
      displayVal += btnText;
      displayValElement.innerText = displayVal;
}

const perfomOperation = (clickObj) => {
    let operator = clickObj.target.innerText;

    switch(operator){
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
            
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;

        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;

        default:
            break;
    }
}

for (let i = 0; i < calcNumBtn.length;i++){
    calcNumBtn[i].addEventListener('click', updateDisplayVal, false);
}
for (let i = 0; i < calcOpBtn.length;i++){
    calcOpBtn[i].addEventListener('click', perfomOperation, false); 
}
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
    let lengthOfDisplay = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplay - 1)

    if(displayVal === '')
        displayVal = '0';
    
    displayValElement.innerText = displayVal;
}

decimalBtn.onclick = () => {
    if(!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerText = displayVal;
}
