const ore = document.querySelector('#ore');
const minuti = document.querySelector('#minuti');
const secondi = document.querySelector('#secondi');


let interval = setInterval(()=>{
    
    let dateNow = new Date();
    ore.style.transform = 'translate(-50%, -50%) rotate(' + dateNow.getHours() * 30 + 'deg)';
    minuti.style.transform = 'translate(-50%, -50%) rotate(' + dateNow.getMinutes() * 6 + 'deg)';
    secondi.style.transform = 'translate(-50%, -50%) rotate(' + dateNow.getSeconds() * 6 + 'deg)';

}, 1000);

