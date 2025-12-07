## 🔹 Funciones autoinvocadas (IIFE)

Una **función autoinvocada** o **IIFE** (*Immediately Invoked Function Expression*) es una función que **se declara y ejecuta inmediatamente**.
No necesita nombre, y se utiliza sobre todo para **crear un ámbito propio** o **ejecutar código de inicialización** sin dejar variables en el ámbito global.

---

### 🧠 Cómo funciona

1. Se **declara una función anónima** (sin nombre).
2. Se **encierra entre paréntesis** para que JavaScript la interprete como una *expresión*.
3. Se **invoca al instante** añadiendo otro par de paréntesis con los argumentos.

---

### 🧩 Ejemplo básico

```javascript
(function (nombre, año) {
  console.log(nombre + " - " + año);
})("Lucía", 2025);
```

* `(function (nombre, año) { ... })` define la función.
* Los paréntesis externos `(...)` hacen que se trate como una *expresión ejecutable*.
* `("Lucía", 2025)` ejecuta la función pasando los valores a los parámetros.

📤 **Salida:**

```
Lucía - 2025
```

---

### 🔁 Variante con operador lógico (`!`)

También se puede forzar la interpretación como expresión con otros operadores, por ejemplo:

```javascript
!function (nombre, año) {
  console.log(nombre + " - " + año);
}("Lucía", 2025);
```

El resultado es el mismo. El `!` no afecta al comportamiento del código, solo permite que JavaScript lo considere una expresión válida.

---

### 🌍 Ejemplo más realista

```javascript
(function (usuario, mensaje) {
  console.log("Bienvenido/a " + usuario + ". " + mensaje);
})("Sofía", "Tu sesión se ha iniciado correctamente.");
```

📤 **Salida:**

```
Bienvenido/a Sofía. Tu sesión se ha iniciado correctamente.
```

---

### 💡 En resumen

* Una **IIFE** se ejecuta justo en el momento en que se define.
* Los **parámetros se pasan normalmente**, igual que en cualquier otra función.
* Su utilidad principal es **aislar variables y ejecutar código sin contaminar el ámbito global**.

