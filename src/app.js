import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const cartasPalos = ["♦", "♥", "♠", "♣"];
  const numeroCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  function signoRamdon(lista) {
    let elementoAleatorio = Math.floor(Math.random() * lista.length);
    return lista[elementoAleatorio]
  }


  let cartaHeader = document.querySelector("#header")
  let cartasPalosRamdon = signoRamdon(cartasPalos)
  cartaHeader.textContent = cartasPalosRamdon

  let cartabody = document.querySelector("#body")
  let numeroCartaRamdon = signoRamdon(numeroCarta)
  cartabody.textContent = numeroCartaRamdon

  let cartaFooter = document.querySelector("#footer")
  cartaFooter.textContent = cartasPalosRamdon

  if (cartasPalosRamdon == "♥" || cartasPalosRamdon == "♦") {
    cartaHeader.style.color = "red";
    cartaFooter.style.color = "red";
  }

  function refrescarPagina() {
    window.location.reload();
  }
  document.querySelector("#btn").addEventListener("click", refrescarPagina);

  function cambiarTamañoCarta() {
    let iHeight = document.querySelector("#i-height").value;
    let iWidth = document.querySelector("#i-width").value;

  if (iHeight) {
    carta.style.height = iHeight + "px";
  }
  if (iWidth) {
    carta.style.width = iWidth + "px";
  }
  }
  this.document.querySelector("#i-height").addEventListener("input", cambiarTamañoCarta);
  this.document.querySelector("#i-width").addEventListener("input", cambiarTamañoCarta);
}