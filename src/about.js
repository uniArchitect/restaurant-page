import { CONTAINER_DIV } from './index.js';
import { LOCATION_CONTAINER_DIV } from './location.js';
import { MENU_CONTAINER_DIV } from './menu.js';
import { EVENTS_CONTAINER_DIV } from './events.js';

// Switch to location page
const ABOUT_CONTAINER_DIV = document.createElement('div')

export default function aboutChange() {
    // alternatively set display: none for each container
    CONTAINER_DIV.style.display = 'none'
    LOCATION_CONTAINER_DIV.style.display = 'none'
    MENU_CONTAINER_DIV.style.display = 'none'
    EVENTS_CONTAINER_DIV.style.display = 'none'

    document.body.appendChild(ABOUT_CONTAINER_DIV).className = 'about-page'
    ABOUT_CONTAINER_DIV.innerHTML = "ABOUT PAGE"

    return ABOUT_CONTAINER_DIV
}

export { ABOUT_CONTAINER_DIV };