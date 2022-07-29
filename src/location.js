// Switch to location page
export default function locationChange(container) {
    // alternatively set display: none for each container
    document.body.removeChild(container)
    const LOCATION_CONTAINER_DIV = document.createElement('div')

    document.body.appendChild(LOCATION_CONTAINER_DIV).className = 'location-page'
    LOCATION_CONTAINER_DIV.innerHTML = "LOCATION PAGE"

    return LOCATION_CONTAINER_DIV
}