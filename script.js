const menu = document.querySelector('.menu');
const popup = document.querySelector('.popup');

menu.addEventListener('click', () => {
    if (popup.style.display === 'block' || popup.style.display === '') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
});
