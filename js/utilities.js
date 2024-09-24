//shared function

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}


function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function showBgById(id){
    document.getElementById('btn-show-donation').classList.remove('bg-btn_bg');
    document.getElementById('btn-show-history').classList.remove('bg-btn_bg');

    document.getElementById(id).classList.add('bg-btn_bg');
}