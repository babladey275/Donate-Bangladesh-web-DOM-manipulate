const faqBoxes = document.querySelectorAll('.faq-box');

for(let i = 0; i < faqBoxes.length; i++) {

     faqBoxes[i].addEventListener('click', function(){
        const icon = faqBoxes[i].querySelector('.icon');
        const answer = faqBoxes[i].querySelector('.answer');

        // icon.classList.add('-rotate-180');
        // answer.classList.add('hidden');
        
        icon.classList.toggle('rotate-180');
        answer.classList.toggle('hidden');

        // if(faqBoxes[i] === true){
        //     icon.classList.remove('rotate-180');
        //     answer.classList.remove('hidden');
        // }
     });
}