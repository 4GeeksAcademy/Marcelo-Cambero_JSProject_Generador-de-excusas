/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function randomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length); // En randomIndex guardamos un numero entero aleatorio entre 0 y la ultima posicion de array
  return array[randomIndex]; // Me devuelve un elemento aleatorio de array
}

const htmlTag = document.getElementById("excuse1"); // Si hicieramos un console.log de (htmlTag) tendriamos <h1 id="excuse1" class="mt-5">Hello Rigo!</h1>

window.onload = function() {
  //write your code here
  let excuse =
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when);
  +htmlTag.innerHTML = excuse; //innerHTML = cambia el contenido de una etiqueta HTML
};
