const main = document.querySelector('main');
const email = document.querySelector('#email');
const subscribe = document.querySelector('#subscribe-btn');
const aside = document.querySelector('aside');
const mail = document.querySelector('#mail');
const dismiss = document.querySelector('#dismiss-btn');


subscribe.addEventListener('click', () => {
   main.style.display = 'none';
   aside.style.display = 'block';
   mail.textContent  = email.value;
});

dismiss.addEventListener('click', () => {
   main.style.display = 'block';
   aside.style.display = 'none';
   mail.value= '';
});
