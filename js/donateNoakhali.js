document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
    const amountNoakhali = getInputValueById('input-amount-noakhali');

    if(amountNoakhali > 0) {
        console.log('a');
        const balance = getTextFieldValueById('account-balance');
        const noakhaliAccountBalance = getTextFieldValueById('noakhali-account-balance');

        const newBalance = balance - amountNoakhali;
        const newNoakhaliAccountBalance = noakhaliAccountBalance + amountNoakhali;

        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('noakhali-account-balance').innerText = newNoakhaliAccountBalance;
    }
    else {
        alert('Invalid Donation Amount');
    }
});