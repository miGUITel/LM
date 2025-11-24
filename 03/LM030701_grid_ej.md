Aquí tienes **ejemplos variados y distintos a los que ya usas**, mostrando **solo** las propiedades:

* `grid-template-columns`
* `grid-template-areas`

Cada uno propone un diseño diferente para que tus alumnos visualicen posibilidades diversas sin repetir tus esquemas.

---

# ⭐ Ejemplo 1: Diseño tipo *hero* con banner lateral

### `grid-template-columns`

```css
grid-template-columns: 2fr 1fr;
```

### `grid-template-areas`

```css
grid-template-areas:
  "header header"
  "main   sidebar"
  "footer sidebar";
```

---

# ⭐ Ejemplo 2: Cabecera centrada y contenido dividido en tres bloques

### `grid-template-columns`

```css
grid-template-columns: 1fr 2fr 1fr;
```

### `grid-template-areas`

```css
grid-template-areas:
  "header header header"
  "sidebar main extra"
  "footer footer footer";
```

---

# ⭐ Ejemplo 3: Composición asimétrica estilo revista

### `grid-template-columns`

```css
grid-template-columns: 3fr 1fr 2fr;
```

### `grid-template-areas`

```css
grid-template-areas:
  "header header header"
  "main   sidebar   extra"
  "main   sidebar   footer";
```

---

# ⭐ Ejemplo 4: Estructura de panel grande con dos zonas inferiores

### `grid-template-columns`

```css
grid-template-columns: 1fr 1fr;
```

### `grid-template-areas`

```css
grid-template-areas:
  "header header"
  "main   main"
  "sidebar footer";
```

---

# ⭐ Ejemplo 5: Layout en cuadrícula pura tipo dashboard

### `grid-template-columns`

```css
grid-template-columns: repeat(3, 1fr);
```

### `grid-template-areas`

```css
grid-template-areas:
  "header header header"
  "main   sidebar sidebar"
  "main   footer  footer";
```

---

# ⭐ Ejemplo 6: Cabecera pequeña y gran espacio central dividido

### `grid-template-columns`

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

### `grid-template-areas`

```css
grid-template-areas:
  "header header header header"
  "sidebar main   main   extra"
  "footer footer footer footer";
```

---

# ⭐ Ejemplo 7: Layout de cuatro cuadrantes

Perfecto para enseñar cómo una misma área puede repetirse formando bloques mayores.

### `grid-template-columns`

```css
grid-template-columns: 1fr 1fr;
```

### `grid-template-areas`

```css
grid-template-areas:
  "header header"
  "main   sidebar"
  "main   footer";
```

---

# ⭐ Ejemplo 8: Diseño tipo app móvil (header grande, contenido dividido abajo)

### `grid-template-columns`

```css
grid-template-columns: 2fr 1fr;
```

### `grid-template-areas`

```css
grid-template-areas:
  "header header"
  "main   extra"
  "footer extra";
```
