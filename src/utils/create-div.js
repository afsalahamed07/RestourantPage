export function makeDiv(className) {
    const div = document.createElement('div');

    if (className) div.setAttribute("class", className);

    return div; 
}