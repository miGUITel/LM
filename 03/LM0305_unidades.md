[Volver al índice](./LM03.md)

# LM0305 Valores y unidades

En esta página exploraremos los valores y unidades más comunes utilizados en CSS para definir estilos. CSS ofrece una variedad de tipos de datos y unidades, desde longitudes absolutas y relativas hasta colores y tipos de letra. Comprender cómo y cuándo usar cada uno es esencial para crear estilos flexibles y accesibles.

### 1. Tipos de datos en CSS

CSS utiliza diferentes tipos de datos para definir los valores de las propiedades. Los más comunes son:

- **Entero**: Representa números sin decimales. Se utiliza en propiedades que requieren valores completos como `z-index`, `border-width` o `line-height` cuando no es fraccional. Ejemplo: `border-width: 2px;` donde el valor es un entero.
  
- **Decimal**: Se usa para definir números que incluyen una parte fraccionaria, lo que permite una mayor precisión. Es común en propiedades que afectan dimensiones o escalas, como `opacity` o `font-size`. Ejemplo: `opacity: 0.75;`, donde `0.75` es un valor decimal.
  
- **Dimensión**: Los valores de dimensión son combinaciones de un número (entero o decimal) con una unidad, como `px`, `em`, `rem`, etc. Ejemplo: `width: 100px;` donde `100px` es una dimensión.
  
- **Porcentaje**: Representa un valor relativo al contenedor del elemento o al contexto de la propiedad. Es útil para lograr diseños adaptables y flexibles. Ejemplo: `width: 50%;` significa que el ancho será la mitad del contenedor.

#### Ejemplo de tipos de datos en CSS:

```css
body {
    font-size: 16px; /* Dimensión: entero con unidad */
    opacity: 0.9;    /* Decimal */
    z-index: 10;     /* Entero */
    width: 75%;      /* Porcentaje */
}
```

### 2. Longitud absoluta

Las longitudes absolutas representan unidades fijas que no dependen del contexto en el que se usan. Son útiles cuando se requiere un diseño preciso e inmutable, aunque se recomienda utilizarlas con precaución para no comprometer la adaptabilidad de la página.

#### Unidades de longitud absoluta más comunes:

- `px`: **Píxeles**. Es la unidad más utilizada y representa un punto en la pantalla. Ejemplo: `font-size: 16px;`.
- `cm`: **Centímetros**.
- `mm`: **Milímetros**.
- `in`: **Pulgadas**.
- `pt`: **Puntos** (utilizados en tipografía).
- `pc`: **Picas** (1 pica = 12 puntos).

#### Ejemplo de uso de longitud absoluta:

```css
h1 {
    font-size: 24px;
    margin: 2cm;
}
```

### 3. Longitud relativa

Las longitudes relativas se definen en relación con otras propiedades o elementos, como el tamaño de la fuente del contenedor padre o el tamaño de la ventana del navegador. Estas unidades permiten crear diseños más flexibles y adaptables.

#### Unidades de longitud relativa más comunes:

- `em`: Se basa en el tamaño de la fuente del elemento padre. Si el tamaño de la fuente del contenedor es `16px`, entonces `1em` es igual a `16px`. Ejemplo: `font-size: 2em;` sería igual a 32 píxeles.
- `rem`: Similar a `em`, pero se basa en el tamaño de la fuente de la raíz (generalmente `<html>`). Ejemplo: `font-size: 1rem;`.
- `%`: Representa un porcentaje del tamaño del contenedor. Ejemplo: `width: 50%` indica que el elemento ocupará la mitad del ancho del contenedor padre.
- `vw`: **Viewport width**. Representa un porcentaje del ancho de la ventana gráfica (viewport). `1vw` es igual al 1% del ancho del viewport.
- `vh`: **Viewport height**. Similar a `vw`, pero representa un porcentaje de la altura del viewport.

#### Ejemplo de uso de longitud relativa:

```css
body {
    font-size: 16px;
}

p {
    font-size: 1.5em; /* 1.5 veces el tamaño de la fuente del body */
    margin: 10%;
}
```

### 4. Colores

CSS permite definir colores de varias maneras. Algunas de las más comunes son:

- **Hexadecimal**: Los colores se expresan en formato hexadecimal, comenzando con `#`, seguido de 3 o 6 dígitos. Ejemplo: `#ff0000` (rojo).
- **RGB**: Define colores mediante los valores rojo, verde y azul, con números entre 0 y 255. Ejemplo: `rgb(255, 0, 0)` (rojo).
- **RGBA**: Similar a RGB, pero con un valor adicional para la transparencia (alfa). Ejemplo: `rgba(255, 0, 0, 0.5)` (rojo semitransparente).
- **HSL**: Define colores mediante tono, saturación y luminosidad. Ejemplo: `hsl(0, 100%, 50%)` (rojo).
- **Palabras clave**: CSS incluye varias palabras clave para colores comunes. Ejemplo: `color: red;`.

#### Ejemplo de uso de colores:

```css
body {
    background-color: #f0f0f0;
    color: rgb(51, 51, 51);
}

p {
    color: rgba(255, 0, 0, 0.8); /* Rojo semi-transparente */
}
```

[Ejemplo más detallado](./LM0305_color.md)

### 5. Tipos de letra

En CSS, las fuentes se definen utilizando la propiedad `font-family`, que puede especificar una lista de fuentes a usar, de forma que el navegador utilizará la primera disponible en el sistema del usuario. Además, es posible controlar otros aspectos de la tipografía como el tamaño, el estilo o el peso de la fuente.

#### Propiedades comunes relacionadas con el tipo de letra:

- `font-family`: Define una lista de fuentes. Ejemplo: `font-family: "Arial", sans-serif;`.
- `font-size`: Define el tamaño de la fuente. Puede utilizar valores absolutos (como `px`) o relativos (como `em` o `%`).
- `font-weight`: Controla el grosor de la fuente. Ejemplo: `font-weight: bold;` o `font-weight: 700;`.
- `font-style`: Controla si la fuente es normal o cursiva. Ejemplo: `font-style: italic;`.
- `line-height`: Define la altura de la línea. Ejemplo: `line-height: 1.5;` (1.5 veces el tamaño de la fuente).

#### Ejemplo de uso de tipos de letra:

```css
body {
    font-family: "Helvetica", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
}

h1 {
    font-size: 2rem; /* 2 veces el tamaño base del cuerpo */
    font-weight: bold;
}
```

### Conclusión

CSS ofrece una amplia gama de valores y unidades que permiten crear estilos flexibles y precisos. Comprender los tipos de datos (entero, decimal, dimensión y porcentaje), así como cuándo utilizar unidades absolutas, relativas y cómo manejar los colores y tipos de letra, es fundamental para diseñar páginas web adaptables, accesibles y visualmente atractivas.

[Volver al índice](./LM03.md)