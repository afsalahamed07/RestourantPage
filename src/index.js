import "./utils/reset.scss"
import "./style.scss";
import homeTemplate from "./template/home.html"

const content = document.querySelector("#content");
content.innerHTML = homeTemplate;
