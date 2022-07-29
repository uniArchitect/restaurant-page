import { CONTAINER_DIV } from './index.js';
import { LOCATION_CONTAINER_DIV } from './location.js';
import { MENU_CONTAINER_DIV } from './menu.js';
import { ABOUT_CONTAINER_DIV } from './about.js';

// Switch to location page
const EVENTS_CONTAINER_DIV = document.createElement('div')

export default function eventsChange() {
    // alternatively set display: none for each container
    CONTAINER_DIV.style.display = 'none'
    LOCATION_CONTAINER_DIV.style.display = 'none'
    MENU_CONTAINER_DIV.style.display = 'none'
    ABOUT_CONTAINER_DIV.style.display = 'none'

    document.body.appendChild(EVENTS_CONTAINER_DIV).className = 'events-page'
    EVENTS_CONTAINER_DIV.innerHTML = "EVENTS PAGE"

    return EVENTS_CONTAINER_DIV
}

export { EVENTS_CONTAINER_DIV };