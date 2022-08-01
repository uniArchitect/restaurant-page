import { CONTAINER_DIV } from './index.js';
import { LOCATION_CONTAINER_DIV } from './location.js';
import { ABOUT_CONTAINER_DIV } from './about.js';
import { EVENTS_CONTAINER_DIV } from './events.js';

// Switch to location page

// Elements within menu page
const MENU_CONTAINER_DIV = document.createElement('div')
const MENU_HEADER_DIV = document.createElement('div')
const MENU_ITEM_ONE_DIV = document.createElement('div')
const MENU_ITEM_TWO_DIV = document.createElement('div')
const MENU_ITEM_THREE_DIV = document.createElement('div')
const MENU_ITEM_FOUR_DIV = document.createElement('div')

export default function menuChange() {
    // alternatively set display: none for each container
    CONTAINER_DIV.style.display = 'none'
    LOCATION_CONTAINER_DIV.style.display = 'none'
    ABOUT_CONTAINER_DIV.style.display = 'none'
    EVENTS_CONTAINER_DIV.style.display = 'none'

    document.body.appendChild(MENU_CONTAINER_DIV).className = 'menu-page'
    MENU_CONTAINER_DIV.innerHTML = "MENU PAGE"
    MENU_CONTAINER_DIV.style.display = 'block'

    // create page layout for menu
    

    return MENU_CONTAINER_DIV
}

export { MENU_CONTAINER_DIV };