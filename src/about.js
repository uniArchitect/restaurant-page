import { CONTAINER_DIV } from './index.js';
import { LOCATION_CONTAINER_DIV } from './location.js';
import { MENU_CONTAINER_DIV } from './menu.js';
import { EVENTS_CONTAINER_DIV } from './events.js';
import About_Cover from './images/about-cover.jpg';

// Switch to location page
const ABOUT_CONTAINER_DIV = document.createElement('div')
const ABOUT_HEADER_DIV = document.createElement('div')
const ABOUT_TEXT_DIV = document.createElement('div')
const ABOUT_COVER_DIV = document.createElement('div')
const ABOUT_HOURS_DIV = document.createElement('div')
const HOURS_HEADER = document.createElement('div')
const HOURS_DAYS = document.createElement('div')
const HOURS_TIME = document.createElement('div')

const ABOUT_COVER = new Image();
ABOUT_COVER.src = About_Cover;

export default function aboutChange() {
    // alternatively set display: none for each container
    CONTAINER_DIV.style.display = 'none'
    LOCATION_CONTAINER_DIV.style.display = 'none'
    MENU_CONTAINER_DIV.style.display = 'none'
    EVENTS_CONTAINER_DIV.style.display = 'none'

    document.body.appendChild(ABOUT_CONTAINER_DIV).className = 'about-page'
    // ABOUT_CONTAINER_DIV.innerHTML = "ABOUT PAGE"
    ABOUT_CONTAINER_DIV.style.display = 'grid'

    return ABOUT_CONTAINER_DIV
}

// Function to create content on the page
const aboutCreate = () => {
    // Page Header
    ABOUT_CONTAINER_DIV.appendChild(ABOUT_HEADER_DIV).className = 'about-header'
    ABOUT_HEADER_DIV.innerHTML = 'ABOUT'

    // Page Image
    ABOUT_CONTAINER_DIV.appendChild(ABOUT_COVER_DIV).className = 'about-cover'
    ABOUT_COVER_DIV.appendChild(ABOUT_COVER).className = 'about-image'

    // Descriptive text about the store
    ABOUT_CONTAINER_DIV.appendChild(ABOUT_TEXT_DIV).className = 'about-text'
    ABOUT_TEXT_DIV.innerHTML = 'Welcome to Initial Tea Boba Shop! We have the best boba in NYC!'

    // Hours of Operation
    ABOUT_CONTAINER_DIV.appendChild(ABOUT_HOURS_DIV).className = 'about-hours'
    ABOUT_HOURS_DIV.appendChild(HOURS_HEADER).className = 'hours-header'
    HOURS_HEADER.appendChild(HOURS_DAYS).className = 'hours-days'
    HOURS_HEADER.appendChild(HOURS_TIME).className = 'hours-time'
}

export { ABOUT_CONTAINER_DIV, aboutCreate };