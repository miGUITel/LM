# Guía de práctica: Eventos básicos del DOM en la consola del navegador

## 0. Preparación

1. Abre un archivo HTML con el siguiente contenido (puedes copiarlo tal cual en un fichero llamado `eventos.html`):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Laboratorio de eventos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    #caja {
      width: 200px;
      height: 100px;
      border: 2px solid black;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .espacio-scroll {
      height: 1500px; /* Para probar scroll */
      background: linear-gradient(white, lightgray);
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <h1 id="titulo">Laboratorio de eventos</h1>

  <button id="btnClick">Botón de clic</button>
  <button id="btnContext">Botón menú contextual</button>

  <div id="caja">Pasa el ratón por aquí</div>

  <form id="formulario">
    <h2>Formulario de prueba</h2>
    <label>
      Nombre:
      <input type="text" id="inputNombre" placeholder="Escribe tu nombre">
    </label>
    <button type="submit">Enviar</button>
  </form>

  <div class="espacio-scroll">
    Haz scroll hacia abajo y hacia arriba para probar el evento scroll.
  </div>

</body>
</html>
```

2. Abre la página en el navegador.
3. Pulsa **F12** y ve a la pestaña **Console**.
4. Copia y pega allí los fragmentos de código cuando se pidan.

---

# 1. Eventos del ratón

## 1.1. Evento **click**

**Qué hace:** se dispara al hacer un clic normal (botón izquierdo).

**Código para probar:**

```js
const btnClick = document.querySelector("#btnClick");

btnClick.addEventListener("click", () => {
  console.log("Has hecho clic en el botón");
  alert("CLICK detectado");
});
```

**Prueba:** Pulsa el botón “Botón de clic”.

---

## 1.2. Evento **dblclick**

**Qué hace:** se dispara al hacer un doble clic rápido.

```js
const caja = document.querySelector("#caja");

caja.addEventListener("dblclick", () => {
  console.log("Has hecho doble clic en la caja");
  caja.innerText = "Doble clic detectado";
});
```

**Prueba:** Haz doble clic dentro de la caja.

---

## 1.3. Evento **contextmenu**

**Qué hace:** se dispara al abrirse el menú contextual (clic derecho).
**Nota:** `preventDefault()` evita que salga el menú del navegador.

```js
const btnContext = document.querySelector("#btnContext");

btnContext.addEventListener("contextmenu", (evento) => {
  evento.preventDefault();
  console.log("Menú contextual abierto en el botón");
  alert("Botón derecho detectado");
});
```

**Prueba:** Botón derecho sobre “Botón menú contextual”.

---

## 1.4. Evento **mouseenter**

**Qué hace:** se dispara cuando el ratón entra en un elemento.

```js
caja.addEventListener("mouseenter", () => {
  console.log("El ratón ha entrado en la caja");
  caja.style.backgroundColor = "lightblue";
});

caja.addEventListener("mouseleave", () => {
  console.log("El ratón ha salido de la caja");
  caja.style.backgroundColor = "";
});
```

**Prueba:** Mueve el ratón dentro y fuera de la caja.

---

# 2. Eventos del teclado

Se escuchan en **document**, así funcionan en toda la página.

## 2.1. Evento **keydown**

**Qué hace:** se dispara al pulsar una tecla.

```js
document.addEventListener("keydown", (evento) => {
  console.log("Tecla pulsada:", evento.key);
});
```

**Prueba:** Pulsa cualquier tecla (letra, número, flechas…).

---

## 2.2. Evento **keyup**

**Qué hace:** se dispara al soltar una tecla.

```js
document.addEventListener("keyup", (evento) => {
  console.log("Tecla soltada:", evento.key);
});
```

**Prueba:** Mantén pulsada una tecla y suéltala.

---

# 3. Eventos de formulario

## 3.1. Evento **focus**

**Qué hace:** se dispara cuando el cursor entra en un input.

```js
const inputNombre = document.querySelector("#inputNombre");

inputNombre.addEventListener("focus", () => {
  console.log("El input ha recibido el foco");
  inputNombre.style.borderColor = "green";
});
```

**Prueba:** Haz clic dentro del campo de texto.

---

## 3.2. Evento **blur**

**Qué hace:** se dispara cuando el cursor sale del input.

```js
inputNombre.addEventListener("blur", () => {
  console.log("El input ha perdido el foco");
  inputNombre.style.borderColor = "";
});
```

**Prueba:** Clic dentro del input → luego clic fuera.

---

## 3.3. Evento **submit**

**Qué hace:** se dispara al enviar un formulario.

```js
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita recargar la página
  console.log("Formulario enviado");
  console.log("Nombre introducido:", inputNombre.value);
  alert("Formulario enviado: " + inputNombre.value);
});
```

**Prueba:** Escribe un nombre y pulsa “Enviar”.

---

# 4. Evento de desplazamiento

## 4.1. Evento **scroll**

**Qué hace:** se dispara cuando se hace scroll en la página.

```js
window.addEventListener("scroll", () => {
  console.log("Posición del scroll Y:", window.scrollY);
});
```

**Prueba:** Baja y sube en la página.

---

### Opcional: cambiar el color del título según el scroll

```js
const zonaScroll = document.querySelector(".espacio-scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    zonaScroll.style.color = "red";
  } else {
    zonaScroll.style.color = "black";
  }
});

```

Observa cómo cambia el color del elemento cuando pasas cierta altura.