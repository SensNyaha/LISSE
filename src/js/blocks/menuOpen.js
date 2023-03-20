export default function menuOpen() {
    const menuTrigger = document.querySelector('.header__menu-trigger');
    const menu = document.querySelector('.menu');


    if (menuTrigger && menu) {
        menuTrigger.addEventListener('click', () => {
            menuTrigger.classList.toggle('opened');
            menu.classList.toggle('opened');

            if (!menuTrigger.classList.contains('opened') && !menu.classList.contains('once-opened')) {
                menu.classList.add('once-opened');
            }
        })
    }
}