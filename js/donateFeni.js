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


        // add to modal
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

        
        // add to history
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-6');

        const time = new Date();
        
        div.innerHTML = `
        <p class="font-bold">${amountFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
        <p class="mt-4 text-gray-500">Date: ${time}</p>
        `;

        document.getElementById('history-container').appendChild(div);
    }
    else {
        alert('Invalid Donation Amount');
    }
});