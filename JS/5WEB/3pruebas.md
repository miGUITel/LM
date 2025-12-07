- [Guía: Probando la Web API en la consola del navegador](#guía-probando-la-web-api-en-la-consola-del-navegador)
  - [0. Preparación: abrir la consola](#0-preparación-abrir-la-consola)
  - [1. Interfaz **Window**](#1-interfaz-window)
    - [1.1. `window.console.log`](#11-windowconsolelog)
    - [1.2. `window.alert`](#12-windowalert)
    - [1.3. `window.print`](#13-windowprint)
    - [1.4. `window.scrollTo`](#14-windowscrollto)
  - [2. Interfaz **Document**](#2-interfaz-document)
    - [2.1. `document.querySelector(...)`](#21-documentqueryselector)
    - [2.2. `element.remove()`](#22-elementremove)
    - [2.3. `document.querySelectorAll(...)`](#23-documentqueryselectorall)
    - [2.4. `window.getSelection()`](#24-windowgetselection)
    - [2.5. `location`](#25-location)
    - [2.6. `document.title`](#26-documenttitle)
    - [2.7. `document.cookie`](#27-documentcookie)
  - [3. Interfaz **Element**](#3-interfaz-element)
    - [3.1. `element.value`](#31-elementvalue)
    - [3.2. `element.innerText`](#32-elementinnertext)
    - [3.3. `element.innerHTML`](#33-elementinnerhtml)

# Guía: Probando la Web API en la consola del navegador

## 0. Preparación: abrir la consola

1. Abre una página web sencilla (puede ser cualquier web, pero mejor una tuya o un HTML de prueba).
2. Abre las herramientas de desarrollo:

   * **F12** o
   * **Ctrl+Shift+I** (Windows) / **Cmd+Option+I** (Mac).
3. Ve a la pestaña **Console**.

Todo lo que probemos se escribirá en esa consola.

> Nota: Muchas funciones pertenecen al objeto `window`, pero en la consola se pueden usar sin escribir `window.` delante. Aquí las usaremos con el prefijo para que vean que forman parte de la interfaz `Window`.

---

## 1. Interfaz **Window**

### 1.1. `window.console.log`

Prueba:

```js
window.console.log("Hola desde la consola");
```

Observa cómo aparece el mensaje en la consola.
Comenta con tus palabras qué utilidad tiene esto al programar.

---

### 1.2. `window.alert`

Prueba:

```js
window.alert("Este es un mensaje emergente");
```

Se abrirá una ventana emergente.
Haz que escriban otro mensaje con su nombre.

---

### 1.3. `window.print`

Prueba:

```js
window.print();
```

Aparecerá el diálogo de impresión de la página.
Comenta cuándo podría ser útil en una aplicación web.

---

### 1.4. `window.scrollTo`

Primero, asegúrate de que la página tenga suficiente contenido para poder hacer scroll.

Prueba:

```js
window.scrollTo(0, 0);      // Ir a la parte superior
```

```js
window.scrollTo(0, 500);    // Desplazarse 500 píxeles hacia abajo
```

Haz que prueben distintos valores y observen cómo se mueve la página.

---

## 2. Interfaz **Document**

Ahora vamos a trabajar con `document`, que representa la página HTML cargada.

Para que tenga más sentido, es buena idea probar en una página con algunos elementos identificables (por ejemplo):

```html
<h1 id="titulo">Bienvenido</h1>
<p class="parrafo">Este es un párrafo de prueba.</p>
<p class="parrafo">Otro párrafo más.</p>
<input id="nombre" value="Ana">
```

### 2.1. `document.querySelector(...)`

Selecciona **un solo elemento** (el primero que coincide con el selector CSS).

* Por id:

```js
document.querySelector("#titulo");
```

* Por clase:

```js
document.querySelector(".parrafo");
```

* Por etiqueta:

```js
document.querySelector("p");
```

Pídeles que guarden el resultado en una variable:

```js
const titulo = document.querySelector("#titulo");
titulo;
```

---

### 2.2. `element.remove()`

> Importante: `remove()` es un método del **elemento**, no de `document`.

1. Selecciona un párrafo:

   ```js
   const p = document.querySelector(".parrafo");
   ```
2. Elimínalo de la página:

   ```js
   p.remove();
   ```

Haz que eliminen distintos elementos y vean cómo desaparecen del documento.

---

### 2.3. `document.querySelectorAll(...)`

Devuelve **todos** los elementos que coinciden con el selector (un NodeList).

Prueba:

```js
const parrafos = document.querySelectorAll(".parrafo");
parrafos;
```

Accede a uno concreto:

```js
parrafos[0];
parrafos[1];
```

Recorre la lista (aunque no sepan bucles, se lo puedes dar hecho):

```js
parrafos.forEach(p => console.log(p.innerText));
```

---

### 2.4. `window.getSelection()`

Sirve para obtener el texto que el usuario ha seleccionado con el ratón.

1. Selecciona con el ratón una frase de la página.
2. En la consola, escribe:

   ```js
   window.getSelection().toString();
   ```

Observa que devuelve el texto seleccionado.

Haz que prueben a seleccionar cosas distintas y repetir la orden.

---

### 2.5. `location`

`location` es un objeto que representa la URL actual.

Prueba:

```js
window.location;
```

Algunas propiedades útiles:

```js
window.location.href;    // URL completa
window.location.host;    // dominio + puerto
window.location.pathname;// ruta dentro del sitio
```

Cámbiate de página (NO lo hagas si no quieres perder lo que tengas en la consola):

```js
// Esto cambia la página actual
// window.location.href = "https://www.google.com";
```

Comenta que esta acción recarga la página y se “pierde” el contexto de la consola.

---

### 2.6. `document.title`

Ver el título de la pestaña:

```js
document.title;
```

Cambiarlo:

```js
document.title = "Nuevo título desde JS";
```

Observa cómo cambia el texto que aparece en la pestaña del navegador.

---

### 2.7. `document.cookie`

Ver las cookies asociadas a la página:

```js
document.cookie;
```

Añadir una cookie sencilla (solo funcionará en páginas donde el navegador lo permita):

```js
document.cookie = "usuario=Miguel; path=/";
```

Vuelve a consultar:

```js
document.cookie;
```

Comenta que las cookies son pequeños textos que el navegador guarda para esa página (sesiones, preferencias, etc.).

---

## 3. Interfaz **Element**

Ahora vamos a modificar elementos concretos de la página con sus propiedades más habituales.

De nuevo, nos viene bien este HTML de ejemplo:

```html
<h1 id="titulo">Bienvenido</h1>
<p class="parrafo">Este es un párrafo de prueba.</p>
<input id="nombre" value="Ana">
```

### 3.1. `element.value`

La propiedad `value` se usa en inputs, textarea, select…

1. Selecciona el input:

   ```js
   const nombreInput = document.querySelector("#nombre");
   ```

2. Consulta su valor:

   ```js
   nombreInput.value;
   ```

3. Cambia el valor:

   ```js
   nombreInput.value = "Carlos";
   ```

Observa cómo cambia en el campo de texto de la página.

---

### 3.2. `element.innerText`

`innerText` es el **texto visible** dentro de un elemento.

1. Selecciona el título:

   ```js
   const titulo = document.querySelector("#titulo");
   ```

2. Mira su texto:

   ```js
   titulo.innerText;
   ```

3. Cambia el texto:

   ```js
   titulo.innerText = "Título cambiado desde la consola";
   ```

Comprueba que en la página se actualiza el contenido del `<h1>`.

---

### 3.3. `element.innerHTML`

`innerHTML` representa el contenido HTML interno del elemento (no solo texto).

1. Selecciona el primer párrafo:

   ```js
   const p = document.querySelector(".parrafo");
   ```

2. Ve su HTML interno:

   ```js
   p.innerHTML;
   ```

3. Cámbialo incluyendo etiquetas:

   ```js
   p.innerHTML = "<strong>Texto en negrita</strong> y <em>texto en cursiva</em>";
   ```

Observa cómo el navegador interpreta las etiquetas y cambia el formato.

> Aviso: usar `innerHTML` con contenido que viene del usuario puede ser peligroso (problemas de seguridad).