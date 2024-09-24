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

        // add to modal
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

        //Add to History
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-6');

        const time = new Date();
        
        div.innerHTML = `
        <p class="font-bold">${amountNoakhali} Taka is Donated for Flood at Noakhali, Bangladesh</p>
        <p class="mt-4 text-gray-500">Date: ${time}</p>
        `;

        document.getElementById('history-container').appendChild(div);
    }
    else {
        alert('Invalid Donation Amount');
    }

});