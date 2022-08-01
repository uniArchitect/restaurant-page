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

// function to replicate a basic menu item
const menuItem = (div) => {
    // elements within the menu line item
    const itemName = document.createElement('div')
    const itemText = document.createElement('div')
    const itemPrice = document.createElement('div')
    const itemImage = document.createElement('div')

    div.appendChild(itemName).className = 'item-name'
    div.appendChild(itemText).className = 'item-text'
    div.appendChild(itemPrice).className = 'item-price'
    div.appendChild(itemImage).className = 'item-image'
}

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
    MENU_CONTAINER_DIV.appendChild(MENU_HEADER_DIV).className = 'menu-header'
    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_ONE_DIV).className = 'menu-item'
    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_TWO_DIV).className = 'menu-item'
    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_THREE_DIV).className = 'menu-item'
    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_FOUR_DIV).className = 'menu-item'

    menuItem(MENU_ITEM_ONE_DIV)
    menuItem(MENU_ITEM_TWO_DIV)
    menuItem(MENU_ITEM_THREE_DIV)
    menuItem(MENU_ITEM_FOUR_DIV)

    return MENU_CONTAINER_DIV
}

export { 
    MENU_CONTAINER_DIV, 
    menuItem 
};