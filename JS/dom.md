- [**Sesión 1 — JavaScript en la web y el DOM**](#sesión-1--javascript-en-la-web-y-el-dom)
- [**Sesión 2 — Selección y modificación de elementos**](#sesión-2--selección-y-modificación-de-elementos)
- [**Sesión 3 — Creación y eliminación de elementos**](#sesión-3--creación-y-eliminación-de-elementos)
- [**Sesión 4 — Modificación de estilos con JavaScript**](#sesión-4--modificación-de-estilos-con-javascript)
- [**Sesión 5 — Introducción a los eventos**](#sesión-5--introducción-a-los-eventos)
- [**Mapa final de relación con los criterios**](#mapa-final-de-relación-con-los-criterios)


## **[Sesión 1](./DOM/1/s1.md) — JavaScript en la web y el DOM**

**Objetivo conceptual:** entender qué es lo que realmente se modifica cuando usamos JavaScript.

Contenidos

* JavaScript como lenguaje de **comportamiento** en la web.
* Diferencia clara:

  * HTML → estructura
  * CSS → apariencia
  * JavaScript → cambios dinámicos
* Qué es el **DOM**:

  * El documento como árbol de nodos.
  * Elementos, texto y relaciones padre–hijo.
* El DOM como representación **en memoria**, no como el HTML original.
* Selección básica de elementos:

  * `document.getElementById()`
  * `document.querySelector()`
* Qué devuelve cada método (un elemento).
* Creación y eliminación de elementos:

  * `document.createElement()`
  * `appendChild()`
  * `remove()`

> Idea clave que deben interiorizar: *si puedo seleccionar un elemento, puedo modificarlo.*

---

## **[Sesión 2](./DOM/2/s2.md) — Selección y modificación de elementos**

**Objetivo conceptual:** localizar elementos y cambiar su contenido o atributos.

Contenidos

* Repaso breve del DOM y la selección.
* Selección de uno o varios elementos:

  * `querySelector()`
  * `querySelectorAll()`
* Qué es una `NodeList` (sin profundizar).
* Modificación de contenido:

  * `textContent`
  * `innerHTML` (uso controlado).
* Modificación de atributos:

  * `setAttribute()`
  * Cambios típicos: `src`, `href`, `value`, `alt`.

> Conexión con la realidad: cambiar textos, imágenes, enlaces o mensajes sin recargar la página.

---

## **[Sesión 3](./DOM/3/s3.md) — Creación y eliminación de elementos**

**Objetivo conceptual:** generar contenido dinámico y limpiar el documento.

Contenidos

* Creación de elementos desde JavaScript:

  * `createElement()`
  * Asignación de texto y atributos.
* Inserción en el DOM:

  * `appendChild()`
  * Dónde se insertan los nuevos elementos.
* Eliminación de elementos:

  * `remove()`
* Diferencia entre:

  * Ocultar un elemento.
  * Eliminar un elemento.

> Ejemplos cotidianos: listas dinámicas, mensajes que aparecen y desaparecen, resultados generados.

---

## **[Sesión 4](./DOM/4/s4.md) — Modificación de estilos con JavaScript**

**Objetivo conceptual:** cambiar el aspecto visual en función del estado.

Contenidos

* Relación JavaScript ↔ CSS.
* Modificación directa de estilos:

  * `element.style`
  * Propiedades en camelCase.
* Uso de clases CSS (recomendado):

  * `classList.add()`
  * `classList.remove()`
  * `classList.toggle()`
* Ventajas de usar clases frente a estilos en línea.

> Idea importante: JavaScript decide **cuándo**, CSS decide **cómo** se ve.

---

## **[Sesión 5](./DOM/5/s5.md) — Introducción a los eventos**

**Objetivo conceptual:** responder a acciones del usuario.

Contenidos

* Qué es un evento.
* El evento `click` como punto de partida.
* Asociar eventos a elementos:

  * `addEventListener("click", ...)`
* Relación evento → función → modificación del DOM.
* Uso de botones para:

  * Modificar texto.
  * Crear elementos.
  * Eliminar elementos.
  * Cambiar estilos.

> En la vida real: botones que muestran información, cambian colores, añaden o quitan contenido.

---

## **Mapa final de relación con los criterios**

* **CE3.c** → selección de elementos (`getElementById`, `querySelector`)
* **CE3.d** → creación y modificación (`createElement`, `textContent`, atributos)
* **CE3.e** → eliminación (`remove`)
* **CE3.f** → modificación de estilos (`style`, `classList`)
* **Eventos** → integración de todos los anteriores

