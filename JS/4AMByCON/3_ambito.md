[JS](../indice.md)

En JavaScript, el **ámbito** (scope) determina **dónde está disponible una variable** dentro del programa. Comprenderlo es clave para evitar errores y escribir código mantenible, igual que en un proyecto de clase cada alumno tiene un “espacio de responsabilidad” bien definido.

Aquí tienes los cuatro ámbitos principales explicados de forma clara y con ejemplos.

---

## **1. Ámbito global**

Las variables declaradas en el ámbito global están **disponibles en cualquier parte** del programa.

```javascript
let nombre = "Ana"; // variable global

function saludar() {
    console.log("Hola " + nombre);
}

saludar(); // funciona
console.log(nombre); // también funciona
```

**Cuándo se usa:** cuando un valor se necesita en todo el programa.
**Precaución:** abusar de variables globales hace el código difícil de controlar.

---

## **2. Ámbito de función**

Las variables declaradas **dentro de una función** solo existen dentro de esa función.

```javascript
function calcular() {
    let resultado = 42; // ámbito de función
    console.log(resultado);
}

calcular();
console.log(resultado); // ❌ Error: no existe fuera
```

**Idea clave:** cada función es como un “pequeño mundo cerrado”.

---

## **3. Ámbito de bloque**

Los bloques (delimitados por `{ }`) crean su propio ámbito **cuando usas `let` o `const`**.

```javascript
if (true) {
    let mensaje = "Hola"; // ámbito de bloque
    const numero = 10;
}

console.log(mensaje); // ❌ Error
console.log(numero);  // ❌ Error
```

**Importante:**

* `let` y `const` → respetan el ámbito de bloque.
* `var` → **no** respeta el ámbito de bloque (por eso se recomienda evitarlo).

Ejemplo ilustrativo:

```javascript
for (let i = 0; i < 3; i++) {
    console.log("Dentro:", i);
}

console.log("Fuera:", i); // ❌ Error
```

---

## **4. Ámbito de módulo**

En JavaScript moderno (ES Modules), cada archivo `.js` es un **módulo**, y las variables definidas en él **no son globales**, sino locales al módulo.

```javascript
// archivo: util.js
let contador = 0; // ámbito de módulo

export function incrementar() {
    contador++;
    return contador;
}
```

```javascript
// archivo: app.js
import { incrementar } from "./util.js";

console.log(incrementar());
```

**Ventaja:**
Los módulos aíslan su contenido, evitando conflictos entre archivos. Dos módulos distintos pueden tener variables llamadas igual sin molestarse entre ellas.

---

## **Resumen visual**

| Tipo de ámbito | Dónde vive                        | Accesible desde                          |
| -------------- | --------------------------------- | ---------------------------------------- |
| **Global**     | Fuera de funciones/módulos        | Todo el programa                         |
| **Función**    | Dentro de una función             | Solo esa función                         |
| **Bloque**     | Dentro de `{ }` con `let`/`const` | Solo ese bloque                          |
| **Módulo**     | Cada archivo `.js`                | Solo dentro del archivo (salvo `export`) |

---

Estos cuatro niveles permiten organizar el código igual que organizamos un proyecto en clase: lo global para lo compartido, lo de función para tareas concretas, lo de bloque para decisiones internas y los módulos para dividir y ordenar el trabajo.
