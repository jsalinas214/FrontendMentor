const main = document.querySelector('main');
const email = document.querySelector('#email');
const form = document.querySelector('.form');
const aside = document.querySelector('aside');
const mail = document.querySelector('#mail');
const dismiss = document.querySelector('#dismiss-btn');


form.addEventListener('submit', () => {
   main.style.display = 'none';
   aside.style.display = 'block';
   email.textContent  = mail.value;
})

dismiss.addEventListener('click', () => {
   main.style.display = 'block';
   aside.style.display = 'none';
   mail.value= '';
})
