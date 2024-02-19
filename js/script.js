const menuButton = document.getElementById('menu-btn');
const menuItems = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    menuItems.classList.toggle('flex');
    menuItems.classList.toggle('hidden');
});