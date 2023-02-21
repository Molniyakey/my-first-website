const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-nav');


burger.addEventListener('click', (e) => {
    menu.classList.toggle('hide')
})