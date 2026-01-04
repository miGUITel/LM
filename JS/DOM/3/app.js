// Selección del contenedor
const lista = document.querySelector("#listaAvisos");

// Botones
const btnCrear = document.querySelector("#btnCrear");
const btnEliminar = document.querySelector("#btnEliminar");

let contador = 1;

btnCrear.addEventListener("click", () => {
  // 1. Crear el elemento
  const li = document.createElement("li");

  // 2. Darle contenido
  li.textContent = `Aviso creado con JavaScript #${contador}`;
  contador++;

  // 3. Insertarlo en el DOM
  lista.appendChild(li);
});

btnEliminar.addEventListener("click", () => {
  // Seleccionamos el último aviso
  const ultimo = lista.querySelector("li:last-child");

  if (ultimo) {
    // 4. Eliminar del DOM
    ultimo.remove();
  }
});