document.getElementById('btn-donate-injured').addEventListener('click', function(){
    const amountInjured = getInputValueById('input-amount-injured');

    if(typeof amountInjured !== 'string' && amountInjured > 0){
        const balance = getTextFieldValueById('account-balance');
        const injuredAccountBalance = getTextFieldValueById('injured-account-balance');

        if(amountInjured > balance) {
            alert('You do not have enough money to donate');
        }
        else {
            const newBalance = balance - amountInjured;
            const newInjuredAccountBalance = injuredAccountBalance + amountInjured;

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('injured-account-balance').innerText = newInjuredAccountBalance;


            // add to modal
            const modal = document.getElementById('my_modal_1');
            modal.showModal();

        
            //Add to History
            const div = document.createElement('div');
            div.classList.add('border-2', 'p-6', 'rounded-xl');

            const time = new Date();
        
            div.innerHTML = `
            <p class="font-bold">${amountInjured} Taka is Donated for Injured in the Quota Movement</p>
            <p class="mt-4 text-gray-500">Date: ${time}</p>
            `;

            document.getElementById('history-container').appendChild(div);
        }
    }
    else{
        alert('Invalid amount');
    }
})