import homeTemplate from "./home.html";
import "./home.scss";

const home = document.querySelector("#home");
const content = document.querySelector("#content")

home.addEventListener("click", function () {
    content.innerHTML = homeTemplate;

    /* make visited change in font color */
    home.style.color = "black";
});

