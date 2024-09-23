document.getElementById('btn-donate-injured').addEventListener('click', function(){
    const amountInjured = getInputValueById('input-amount-injured');

    if(amountInjured > 0){
        console.log('c');
        const balance = getTextFieldValueById('account-balance');
        const injuredAccountBalance = getTextFieldValueById('injured-account-balance');

        const newBalance = balance - amountInjured;
        const newInjuredAccountBalance = injuredAccountBalance + amountInjured;

        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('injured-account-balance').innerText = newInjuredAccountBalance;
    }
    else{
        alert('Invalid amount');
    }
})