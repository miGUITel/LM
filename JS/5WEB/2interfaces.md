- [**1. Window**](#1-window)
- [**2. Document**](#2-document)
- [**3. Event**](#3-event)
- [**4. Element**](#4-element)
- [Resumen](#resumen)

---

## **1. Window**

`window` es la **interfaz de nivel más alto**. Representa la ventana o pestaña del navegador y actúa como el **entorno global** de JavaScript en una página web.
Incluye métodos y propiedades para tareas muy variadas:

* Controlar ventanas y temporizadores: `alert()`, `setTimeout()`, `setInterval()`
* Acceder a Web APIs: `fetch`, `localStorage`
* Acceder a otras interfaces clave: `window.document`, `window.location`, `window.history`
* Usar la consola: `console.log()`

Ejemplo:

```javascript
console.log(window.innerWidth);  // ancho de la ventana
```

---

## **2. Document**

`document` representa el **documento HTML cargado** en el navegador. Es la puerta de entrada al DOM y permite leer o modificar casi cualquier parte de la página.

Algunas de sus funciones más frecuentes:

* Seleccionar elementos: `getElementById`, `querySelector`
* Crear nuevos nodos: `createElement`
* Modificar el contenido: `document.body.textContent`, `innerHTML`
* Gestionar el árbol del DOM

Ejemplo:

```javascript
const titulo = document.getElementById("principal");
titulo.textContent = "Nuevo título";
```

---

## **3. Event**

La interfaz `Event` describe la **información que viaja con un evento**, como un clic, una pulsación de tecla o un desplazamiento del ratón. Cada vez que ocurre un evento, el navegador crea un objeto basado en esta interfaz.

Incluye datos como:

* El tipo de evento (`"click"`, `"keydown"`, etc.)
* El elemento que lo ha originado (`event.target`)
* Comportamientos del flujo de eventos (`stopPropagation()`, `preventDefault()`)

Ejemplo:

```javascript
document.addEventListener("click", function(event) {
    console.log("Has hecho clic en:", event.target);
});
```

---

## **4. Element**

`Element` representa **cualquier etiqueta HTML** del documento (un párrafo, un div, un botón…).
A través de esta interfaz, JavaScript puede interactuar con los elementos de la página:

* Cambiar atributos: `element.setAttribute()`
* Modificar clases CSS: `classList.add()`, `classList.remove()`
* Ajustar estilos: `element.style.color = "red"`
* Trabajar con hijos y nodos hermanos del DOM

Ejemplo:

```javascript
const boton = document.querySelector("button");
boton.style.backgroundColor = "orange";
```

---

## Resumen

| Interfaz     | Representa                               | Para qué sirve                                    |
| ------------ | ---------------------------------------- | ------------------------------------------------- |
| **Window**   | La ventana/pestaña del navegador         | Funciones globales, temporizadores, acceso a APIs |
| **Document** | El documento HTML completo               | Lectura y modificación del DOM                    |
| **Event**    | Un evento generado por usuario o sistema | Saber qué ocurrió y reaccionar a ello             |
| **Element**  | Un elemento HTML concreto                | Cambiar apariencia, contenido y atributos         |

Estas interfaces son la base de la interacción entre JavaScript y el navegador, y entenderlas ayuda a tus alumnos a comprender cómo cobran vida las páginas web.
