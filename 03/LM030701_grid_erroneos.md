Aquí tienes una **versión didáctica, clara y lista para entregar a tus alumnos**, explicando cada error de forma visual y sencilla. Está pensada para que puedas copiarla directamente a tu repositorio como guía.

---

# ❌ **Errores frecuentes al usar `grid-template-columns` y `grid-template-areas`**

En CSS Grid, la plantilla de columnas (`grid-template-columns`) y el mapa de zonas (`grid-template-areas`) deben encajar perfectamente.
Cada error que se muestra aquí es típico cuando uno empieza a experimentar con `grid`.

---

## 🚫 **1. Columnas que no coinciden con las áreas**

### Código incorrecto

```css
grid-template-columns: 1fr 1fr 1fr;

grid-template-areas:
  "header header"
  "main sidebar"
  "footer footer";
```

### Por qué es un error

* El grid tiene **3 columnas**, pero las áreas solo dibujan **2**.
* El navegador intenta corregirlo, pero el resultado es impredecible.

📌 **Regla:** todas las filas deben tener el mismo número de columnas que definas en `grid-template-columns`.

---

## 🚫 **2. Cada fila tiene un número distinto de áreas**

### Código incorrecto

```css
grid-template-columns: 1fr 1fr 1fr;

grid-template-areas:
  "header header header"
  "main sidebar extra footer";   /* 4 columnas */
```

### Por qué es un error

* La primera fila tiene **3 columnas**.
* La segunda tiene **4**.

📌 **Regla:** todas las filas deben tener la misma cantidad de nombres.

---

## 🚫 **3. Área que no existe en el HTML**

### Código incorrecto

```css
grid-template-columns: 2fr 1fr;

grid-template-areas:
  "main phantom"
  "footer footer";
```

### Por qué es un error

* `"phantom"` no corresponde a ningún elemento que tenga `grid-area: phantom;`.

📌 **Regla:** los nombres del área deben coincidir con los selectores definidos.

---

## 🚫 **4. Un área aparece separada y no forma un rectángulo**

### Código incorrecto

```css
grid-template-columns: 1fr 1fr 1fr;

grid-template-areas:
  "header header header"
  "main   sidebar main"
  "footer footer footer";
```

### Por qué es un error

* `"main"` aparece en dos columnas separadas dentro de la misma fila.
* CSS Grid exige que cada área sea un **bloque continuo**.

📌 **Regla:** un área debe ocupar un rectángulo sin huecos.

---

## 🚫 **5. Áreas colocadas en diagonal**

### Código incorrecto

```css
grid-template-columns: 1fr 1fr;

grid-template-areas:
  "main  sidebar"
  "sidebar main";
```

### Por qué es un error

* El área `"main"` ocupa dos posiciones que no son rectangulares.
* Queda en forma de “L” o diagonal.

📌 **Regla:** una misma zona no puede aparecer en posiciones no contiguas.

---

## 🚫 **6. Nombres de áreas no válidos**

### Código incorrecto

```css
grid-template-columns: 1fr 2fr;

grid-template-areas:
  "header ."
  ". side.bar";
```

### Por qué es un error

* `side.bar` no es un nombre válido → contiene un punto.
* El punto (`.`) solo puede usarse para “celda vacía”.

📌 **Regla:** los nombres deben ser palabras simples sin caracteres especiales.

---

## 🚫 **7. Fila con menos celdas que las demás**

### Código incorrecto

```css
grid-template-columns: 1fr 1fr 1fr;

grid-template-areas:
  "header header header"
  "main ."
  "footer footer footer";
```

### Por qué es un error

* La segunda fila solo tiene **2 tokens**, pero debería tener **3**.

📌 **Regla:** cada fila debe tener exactamente tantas áreas como columnas existan.

---

## 🚫 **8. Espacios extra o tokens sueltos**

### Código incorrecto

```css
grid-template-columns: 1fr 1fr;

grid-template-areas:
  "header  header"
  "main    sidebar "
  "footer footer";
```

### Por qué es un error

* El espacio final en `"sidebar "` genera un token vacío.
* Produce áreas invisibles o columnas fantasma.

📌 **Regla:** no debe quedar ningún espacio suelto dentro de las comillas.

---

# ✅ **Conclusión para el alumno**

Cuando uses `grid-template-areas`:

1. Las columnas definidas deben coincidir con el número de palabras en cada fila.
2. Todas las filas deben tener el mismo número de áreas.
3. Los nombres deben ser válidos y existir en el CSS.
4. Cada área debe formar un bloque rectangular continuo.
5. Los puntos (`.`) solo se usan como zonas vacías.
6. No dejes espacios extra dentro de cada fila.

---

Si quieres, puedo preparar una **versión en HTML + CSS completa** de esta guía, lista para ser visualizada directamente en el navegador por tus alumnos. También puedo generar **ejercicios autocorregibles** basados en estos errores.
