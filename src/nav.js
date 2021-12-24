import {makeDiv as div} from "./utils/create-div";
import "./nav.scss"

let navItems = ['Honey Bar', 'Home', 'Menu', 'Contact Us'];

const nav = document.querySelector("nav");
const navContent = div("nav-content");
nav.appendChild(navContent);

navItems.forEach(element => {
    let itemDiv = div("item");
    itemDiv.textContent = element;

    navContent.appendChild(itemDiv);
});