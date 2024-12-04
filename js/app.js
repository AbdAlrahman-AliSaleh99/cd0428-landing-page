document.addEventListener('DOMContentLoaded', () => {
    buildNavigation();
    addSmoothScroll();
    window.addEventListener('scroll', highlightActiveSection);
});

/**
 * Function to dynamically build the navigation menu.
 */
function buildNavigation() {
    const sections = Array.from(document.querySelectorAll('section'));
    const menu = document.getElementById('navbar__list');

    sections.forEach((section) => {
        const listItem = document.createElement('li');
        const listItemLink = document.createElement('a');
        listItemLink.classList.add('menu__link');
        listItemLink.textContent = section.dataset.nav;
        listItemLink.href = `#${section.id}`;
        listItem.appendChild(listItemLink);
        menu.appendChild(listItem);
    });
}

/**
 * Function to add smooth scrolling behavior to navigation links.
 */
function addSmoothScroll() {
    const navLinks = document.querySelectorAll('.menu__link');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
}

/**
 * Function to highlight the active section in the viewport.
 */
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const bounding = section.getBoundingClientRect();
        const navLinks = document.querySelectorAll('.menu__link');

        if (bounding.top >= -50 && bounding.top <= 300) {
            section.classList.add('active');

            navLinks.forEach((link) => {
                if (link.textContent === section.dataset.nav) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        } else {
            section.classList.remove('active');
        }
    });
}
