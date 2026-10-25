[Volver a Grid](./LM030701_caja.md#4-grid)

# Grid: errores reales y resultados que pueden sorprender

Un resultado distinto al esperado no implica siempre CSS inválido. En cada caso, distingue si el navegador descarta la plantilla, si el mapa es válido pero no coincide con tu intención o si el código funciona sin problema.

## 1. Tres columnas dimensionadas y un mapa de dos columnas

```css
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas:
  "header header"
  "main sidebar"
  "footer footer";
```

**Válido, pero puede no ser lo que buscabas.** La cuadrícula tiene tres columnas; las áreas del mapa solo ocupan las dos primeras. La tercera sigue existiendo. Por eso header y footer no abarcan todo el ancho. El resultado sigue las reglas de Grid; no es impredecible.

Si pretendías dos columnas, ajusta sus tamaños. Si pretendías tres, revisa el mapa. Como hábito inicial, hacer coincidir el número de columnas dimensionadas y las celdas de cada fila facilita entender el diseño, pero no es una condición de validez.

## 2. Filas con distinto número de celdas

```css
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas:
  "header header header"
  "main sidebar extra footer";
```

**Plantilla inválida.** La primera cadena describe tres celdas y la segunda cuatro. Todas las cadenas deben describir el mismo número de celdas. El navegador descarta la declaración grid-template-areas; otras declaraciones válidas pueden seguir aplicándose.

## 3. Un área que ningún elemento ocupa

```css
grid-template-columns: 2fr 1fr;
grid-template-areas:
  "main phantom"
  "footer footer";
```

**Válido.** Definir phantom no crea un elemento HTML. Esa zona puede quedar sin ocupar y mostrar el fondo del contenedor. Puede ser un espacio reservado intencionadamente o una asignación que has olvidado.

El nombre se relaciona con el valor de grid-area, no con el selector. Por ejemplo, `.contenido { grid-area: main; }` es correcto. Si renombras un área del mapa y una caja sigue apuntando al nombre anterior, su colocación puede generar pistas implícitas y un resultado inesperado. Revisa ambas partes.

## 4. Una misma área aparece separada

```css
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas:
  "header header header"
  "main sidebar main"
  "footer footer footer";
```

**Plantilla inválida.** Las celdas de main quedan separadas por sidebar. Cada área con nombre debe ocupar un rectángulo completo, sin huecos.

## 5. Áreas en diagonal

```css
grid-template-columns: 1fr 1fr;
grid-template-areas:
  "main sidebar"
  "sidebar main";
```

**Plantilla inválida.** Las apariciones de cada nombre están separadas en diagonal. Tampoco sería válido un área en forma de L: estar conectada no basta, debe formar un rectángulo completo.

## 6. Un punto dentro de lo que parece un nombre

```css
grid-template-columns: 1fr 2fr;
grid-template-areas:
  "header ."
  ". side.bar";
```

**Plantilla inválida, pero la causa requiere mirar las celdas.** El navegador interpreta side.bar como tres celdas: side, una celda vacía y bar. La segunda fila describe cuatro celdas en total, frente a las dos de la primera.

Un punto no permite unir esas partes en un único nombre. Si querías un área llamada sidebar, escribe ese nombre. Usa nombres sencillos y separa las celdas con espacios para leerlas con claridad.

## 7. Una fila con menos celdas

```css
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas:
  "header header header"
  "main ."
  "footer footer footer";
```

**Plantilla inválida.** Las filas describen tres, dos y tres celdas. El punto cuenta como una celda vacía. Si querías dejar dos celdas vacías en la segunda fila, escribe `"main . ."`.

## 8. Espacios adicionales

```css
grid-template-columns: 1fr 1fr;
grid-template-areas:
  "header  header"
  "main    sidebar "
  "footer footer";
```

**Válido y sin un problema de distribución por esos espacios.** Varios espacios y los espacios al final no crean celdas ni columnas fantasma. Puedes utilizarlos para alinear visualmente los nombres en el código. Para expresar una celda vacía, utiliza un punto.

## Qué revisar

1. Todas las filas del mapa deben tener el mismo número de celdas, incluidas las vacías.
2. Cada área con nombre debe formar un rectángulo completo.
3. Revisa el número y tamaño de columnas si aparece espacio que no esperabas.
4. Comprueba las asignaciones grid-area si falta contenido en una zona o una caja aparece fuera del mapa previsto.
5. Distingue una declaración inválida de una distribución válida que no coincide con el encargo. Los espacios adicionales, por sí solos, no son un error.

[Volver a Grid](./LM030701_caja.md#4-grid)
