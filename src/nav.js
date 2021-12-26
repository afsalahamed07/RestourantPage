import {makeDiv as div} from "./utils/create-div";
import {makeList as li} from "./utils/create-list";
import "./nav.scss"

let navItems = ['Honey Bar', 'Home', 'Menu', 'Contact Us'];

const nav = document.querySelector("nav");
const navContent = div("nav-content");
nav.appendChild(navContent);

navItems.forEach(element => {
    let item = li("item");

    if (element === "Home") item.setAttribute("id", "home")

    item.textContent = element;

    navContent.appendChild(item);
});