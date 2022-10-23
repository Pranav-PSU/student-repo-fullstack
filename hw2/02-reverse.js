// const { code } = require('esutils');

document.querySelector('#reverse').onclick = () => {
    let value = document.getElementById('input').value;
    let input = value;
    let outputText = document.getElementById('answerText');

    if (value == '' || value.length < 8) {
        outputText.style['color'] = 'red';
        outputText.innerHTML = 'Error: Please input an 8-digit number';
        return false;
    }
    let temp;
    let output = 0;

    while (value) {
        temp = value % 10;
        output = output * 10 + temp;
        value = (value / 10) | 0;
    }
    outputText.style['color'] = 'green';
    outputText.innerHTML = `${input} --> ${output}`;
};
