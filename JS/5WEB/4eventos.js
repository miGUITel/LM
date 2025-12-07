document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  // 1. EVENTOS DEL RATÓN
  // ===========================

  // CLICK
  const btnClick = document.querySelector("#btnClick");

  btnClick.addEventListener("click", () => {
    console.log("Has hecho clic en el botón");
    alert("CLICK detectado");
  });


  // DBLCLICK
  const caja = document.querySelector("#caja");

  caja.addEventListener("dblclick", () => {
    console.log("Has hecho doble clic en la caja");
    caja.innerText = "Doble clic detectado";
  });


  // CONTEXTMENU (clic derecho)
  const btnContext = document.querySelector("#btnContext");

  btnContext.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
    console.log("Clic derecho detectado");
    alert("Has hecho clic derecho en el botón");
  });


  // MOUSEENTER y MOUSELEAVE
  caja.addEventListener("mouseenter", () => {
    console.log("Ratón dentro de la caja");
    caja.style.backgroundColor = "lightblue";
  });

  caja.addEventListener("mouseleave", () => {
    console.log("Ratón fuera de la caja");
    caja.style.backgroundColor = "";
  });



  // ===========================
  // 2. EVENTOS DEL TECLADO
  // ===========================

  document.addEventListener("keydown", (evento) => {
    console.log("Tecla pulsada:", evento.key);
  });

  document.addEventListener("keyup", (evento) => {
    console.log("Tecla soltada:", evento.key);
  });



  // ===========================
  // 3. EVENTOS DE FORMULARIO
  // ===========================

  const inputNombre = document.querySelector("#inputNombre");
  const formulario = document.querySelector("#formulario");

  // FOCUS
  inputNombre.addEventListener("focus", () => {
    console.log("Input con foco");
    inputNombre.style.borderColor = "green";
  });

  // BLUR
  inputNombre.addEventListener("blur", () => {
    console.log("Input sin foco");
    inputNombre.style.borderColor = "";
  });

  // SUBMIT
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("Formulario enviado");
    console.log("Nombre:", inputNombre.value);
    alert("Formulario enviado: " + inputNombre.value);
  });



  // ===========================
  // 4. EVENTO DE SCROLL
  // ===========================

  const zonaScroll = document.querySelector(".espacio-scroll");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      zonaScroll.style.color = "red";
    } else {
      zonaScroll.style.color = "black";
    }
  });

});
