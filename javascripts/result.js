// Den här filen är bara till för att visa rätt
// resultat på testerna, men tjuvkika gärna!

import {isItSaturdayToday, daysUntil} from '../saturday.js';

const date = new Date();

if (isItSaturdayToday(date) === undefined && daysUntil(date) === undefined) {
  document.querySelector('.result-row').innerHTML = 'Gör ändringar i filen saturday.js';
  document.getElementById('button-container').style.display = 'none';
} else {
  if (isItSaturdayToday(date) && daysUntil(date) === 0) {
    document.querySelector('.result-row').innerHTML = 'Yes, Today is saturday!';
  } else {
    document.querySelector('.result-row').innerHTML = 'No, it is not saturday, it is &nbsp;<u>' + daysUntil(date) + '</u>&nbsp; days left.';
  }
}


document.querySelectorAll('button').forEach((btn) => btn.addEventListener('mousedown', function(e) {
  gsap.to(btn, { duration: 0.1, scale: 0.9 });
}));

document.querySelectorAll('button').forEach((btn) => btn.addEventListener('mouseup', function(e) {
  gsap.to(btn, { duration: 0.5, scale: 1, ease: Elastic.easeOut.config(1, 0.2) });
}));
