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

// List of Hours of Operation
const DAYS_UL = document.createElement('ul')
const SUNDAY_LI = document.createElement('li')
const MONDAY_LI = document.createElement('li')
const TUESDAY_LI = document.createElement('li')
const WEDNESDAY_LI = document.createElement('li')
const THURSDAY_LI = document.createElement('li')
const FRIDAY_LI = document.createElement('li')
const SATURDAY_LI = document.createElement('li')

const TIME_UL = document.createElement('ul')
const SUNDAY_TIME = document.createElement('li')
const MONDAY_TIME = document.createElement('li')
const TUESDAY_TIME = document.createElement('li')
const WEDNESDAY_TIME = document.createElement('li')
const THURSDAY_TIME = document.createElement('li')
const FRIDAY_TIME = document.createElement('li')
const SATURDAY_TIME = document.createElement('li')


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
    HOURS_HEADER.innerHTML = 'BUSINESS HOURS'

    ABOUT_HOURS_DIV.appendChild(HOURS_DAYS).className = 'hours-days'
    HOURS_DAYS.appendChild(DAYS_UL).className = 'day-list'
    DAYS_UL.append(SUNDAY_LI, MONDAY_LI, TUESDAY_LI, WEDNESDAY_LI, THURSDAY_LI, FRIDAY_LI, SATURDAY_LI)
    SUNDAY_LI.innerHTML = 'SUNDAY'
    MONDAY_LI.innerHTML = 'MONDAY'
    TUESDAY_LI.innerHTML = 'TUESDAY'
    WEDNESDAY_LI.innerHTML = 'WEDNESDAY'
    THURSDAY_LI.innerHTML = 'THURSDAY'
    FRIDAY_LI.innerHTML = 'FRIDAY'
    SATURDAY_LI.innerHTML = 'SATURDAY'

    ABOUT_HOURS_DIV.appendChild(HOURS_TIME).className = 'hours-time'
    HOURS_TIME.appendChild(TIME_UL).className = 'time-list'
    TIME_UL.append(SUNDAY_TIME, MONDAY_TIME, TUESDAY_TIME, WEDNESDAY_TIME, THURSDAY_TIME, FRIDAY_TIME, SATURDAY_TIME)
    SUNDAY_TIME.innerHTML = '12 PM - 8 PM'
    MONDAY_TIME.innerHTML = '12 PM - 8 PM'
    TUESDAY_TIME.innerHTML = '12 PM - 8 PM'
    WEDNESDAY_TIME.innerHTML = '12 PM - 8 PM'
    THURSDAY_TIME.innerHTML = '12 PM - 8 PM'
    FRIDAY_TIME.innerHTML = '12 PM - 8 PM'
    SATURDAY_TIME.innerHTML = '12 PM - 8 PM'
}

export { ABOUT_CONTAINER_DIV, aboutCreate };