import { CONTAINER_DIV } from './index.js';
import { LOCATION_CONTAINER_DIV } from './location.js';
import { MENU_CONTAINER_DIV } from './menu.js';
import { ABOUT_CONTAINER_DIV } from './about.js';

// Switch to location page
const EVENTS_CONTAINER_DIV = document.createElement('div')
const CONTACT_HEADER_DIV = document.createElement('div')
const CONTACT_TEXT_DIV = document.createElement('div')
const CONTACT_FORM_CONTAINER_DIV = document.createElement('div')

// Form variables
const CONTACT_FORM = document.createElement('form')
const FORM_UL = document.createElement('ul')

// Form - First Name
const FORM_FIRST_NAME = document.createElement('li')
const FIRST_NAME_LABEL = document.createElement('label')
const FIRST_NAME_INPUT = document.createElement('input')

// Form - Last Name
const FORM_LAST_NAME = document.createElement('li')
const LAST_NAME_LABEL = document.createElement('label')
const LAST_NAME_INPUT = document.createElement('input')

// Form - Email
const FORM_EMAIL = document.createElement('li')
const EMAIL_LABEL = document.createElement('label')
const EMAIL_INPUT = document.createElement('input')

// Form - Message
const FORM_MESSAGE = document.createElement('li')
const MESSAGE_LABEL = document.createElement('label')
const MESSAGE_INPUT = document.createElement('input')

const SUBMIT_BTN = document.createElement('input')

export default function eventsChange() {
    // alternatively set display: none for each container
    CONTAINER_DIV.style.display = 'none'
    LOCATION_CONTAINER_DIV.style.display = 'none'
    MENU_CONTAINER_DIV.style.display = 'none'
    ABOUT_CONTAINER_DIV.style.display = 'none'

    document.body.appendChild(EVENTS_CONTAINER_DIV).className = 'events-page'
    EVENTS_CONTAINER_DIV.style.display = 'grid'

    return EVENTS_CONTAINER_DIV
}

const contactCreate = () => {
    // Page Header
    EVENTS_CONTAINER_DIV.appendChild(CONTACT_HEADER_DIV).className = 'contact-header'
    CONTACT_HEADER_DIV.innerHTML = 'CONTACT US'

    EVENTS_CONTAINER_DIV.appendChild(CONTACT_TEXT_DIV).className = 'contact-text'
    CONTACT_TEXT_DIV.innerHTML = 'Feel free to let us know how great our boba is down below!'

    // Form - Container
    EVENTS_CONTAINER_DIV.appendChild(CONTACT_FORM_CONTAINER_DIV).className = 'contact-form-container'
    CONTACT_FORM_CONTAINER_DIV.appendChild(CONTACT_FORM).className = 'contact-form'

    CONTACT_FORM.appendChild(FORM_UL)


    // Add all form fields
    FORM_UL.appendChild(FORM_FIRST_NAME).className = 'form-li'
    FORM_UL.appendChild(FORM_LAST_NAME).className = 'form-li'
    FORM_UL.appendChild(FORM_EMAIL).className = 'form-li'
    FORM_UL.appendChild(FORM_MESSAGE).className = 'form-li'
    FORM_UL.appendChild(SUBMIT_BTN)

    // Create - individual attributes for labels and inputs
    FORM_FIRST_NAME.append(FIRST_NAME_LABEL, FIRST_NAME_INPUT)
        FIRST_NAME_LABEL.innerHTML = 'FIRST NAME'
        FIRST_NAME_LABEL.setAttribute('for', 'first-name')
        FIRST_NAME_INPUT.setAttribute('required', '')
        FIRST_NAME_INPUT.setAttribute('id', 'first-name')
        FIRST_NAME_INPUT.setAttribute('name', 'first-name')
    FORM_LAST_NAME.append(LAST_NAME_LABEL, LAST_NAME_INPUT)
        LAST_NAME_LABEL.innerHTML = 'LAST NAME'
        LAST_NAME_LABEL.setAttribute('for', 'last-name')
        LAST_NAME_INPUT.setAttribute('required', '')
        LAST_NAME_INPUT.setAttribute('id', 'last-name')
        LAST_NAME_INPUT.setAttribute('name', 'last-name')
    FORM_EMAIL.append(EMAIL_LABEL, EMAIL_INPUT)
        EMAIL_LABEL.innerHTML = 'EMAIL'
        EMAIL_LABEL.setAttribute('for', 'email')
        EMAIL_INPUT.setAttribute('required', '')
        EMAIL_INPUT.setAttribute('id', 'email')
        EMAIL_INPUT.setAttribute('name', 'email')
    FORM_MESSAGE.append(MESSAGE_LABEL, MESSAGE_INPUT)
        MESSAGE_LABEL.innerHTML = 'MESSAGE'
        MESSAGE_LABEL.setAttribute('for', 'message')
        MESSAGE_INPUT.setAttribute('required', '')
        MESSAGE_INPUT.setAttribute('id', 'message')
        MESSAGE_INPUT.setAttribute('name', 'message')

    // Create - Form submit button attributes
    SUBMIT_BTN.setAttribute('type', 'submit')
    SUBMIT_BTN.setAttribute('id', 'submit-btn')
    SUBMIT_BTN.setAttribute('value', 'Submit')
}

export { EVENTS_CONTAINER_DIV, contactCreate };