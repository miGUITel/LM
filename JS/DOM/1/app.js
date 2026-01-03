// Selección por ID
const titulo = document.getElementById("titulo");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

// Selección por selector CSS
const subtitulo = document.querySelector(".subtitulo");

// Botones (selección por ID)
const btnCambiarTexto = document.getElementById("btnCambiarTexto");
const btnCrear = document.getElementById("btnCrear");
const btnEliminarUltimo = document.getElementById("btnEliminarUltimo");

let contador = 1;

btnCambiarTexto.addEventListener("click", () => {
  // Modificamos el DOM: texto de elementos existentes
  titulo.textContent = "El DOM ha sido modificado por JavaScript";
  subtitulo.textContent = "Fíjate: no hemos tocado el HTML en disco, solo el DOM en memoria.";
  estado.textContent = "Estado: texto actualizado";
});

btnCrear.addEventListener("click", () => {
  // Creamos un elemento nuevo
  const li = document.createElement("li");
  li.textContent = `Elemento creado con JS #${contador}`;
  contador++;

  // Lo insertamos en el DOM
  lista.appendChild(li);

  estado.textContent = "Estado: elemento creado y añadido a la lista";
});

btnEliminarUltimo.addEventListener("click", () => {
  // Eliminamos el último elemento de la lista (si existe)
  const ultimo = lista.querySelector("li:last-child");

  if (ultimo) {
    ultimo.remove();
    estado.textContent = "Estado: último elemento eliminado";
  } else {
    estado.textContent = "Estado: no hay elementos para eliminar";
  }
});