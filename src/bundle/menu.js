import "../sytle/menu.scss";
import {data} from "../data/items.js";
import {makeDiv} from "../utils/create-div";

const menu = document.querySelector("#menu");
const content = document.querySelector("#content");
const div = makeDiv();
div.setAttribute("id", "menu-container")


function creatMenu(name, price, img, det) {
    return `<div class="item"> 
            <img src="${img}" alt="${name} image">
            <div class="detail-div">
                <h3>${name}</h3>
                <p class="detail-p">${det}</p>
                <div class="price-div">
                <p>cost: </p>
                <p><span>&#36;</span>${price}</pkj> 
                </div> 
                
            </div>
            </div>`
}


menu.addEventListener("click", function () {


     div.innerHTML = data.map(x => creatMenu(x.name, x.price, x.img, x.det)).join('');

    content.innerHTML = "";// erasing existing content
    content.appendChild(div);

    /* make visited change in font color */
    menu.style.color = "black";
});
