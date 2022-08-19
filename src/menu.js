/* eslint-disable import/no-cycle */
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
const MENU_ITEM_FIVE_DIV = document.createElement('div')

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

const menuCreate = () => {
    // create page layout for menu
    MENU_CONTAINER_DIV.appendChild(MENU_HEADER_DIV).className = 'menu-header'
    MENU_HEADER_DIV.innerHTML = 'MENU'

    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_ONE_DIV).className = 'menu-item'
    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_TWO_DIV).className = 'menu-item'
    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_THREE_DIV).className = 'menu-item'
    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_FOUR_DIV).className = 'menu-item'
    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_FIVE_DIV).className = 'menu-item'

    // BUG: menuItem repeats after menuChange is called
    menuItem(MENU_ITEM_ONE_DIV)
    menuItem(MENU_ITEM_TWO_DIV)
    menuItem(MENU_ITEM_THREE_DIV)
    menuItem(MENU_ITEM_FOUR_DIV)
    menuItem(MENU_ITEM_FIVE_DIV)

    // Item One
    MENU_ITEM_ONE_DIV.children[0].innerHTML = 'MILK TEA'
    MENU_ITEM_ONE_DIV.children[1].innerHTML = 'Our most popular drink!'
    MENU_ITEM_ONE_DIV.children[2].innerHTML = '$5.00'

    // Item Two
    MENU_ITEM_TWO_DIV.children[0].innerHTML = 'OOLONG TEA'
    MENU_ITEM_TWO_DIV.children[1].innerHTML = 'Our second most popular drink!'
    MENU_ITEM_TWO_DIV.children[2].innerHTML = '$5.00'

    // Item Three
    MENU_ITEM_THREE_DIV.children[0].innerHTML = 'BLACK TEA'
    MENU_ITEM_THREE_DIV.children[1].innerHTML = 'Our third most popular drink!'
    MENU_ITEM_THREE_DIV.children[2].innerHTML = '$5.00'

    // Item Four
    MENU_ITEM_FOUR_DIV.children[0].innerHTML = 'JASMINE TEA'
    MENU_ITEM_FOUR_DIV.children[1].innerHTML = 'Our fourth most popular drink!'
    MENU_ITEM_FOUR_DIV.children[2].innerHTML = '$5.00'

    // Item Five
    MENU_ITEM_FIVE_DIV.children[0].innerHTML = 'MANGO SLUSH'
    MENU_ITEM_FIVE_DIV.children[1].innerHTML = 'Our fifth most popular drink!'
    MENU_ITEM_FIVE_DIV.children[2].innerHTML = '$5.00'
}

export default function menuChange() {
    // alternatively set display: none for each container
    CONTAINER_DIV.style.display = 'none'
    LOCATION_CONTAINER_DIV.style.display = 'none'
    ABOUT_CONTAINER_DIV.style.display = 'none'
    EVENTS_CONTAINER_DIV.style.display = 'none'

    document.body.appendChild(MENU_CONTAINER_DIV).className = 'menu-page'
    // MENU_CONTAINER_DIV.innerHTML = "MENU PAGE"
    MENU_CONTAINER_DIV.style.display = 'grid'

    return MENU_CONTAINER_DIV
}

export { 
    MENU_CONTAINER_DIV, 
    menuItem,
    menuCreate 
};