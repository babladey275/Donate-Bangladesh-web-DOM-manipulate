const faqBoxes = document.getElementsByClassName('faq-box');

for(let i = 0; i < faqBoxes.length; i++) {

     faqBoxes[i].addEventListener('click', function(){
        const icon = document.getElementsByClassName('icon')[i];
        const answer = document.getElementsByClassName('answer')[i];

        // icon.classList.add('-rotate-180');
        // answer.classList.add('hidden');

        // icon.classList.remove('-rotate-180');
        // answer.classList.remove('hidden');
        
        icon.classList.toggle('-rotate-180');
        answer.classList.toggle('hidden');
     });
}