[Volver al índice](./LM03.md)

# LM0305 Valores y unidades

En esta página exploraremos los valores y unidades más comunes utilizados en CSS para definir estilos. CSS ofrece una variedad de tipos de datos y unidades, desde longitudes absolutas y relativas hasta colores y tipos de letra. Comprender cómo y cuándo usar cada uno es esencial para crear estilos flexibles y accesibles.

### 1. Tipos de datos en CSS

CSS utiliza diferentes tipos de datos para definir los valores de las propiedades. Los más comunes son:

- **Entero**: Número sin decimales. Ejemplo: `z-index: 2;`. En `border-width: 2px`, el valor completo es una dimensión, porque incluye una unidad.
  
- **Decimal**: Número con parte fraccionaria. Ejemplo: `opacity: 0.75;`. En una longitud como `font-size: 1.5em`, el número forma parte de una dimensión y lleva una unidad.
  
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

Las unidades de longitud absoluta tienen relaciones fijas entre sí. Una medida en píxeles CSS conserva esos píxeles al redimensionar la ventana, pero el zoom también cambia su tamaño visual en pantalla.

#### Unidades de longitud absoluta más comunes:

- `px`: **Píxeles CSS**. Un píxel CSS no equivale necesariamente a un píxel físico de la pantalla. Ejemplo: `font-size: 16px;`.
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

- `em`: En `font-size`, toma como referencia el tamaño de fuente heredado del padre: si es `16px`, `font-size: 2em` equivale a `32px`. En propiedades como `padding`, toma como referencia la fuente del propio elemento.
- `rem`: Similar a `em`, pero se basa en el tamaño de la fuente de la raíz (generalmente `<html>`). Ejemplo: `font-size: 1rem;`.
- `%`: Su referencia depende de la propiedad. En los ejemplos habituales, `width: 50%` utiliza la anchura del bloque contenedor; en `font-size`, el porcentaje se refiere a la fuente heredada.
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

[Pruebas guiadas de tamaños: px, %, em y rem](./LM0305_tamanos.html)

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
    font-size: 2rem; /* 2 veces el tamaño de fuente del elemento raíz */
    font-weight: bold;
}
```

### Conclusión

CSS ofrece una amplia gama de valores y unidades que permiten crear estilos flexibles y precisos. Comprender los tipos de datos (entero, decimal, dimensión y porcentaje), así como cuándo utilizar unidades absolutas, relativas y cómo manejar los colores y tipos de letra, es fundamental para diseñar páginas web adaptables, accesibles y visualmente atractivas.

[Volver al índice](./LM03.md)
