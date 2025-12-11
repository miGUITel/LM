[JS](../indice.md)

# **Los bucles en JavaScript**

Los bucles permiten **repetir acciones** sin necesidad de escribir el mismo código varias veces. Son fundamentales para automatizar tareas y procesar listas de datos, igual que cuando tus alumnos repasan un conjunto de ejercicios: *uno tras otro, siguiendo un orden*.

En JavaScript existen varios tipos de bucles, pero en este nivel aprenderemos los dos más prácticos y habituales: **`for`** y **`forEach`**.

---

## **1. Bucle `for` (recorrido controlado)**

El bucle `for` es ideal cuando sabemos **cuántas veces** queremos repetir algo, o cuando necesitamos usar un **índice** (0, 1, 2, …) para acceder a los elementos.

### **Estructura**

```javascript
for (inicialización; condición; actualización) {
    // Código que se repite
}
```

### **Ejemplo**

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Vuelta número:", i);
}
```

¿Qué ocurre?

1. Comenzamos con `i = 0`.
2. Se ejecuta el bloque si `i < 5`.
3. Al terminar cada vuelta, `i` aumenta en 1.
4. El bucle se detiene cuando `i` llega a 5.

Es como cuando un alumno dice: *“Voy a hacer 5 flexiones; cuento del 0 al 4, y paro.”*

---

## **2. `for` aplicado a arrays**

Cuando tenemos una lista de elementos, solemos querer recorrerla posición a posición:

```javascript
let alumnos = ["Ana", "Miguel", "Sara"];

for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}
```

Aquí usamos el índice `i` para acceder a cada nombre: `alumnos[0]`, `alumnos[1]`, etc.

---

## **3. Bucle `forEach` (recorrido sin índice explícito)**

`forEach` es un método propio de los arrays que permite recorrer sus elementos **de forma más directa y legible**, sin preocuparnos del índice (aunque puede usarse si se necesita).

### **Ejemplo**

```javascript
let notas = [7, 5, 9];

notas.forEach(function(nota) {
    console.log("Nota:", nota);
});
```

A cada vuelta, la función recibe **un elemento de la lista**, y tú decides qué hacer con él.

Es similar a repartir tareas entre compañeros: *“coge cada ficha, una por una, y corrígela.”*

---

## **4. `forEach` con índice (opcional)**

Si queremos saber también la posición:

```javascript
let colores = ["rojo", "verde", "azul"];

colores.forEach(function(color, indice) {
    console.log(indice, "→", color);
});
```

---

## 📝 **¿Cuándo usar cada uno?**

| Objetivo                                                | Bucle recomendado |
| ------------------------------------------------------- | ----------------- |
| Necesito un **contador** o acceder con índices          | `for`             |
| Quiero recorrer una lista **de forma cómoda y legible** | `forEach`         |
| Sé cuántas veces debe repetirse una acción              | `for`             |
| Solo quiero procesar cada elemento de un array          | `forEach`         |

---

## ✔️ **Ejemplo comparado**

```javascript
let frutas = ["manzana", "pera", "kiwi"];

// Con for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Con forEach
frutas.forEach(fruta => console.log(fruta));
```

Ambas versiones hacen lo mismo, pero `forEach` resulta más limpia cuando solo necesitas iterar.

