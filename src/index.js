// Home Page
import './styles.css';
import Cover_Image from './images/food-cover.jpg';

const TAB_CONTAINER_DIV = document.createElement('div');
const CONTAINER_DIV = document.createElement('div');

document.body.appendChild(TAB_CONTAINER_DIV).className = 'tab-container';
document.body.appendChild(CONTAINER_DIV).className = 'body-container';

// Add cover image
const COVER_IMAGE = new Image();
COVER_IMAGE.src = Cover_Image;

CONTAINER_DIV.appendChild(COVER_IMAGE);