let wrapper = document.querySelector('.wrapper');
let btn = document.querySelector('.btn--dark-mode');
btn.addEventListener('click', () => {
    wrapper.classList.toggle('dark-mode');
});