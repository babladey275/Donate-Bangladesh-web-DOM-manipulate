document.getElementById('btn-donate-feni').addEventListener('click', function(){
    const amountFeni = getInputValueById('input-amount-feni');

    if(amountFeni > 0){
        console.log('b');
        const balance = getTextFieldValueById('account-balance');
        const feniAccountBalance = getTextFieldValueById('feni-account-balance');

        const newBalance = balance - amountFeni;
        const newFeniAccountBalance = feniAccountBalance + amountFeni;

        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('feni-account-balance').innerText = newFeniAccountBalance;
    }
    else {
        alert('Invalid Donation Amount');
    }
});