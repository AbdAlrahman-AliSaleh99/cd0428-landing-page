let activeSection = '';

document.addEventListener('DOMContentLoaded', () => {
    buildNavigation();
    handleScrolling();
});

/**
 * function to build navigation menu dynamically.
 */
function buildNavigation() {
    const navbarList = document.getElementById('navbar__list');
    const navSections = ['Section1', 'Section2', 'Section3', 'Section4'];

    navbarList.style.display = 'flex';
    navbarList.style.justifyContent = 'end';

    navSections.forEach(section => {
        const sectionNav = createNavItem(section);
        navbarList.appendChild(sectionNav);

        sectionNav.addEventListener('click', () => {
            const navItems = document.querySelectorAll('.menu__link');
            navItems.forEach(nav => nav.classList.remove('active'));
            sectionNav.classList.add('active');
            activeSection = section;
            goToSection();
        });
    });
}

/**
 * function to create a navigation item.
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
 * function to handle smooth scrolling and set the selected section to active.
 */
function goToSection() {
    const sectionId = getSectionIdBySectionName(activeSection);
    const section = document.getElementById(sectionId);

    if (section) {
        scrollToSection(section);
        setSectionActive(sectionId);
    }
}

/**
 * function that return the section ID Based on Section Name
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
 * set the scrolled section class active based on ID.
 * @param {string} activeSectionId - Active section ID
 */
function setSectionActive(activeSectionId) {
    const sections = document.querySelectorAll('section');

    sections.forEach(sec => {
        if (sec.id === activeSectionId) {
            sec.classList.add('active');
        } else {
            sec.classList.remove('active');
        }
    });
}

/**
 * function contain event listener to set the scrolled section class to active in view.
 */
function handleScrolling() {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top >= 0 && rect.top <= window.innerHeight / 2;

            if (isInView) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
}
