document.getElementById('btn-show-donation').addEventListener('click', function(){
    showSectionById('donation-section');
    document.getElementById('footer').classList.remove('hidden');
});

document.getElementById('btn-show-history').addEventListener('click', function(){
    showSectionById('history-section');
    document.getElementById('footer').classList.add('hidden');
});