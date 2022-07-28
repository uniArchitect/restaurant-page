// Home Page
import './styles.css';
import Cover_Image from './images/boba-cover.jpg';

// Class to create new page when submenu-link is 'clicked'
// class PageUI {
//     constructor(pageName) {
//         this.name = pageName
//     }

//     // switch to About page
//     aboutPage = document.querySelector('.submenu-link').addEventListener('click', () => {
//         document.body.removeChild('CONTAINER_DIV')
//         const ABOUT_CONTAINER_DIV = document.createElement('div')

//         document.body.appendChild(ABOUT_CONTAINER_DIV)

//         return ABOUT_CONTAINER_DIV
//     })
// }

// GLOBAL SCOPE
const HEADER_DIV = document.createElement('div');
const CONTAINER_DIV = document.createElement('div');

// Header submenu
const NAV_MENU_UL = document.createElement('ul');
const NAV_HOURS_LOCATION_LI = document.createElement('li');
const NAV_MENUS_LI = document.createElement('li');
const NAV_ABOUT_LI = document.createElement('li');
const NAV_PRIVATE_EVENTS_LI = document.createElement('li');
const NAV_LOGO_DIV = document.createElement('div');
const HOURS_LOCATION_A = document.createElement('a');
const MENUS_A = document.createElement('a');
const ABOUT_A = document.createElement('a');
const PRIVATE_EVENTS_A = document.createElement('a');

// Submenu link HTML
NAV_LOGO_DIV.innerHTML = 'INITIAL TEA SHOP'
HOURS_LOCATION_A.innerHTML = 'LOCATION'
MENUS_A.innerHTML = 'MENU'
ABOUT_A.innerHTML = 'ABOUT'
PRIVATE_EVENTS_A.innerHTML = 'PRIVATE EVENTS'

// Append href link to submenu links
HOURS_LOCATION_A.setAttribute('href', '#');
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

// Append links to header div
HEADER_DIV.appendChild(NAV_MENU_UL).className = 'nav-menu';
HEADER_DIV.appendChild(NAV_LOGO_DIV).className = 'nav-logo';

NAV_MENU_UL.appendChild(NAV_HOURS_LOCATION_LI);
NAV_HOURS_LOCATION_LI.appendChild(HOURS_LOCATION_A).className = 'submenu-link';

NAV_MENU_UL.appendChild(NAV_MENUS_LI);
NAV_MENUS_LI.appendChild(MENUS_A).className = 'submenu-link';

NAV_MENU_UL.appendChild(NAV_ABOUT_LI);
NAV_ABOUT_LI.appendChild(ABOUT_A).className = 'submenu-link';

NAV_MENU_UL.appendChild(NAV_PRIVATE_EVENTS_LI);
NAV_PRIVATE_EVENTS_LI.appendChild(PRIVATE_EVENTS_A).className = 'submenu-link';

// Append banner image to homepage
CONTAINER_DIV.appendChild(COVER_IMAGE);

// BUG: .submenu-link needs to be specific, querySelector a specific ID for each link to make each link work correctly
document.querySelector('.submenu-link').addEventListener('click', () => {
    document.body.removeChild(CONTAINER_DIV)
    const LOCATION_CONTAINER_DIV = document.createElement('div')

    document.body.appendChild(LOCATION_CONTAINER_DIV).className = 'about-page'
    LOCATION_CONTAINER_DIV.innerHTML = "ABOUT PAGE"

    return LOCATION_CONTAINER_DIV
})

// const aboutPage = new PageUI();