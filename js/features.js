document.getElementById('btn-show-donation').addEventListener('click', function(){
    showSectionById('donation-section');
    showBgById('btn-show-donation');

    document.getElementById('footer').classList.remove('hidden');
});

document.getElementById('btn-show-history').addEventListener('click', function(){
    showSectionById('history-section');
    showBgById('btn-show-history');

    document.getElementById('footer').classList.add('hidden');
});