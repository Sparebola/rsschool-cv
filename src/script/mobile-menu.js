const applyNodeStyles = (node, styles) => {
    for (const name in styles) {
        node.style[name] = styles[name];
    }
};

const MOBILE_MENU_OPEN_CLASS_NAME = 'open';

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const htmlPage = document.getElementById('htmlPage');

    menuIcon.addEventListener('click', (event) => {
        event.preventDefault();

        const isOpen = mobileMenu.classList.contains(MOBILE_MENU_OPEN_CLASS_NAME);

        if (isOpen) {
            mobileMenu.classList.remove(MOBILE_MENU_OPEN_CLASS_NAME);
            applyNodeStyles(mobileMenu, { left: '100vw' });
            applyNodeStyles(htmlPage, { overflowY: 'auto' });

            setTimeout(() => {
                applyNodeStyles(mobileMenu, { display: 'none' });
            }, 300)
        }
        else {
            mobileMenu.classList.add(MOBILE_MENU_OPEN_CLASS_NAME);
            applyNodeStyles(mobileMenu, { display: 'block' });
            
            setTimeout(() => {
                applyNodeStyles(mobileMenu, { left: 0 });
            }, 1)
            applyNodeStyles(htmlPage, { overflowY: 'hidden' });
        }
    });


    const buttons = document.querySelectorAll('.needToClick');

    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.addEventListener('click', (event) => {
            // event.preventDefault();

            applyNodeStyles(htmlPage, { overflowY: 'auto' });
            applyNodeStyles(mobileMenu, { left: '100vw' });
        });
    }
});
