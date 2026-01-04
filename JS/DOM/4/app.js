// Selección del aviso
const aviso = document.querySelector("#aviso");

// Botones
const btnNormal = document.querySelector("#btnNormal");
const btnDestacado = document.querySelector("#btnDestacado");
const btnError = document.querySelector("#btnError");

btnNormal.addEventListener("click", () => {
  // Quitamos todas las clases de estado
  aviso.classList.remove("destacado", "error");
});

btnDestacado.addEventListener("click", () => {
  aviso.classList.remove("error");
  aviso.classList.add("destacado");
});

btnError.addEventListener("click", () => {
  aviso.classList.remove("destacado");
  aviso.classList.add("error");
});