import contactTemplate from "../template/contact.html";
import "../sytle/contact.scss";

const contact = document.querySelector("#contact");
const content = document.querySelector("#content");

contact.addEventListener("click", function () {
    content.innerHTML = contactTemplate;
})

