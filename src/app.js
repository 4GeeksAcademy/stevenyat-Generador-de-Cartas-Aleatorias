import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const cartasPalos = ["♦", "♥", "♠", "♣"];
  const numeroCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  function signoRamdon(lista) {
    let elementoAleatorio = Math.floor(Math.random() * lista.length);
    return lista[elementoAleatorio]
  };
  let nuevaCarta = () => {
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
    temporizador.textContent = 10;
  }
  const temporizador = this.document.querySelector("#temporizador");
  let temporizadorInterval = setInterval(() => {
    let tiempoActual = parseInt(temporizador.textContent);
    temporizador.textContent = tiempoActual - 1
    if (tiempoActual === 0) {
      nuevaCarta();
    }
  }, 1000);
  document.querySelector("#btn").addEventListener("click", nuevaCarta);
  const rangerWidth = this.document.querySelector("#rWidth");
  const rangerHeight = this.document.querySelector("#rHeight");
  const carta = this.document.querySelector("#carta");
  rangerWidth.addEventListener("input", function () {
    let nuevoTamaño = rangerWidth.value;
    carta.style.width = nuevoTamaño + "px";
    carta.style.fontSize = (nuevoTamaño / 350 * 16) + "px";
  })
  rangerHeight.addEventListener("input", function () {
    let nuevoTamaño = rangerHeight.value;
    carta.style.height = nuevoTamaño + "px";
    carta.style.fontSize = (nuevoTamaño / 530 * 16) + "px";
  })
}
