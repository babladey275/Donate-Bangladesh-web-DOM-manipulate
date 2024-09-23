
const donateButtons = document.getElementsByClassName('btn-donate-now');

for(let i = 0; i < donateButtons.length; i++) {
    donateButtons[i].addEventListener('click', function(){
        const amountNoakhali = getInputValueById('input-amount-noakhali');

        if(amountNoakhali > 0) {
            const balance = getTextFieldValueById('account-balance');
            const noakhaliFloodBalance = getTextFieldValueById('noakhali-flood-balance');

            const newBalance = balance - amountNoakhali;
            const newNoakhaliFloodBalance = noakhaliFloodBalance + amountNoakhali;

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('noakhali-flood-balance').innerText = newNoakhaliFloodBalance;
        }
        else{
            alert('Invalid amount');
        }
    })
}