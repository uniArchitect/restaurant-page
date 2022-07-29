import { CONTAINER_DIV } from './index.js';
import { LOCATION_CONTAINER_DIV } from './location.js';
import { ABOUT_CONTAINER_DIV } from './about.js';
import { EVENTS_CONTAINER_DIV } from './events.js';

// Switch to location page
const MENU_CONTAINER_DIV = document.createElement('div')

export default function menuChange() {
    // alternatively set display: none for each container
    CONTAINER_DIV.style.display = 'none'
    LOCATION_CONTAINER_DIV.style.display = 'none'
    ABOUT_CONTAINER_DIV.style.display = 'none'
    EVENTS_CONTAINER_DIV.style.display = 'none'

    document.body.appendChild(MENU_CONTAINER_DIV).className = 'menu-page'
    MENU_CONTAINER_DIV.innerHTML = "MENU PAGE"

    return MENU_CONTAINER_DIV
}

export { MENU_CONTAINER_DIV };