import {makeDiv as div} from "../utils/create-div";
import {makeList as li} from "../utils/create-list";
import "../sytle/nav.scss"

let navItems = ['Honey Bar', 'Home', 'Menu', 'Contact Us'];

const nav = document.querySelector("nav");
const navContent = div("nav-content");
nav.appendChild(navContent);

navItems.forEach(element => {
    let item = li("item-nav");

    if (element === "Home") item.setAttribute("id", "home");
    if (element === "Menu") item.setAttribute("id", "menu");
    if (element === "Contact Us") item.setAttribute("id", "contact");

    item.textContent = element;

    navContent.appendChild(item);
});