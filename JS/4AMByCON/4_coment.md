[JS](../indice.md)

- [**1. Comentarios de línea**](#1-comentarios-de-línea)
- [**2. Comentarios de bloque**](#2-comentarios-de-bloque)
- [- Cuándo usarlos](#--cuándo-usarlos)
- [**3. Comentario Hashbang (Shebang)**](#3-comentario-hashbang-shebang)
  - [Ejemplo completo](#ejemplo-completo)
- [Tipos de comentarios en JavaScript (resumen)](#tipos-de-comentarios-en-javascript-resumen)

En JavaScript, los **comentarios** sirven para añadir notas dentro del código que **no se ejecutan**. Son una herramienta sencilla pero muy útil para aclarar la intención del programa, facilitar su mantenimiento y ayudar a que otros compañeros comprendan lo que has hecho.

---

## **1. Comentarios de línea**

Se escriben con `//` y ocupan solo una línea.

```javascript
let precio = 20; // precio base del producto
```

Son ideales para aclaraciones breves o para indicar pasos concretos dentro de una función.

---

## **2. Comentarios de bloque**

Se escriben entre `/* ... */` y pueden tener varias líneas.

```javascript
/*
Calcula el total aplicando IVA.
Si en el futuro cambia el porcentaje,
solo habrá que modificar la constante IVA.
*/
function calcularTotal(precio) {
    const IVA = 0.21;
    return precio + precio * IVA;
}
```

Se utilizan para explicar partes complejas, documentar funciones o dejar notas más elaboradas.

---

## - Cuándo usarlos

* Para explicar **por qué** haces algo, no tanto el **qué** (el código ya debería ser claro).
* Para orientar a otros compañeros o a tu “yo del futuro”.
* Para documentar funciones o decisiones importantes.

Son pequeñas ayudas que mejoran mucho la calidad del código, igual que en un proyecto de clase una buena anotación evita confusiones cuando vuelves a revisarlo días después.

---

## **3. Comentario Hashbang (Shebang)**

Se escribe como:

```javascript
#!/usr/bin/env node
```

Este comentario **solo funciona si aparece en la primera línea del archivo** y permite ejecutar el script directamente desde la terminal como si fuera un programa:

```bash
chmod +x script.js
./script.js
```

El sistema operativo, al ver la línea hashbang, entiende que debe ejecutar el archivo usando Node.

### Ejemplo completo

```javascript
#!/usr/bin/env node

console.log("Ejecutando script con Node");
```

---

## Tipos de comentarios en JavaScript (resumen)

| Tipo     | Sintaxis              | Uso                                       |
| -------- | --------------------- | ----------------------------------------- |
| Línea    | `// comentario`       | Notas breves                              |
| Bloque   | `/* comentario */`    | Explicaciones largas                      |
| Hashbang | `#!/usr/bin/env node` | Indica el intérprete al sistema operativo |

---

El hashbang es poco común en proyectos front-end, pero muy útil para tus alumnos cuando preparan pequeños **scripts de Node.js** que quieren ejecutar como herramientas de consola.
