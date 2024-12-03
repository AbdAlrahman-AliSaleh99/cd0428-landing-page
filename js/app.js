let activeSection = '';
let navItems = [];

document.addEventListener('DOMContentLoaded', () => {
    buildNavigation();
    handleScrolling();
});

/**
 * Function to build the navigation menu dynamically.
 */
function buildNavigation() {
    const navbarList = document.getElementById('navbar__list');
    const navSections = ['Section1', 'Section2', 'Section3', 'Section4'];

    navbarList.style.display = 'flex';
    navbarList.style.justifyContent = 'end';

    navSections.forEach(section => {
        const sectionNav = createNavItem(section);
        navbarList.appendChild(sectionNav);

        sectionNav.addEventListener('click', (event) => {
            event.preventDefault();
            updateActiveNavItem(sectionNav);
            activeSection = section;
            goToSection();
        });
    });

    // Initialize navItems after creating the menu
    navItems = document.querySelectorAll('.menu__link');
}

/**
 * Function to create a navigation item.
 * @param {string} section - Section name
 * @returns {HTMLLIElement} - Navigation list item
 */
function createNavItem(section) {
    const sectionNav = document.createElement('li');
    sectionNav.innerText = section;
    sectionNav.classList.add('menu__link');
    return sectionNav;
}

/**
 * Function to update the active navigation item.
 * @param {HTMLElement} selectedNav - Selected navigation item
 */
function updateActiveNavItem(selectedNav) {
    navItems.forEach(nav => nav.classList.remove('active'));
    selectedNav.classList.add('active');
}

/**
 * Function to handle smooth scrolling to the active section.
 */
function goToSection() {
    const sectionId = getSectionIdBySectionName(activeSection);
    const section = document.getElementById(sectionId);

    if (section) {
        scrollToSection(section);
    }
}

/**
 * Function to return the section ID based on the section name.
 * @param {string} sectionName - Section name
 * @returns {string} - Section ID
 */
function getSectionIdBySectionName(sectionName) {
    return sectionName.replace(' ', '').toLowerCase();
}

/**
 * Smoothly scrolls to the section.
 * @param {HTMLElement} section - Section element
 */
function scrollToSection(section) {
    const topPosition = section.offsetTop;
    window.scroll({
        top: topPosition,
        behavior: 'smooth',
    });
}

/**
 * Function to handle setting the active class based on the scrolled section in view.
 */
function handleScrolling() {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let activeSect = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top >= 0 && rect.top <= window.innerHeight / 2;

            if (isInView) {
                activeSect = section;
            }
        });

        if (activeSect) {
            const activeNavItem = Array.from(navItems).find(nav => 
                nav.innerText.toLowerCase() === activeSect.id
            );

            if (activeNavItem) {
                updateActiveNavItem(activeNavItem);
            }
        }
    });
}
