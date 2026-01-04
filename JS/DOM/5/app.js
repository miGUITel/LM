// CLICK
const btnClick = document.querySelector("#btnClick");
const mensajeClick = document.querySelector("#mensajeClick");

btnClick.addEventListener("click", () => {
  mensajeClick.textContent = "Has hecho click en el botón";
});

// MOUSEOVER / MOUSEOUT
const caja = document.querySelector("#caja");

caja.addEventListener("mouseover", () => {
  caja.classList.add("resaltado");
});

caja.addEventListener("mouseout", () => {
  caja.classList.remove("resaltado");
});

// SUBMIT
const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const mensajeForm = document.querySelector("#mensajeForm");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  mensajeForm.textContent = `Formulario enviado. Hola, ${nombreInput.value}`;
});