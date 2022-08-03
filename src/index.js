// Home Page
import './styles.css';
import Cover_Image from './images/boba-cover.jpg';
// import locationChange, { LOCATION_CONTAINER_DIV } from './location.js';
import menuChange, { MENU_CONTAINER_DIV, menuItem, menuCreate } from './menu.js';
import aboutChange, { ABOUT_CONTAINER_DIV, aboutCreate } from './about.js';
import eventsChange, { EVENTS_CONTAINER_DIV, contactCreate } from './events.js';

// GLOBAL SCOPE
const HEADER_DIV = document.createElement('div');
const CONTAINER_DIV = document.createElement('div');

// Header submenu
const NAV_MENU_UL = document.createElement('ul');
// const NAV_HOURS_LOCATION_LI = document.createElement('li');
const NAV_MENUS_LI = document.createElement('li');
const NAV_ABOUT_LI = document.createElement('li');
const NAV_PRIVATE_EVENTS_LI = document.createElement('li');
const NAV_LOGO_A = document.createElement('a');
// const HOURS_LOCATION_A = document.createElement('a');
const MENUS_A = document.createElement('a');
const ABOUT_A = document.createElement('a');
const PRIVATE_EVENTS_A = document.createElement('a');

// Submenu link HTML
NAV_LOGO_A.innerHTML = 'INITIAL TEA SHOP'
// HOURS_LOCATION_A.innerHTML = 'LOCATION'
MENUS_A.innerHTML = 'MENU'
ABOUT_A.innerHTML = 'ABOUT'
PRIVATE_EVENTS_A.innerHTML = 'CONTACT'

// Append href link to submenu links
NAV_LOGO_A.setAttribute('href', '#');
// HOURS_LOCATION_A.setAttribute('href', '#');
MENUS_A.setAttribute('href', '#');
ABOUT_A.setAttribute('href', '#');
PRIVATE_EVENTS_A.setAttribute('href', '#');

// Add cover image
// Remove cover image when submenu-link is 'clicked'
const COVER_IMAGE = new Image();
COVER_IMAGE.src = Cover_Image;

// Create container bodies
// cover-container will disappear when a submenu-link is clicked
document.body.appendChild(HEADER_DIV).className = 'header';
document.body.appendChild(CONTAINER_DIV).className = 'cover-container';

function homeChange() {
    // alternatively set display: none for each container
    // LOCATION_CONTAINER_DIV.style.display = 'none'
    MENU_CONTAINER_DIV.style.display = 'none'
    ABOUT_CONTAINER_DIV.style.display = 'none'
    EVENTS_CONTAINER_DIV.style.display = 'none'

    CONTAINER_DIV.style.display = 'flex'

    return CONTAINER_DIV
}

// Append links to header div
HEADER_DIV.appendChild(NAV_MENU_UL).className = 'nav-menu';
HEADER_DIV.appendChild(NAV_LOGO_A).className = 'nav-logo';

// Define variable for id of header links
NAV_LOGO_A.setAttribute('id', 'home-link');
const homeTab = document.querySelector('#home-link');

// NAV_MENU_UL.appendChild(NAV_HOURS_LOCATION_LI);
// NAV_HOURS_LOCATION_LI.appendChild(HOURS_LOCATION_A).className = 'submenu-link';
// HOURS_LOCATION_A.setAttribute('id', 'location-link');
// const locationTab = document.querySelector('#location-link');

NAV_MENU_UL.appendChild(NAV_MENUS_LI);
NAV_MENUS_LI.appendChild(MENUS_A).className = 'submenu-link';
MENUS_A.setAttribute('id', 'menu-link')
const menuTab = document.querySelector('#menu-link');

NAV_MENU_UL.appendChild(NAV_ABOUT_LI);
NAV_ABOUT_LI.appendChild(ABOUT_A).className = 'submenu-link';
ABOUT_A.setAttribute('id', 'about-link')
const aboutTab = document.querySelector('#about-link');

NAV_MENU_UL.appendChild(NAV_PRIVATE_EVENTS_LI);
NAV_PRIVATE_EVENTS_LI.appendChild(PRIVATE_EVENTS_A).className = 'submenu-link';
PRIVATE_EVENTS_A.setAttribute('id', 'events-link')
const eventsTab = document.querySelector('#events-link');

// Append banner image to homepage
CONTAINER_DIV.appendChild(COVER_IMAGE).className = 'home-image';

// Switch to home page
homeTab.addEventListener('click', () => {
    homeChange();
})

// Switch to location page
// locationChange function is added after the callback fn so it does not run immediately when the page runs
// locationTab.addEventListener('click', () => {
//     locationChange();
// })

// Switch to menu page
menuCreate();
menuTab.addEventListener('click', () => {
    menuChange();
})

// Switch to about page
aboutCreate();
aboutTab.addEventListener('click', () => {
    aboutChange();
})

// Switch to private events page
contactCreate();
eventsTab.addEventListener('click', () => {
    eventsChange();
})

export { CONTAINER_DIV, menuTab, aboutTab, eventsTab }

// const aboutPage = new PageUI();