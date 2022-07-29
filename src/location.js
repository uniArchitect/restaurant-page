import { CONTAINER_DIV } from './index.js';
import { MENU_CONTAINER_DIV } from './menu.js';
import { ABOUT_CONTAINER_DIV } from './about.js';
import { EVENTS_CONTAINER_DIV } from './events.js';

// Switch to location page
const LOCATION_CONTAINER_DIV = document.createElement('div')

export default function locationChange() {
    // alternatively set display: none for each container
    CONTAINER_DIV.style.display = 'none'
    MENU_CONTAINER_DIV.style.display = 'none'
    ABOUT_CONTAINER_DIV.style.display = 'none'
    EVENTS_CONTAINER_DIV.style.display = 'none'

    document.body.appendChild(LOCATION_CONTAINER_DIV).className = 'location-page'
    LOCATION_CONTAINER_DIV.innerHTML = "LOCATION PAGE"
    LOCATION_CONTAINER_DIV.style.display = 'block'

    return LOCATION_CONTAINER_DIV
}

export { LOCATION_CONTAINER_DIV };