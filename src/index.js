// import './tailwind.css';
import "./style.scss";
// https://files.refurbed.com/pp/189_spa.png
// https://files.refurbed.com/pp/189_gol.png
// https://files.refurbed.com/pp/189_rot.png
// https://files.refurbed.com/pp/189_sil.png

//I choose to use the url for the images since I did not want to add statics files, in a normal flow I would have
// an assets folder where I would save all teh images

const event = "ontouchstart" in window ? "click" : "mouseover";

const image = document.querySelector(".card__img");
const whiteBtn = document.querySelector(".white");
const redBtn = document.querySelector(".red");
const goldBtn = document.querySelector(".gold");
const blackBtn = document.querySelector(".black");

function changeImage(color, btn) {
  btn.addEventListener(event, () => {
    image.src = `https://files.refurbed.com/pp/189_${color}.png`;
  });
}

changeImage("spa", blackBtn);
changeImage("gol", goldBtn);
changeImage("rot", redBtn);
changeImage("sil", whiteBtn);
