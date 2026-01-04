// Selección de elementos
const refranElemento = document.querySelector("#refran");
const contadorElemento = document.querySelector("#contador");
const boton = document.querySelector("#btnCambiar");

// Lista de refranes
const refranes = [
  "A quien madruga, Dios le ayuda.",
  "Más vale tarde que nunca.",
  "No por mucho madrugar amanece más temprano.",
  "En casa de herrero, cuchillo de palo.",
  "Camarón que se duerme se lo lleva la corriente."
];

let indice = 0;

boton.addEventListener("click", () => {
  // Calculamos el siguiente refrán
  indice++;
  if (indice >= refranes.length) {
    indice = 0;
  }

  // Modificamos el contenido del DOM
  refranElemento.textContent = refranes[indice];
  contadorElemento.textContent = `Refrán ${indice + 1}`;
});