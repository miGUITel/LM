[Volver al índice](./LM03.md)

# LM0302 Estructura y sintaxis de CSS

En esta página exploraremos la estructura y la sintaxis básica de CSS, centrándonos en las reglas, los selectores, las declaraciones y los comentarios. Estos elementos son la base para comprender cómo se aplican los estilos en un documento HTML. También se incluirá un ejemplo práctico con el selector `body` para ilustrar cómo funcionan las reglas de CSS.

### Reglas en CSS

Una regla en CSS está compuesta por un **selector** y un **bloque de declaraciones**. El selector identifica qué elemento(s) del documento HTML se verán afectados por las propiedades definidas en el bloque de declaraciones. El bloque de declaraciones está delimitado por llaves `{}` y contiene una o más **declaraciones**, cada una de las cuales consiste en una **propiedad** y un **valor**.

#### Ejemplo de una regla CSS:

```css
body {
    background-color: #f0f0f0;
    color: #333;
}
```

En este caso:
- **Selector**: `body`
- **Declaraciones**: 
  - `background-color: #f0f0f0;` (color de fondo)
  - `color: #333;` (color del texto)
  - Se pueden añadir todas las declaraciones necesarias

### Selectores en CSS

Los selectores son el mecanismo mediante el cual se eligen los elementos del documento HTML que serán estilizados. Existen diferentes tipos de selectores en CSS:

- **Selector de tipo**: selecciona todos los elementos de un tipo específico, como `p` para párrafos o `h1` para encabezados.
- **Selector de clase**: selecciona elementos que tienen un atributo `class` específico, utilizando un punto (`.`) antes del nombre de la clase.
- **Selector de ID**: selecciona un elemento que tiene un atributo `id` específico, utilizando el símbolo de almohadilla (`#`) antes del nombre del ID.
- **Selectores combinados**: permiten seleccionar elementos específicos según su posición o relación con otros elementos.

#### Ejemplo de selector de tipo:

```css
h1 {
    font-size: 24px;
    color: blue;
}
```

Este selector aplica estilos a todos los elementos `h1` del documento, haciendo que el tamaño del texto sea de 24 píxeles y su color azul.

### Declaraciones en CSS

Una declaración CSS define una propiedad y su valor correspondiente, separados por dos puntos (`:`), y finaliza con un punto y coma (`;`). Cada declaración afecta una característica visual del elemento seleccionado, como el color, el tamaño de la fuente, el margen, el relleno, etc.

#### Ejemplo de una declaración:

```css
font-size: 16px;
```

Esta declaración indica que el tamaño de la fuente debe ser de 16 píxeles.

### Comentarios en CSS

Los comentarios en CSS permiten incluir notas dentro del código que no serán interpretadas por el navegador. Se utilizan para hacer observaciones o aclaraciones en el código que puedan ser útiles para otros desarrolladores o para el mismo autor al revisar el código más tarde.

Un comentario en CSS se escribe entre `/*` y `*/`.

#### Ejemplo de comentario:

```css
/* Este es un comentario */
```

Los comentarios son ignorados por el navegador, pero son muy útiles para hacer que el código sea más legible y fácil de mantener.

### Ejemplo completo: Seleccionando el `body`

A continuación, se muestra un ejemplo práctico en el que se aplica un conjunto de reglas CSS al elemento `body` del documento HTML. El selector `body` se utiliza para definir el estilo del cuerpo de la página, afectando el color de fondo y el estilo del texto en todo el documento.

#### Código CSS:

```css
/* Estilos aplicados al cuerpo de la página */
body {
    background-color: #f0f0f0; /* Color de fondo gris claro */
    color: #333; /* Color del texto */
    font-family: Arial, sans-serif; /* Familia de fuentes */
    margin: 0; /* Quita los márgenes predeterminados */
    padding: 0; /* Quita el relleno predeterminado */
}
```

#### Explicación del ejemplo:
- **Selector**: `body`, que selecciona todo el cuerpo de la página.
- **Propiedades y valores**:
  - `background-color: #f0f0f0;`: Define un color de fondo gris claro.
  - `color: #333;`: Define un color de texto gris oscuro.
  - `font-family: Arial, sans-serif;`: Aplica la fuente Arial, y en su defecto cualquier fuente sans-serif.
  - `margin: 0;`: Elimina los márgenes predeterminados del cuerpo de la página.
  - `padding: 0;`: Elimina el relleno predeterminado.

Este conjunto de reglas establece la apariencia básica del documento, garantizando un diseño limpio y uniforme.

### Conclusión

La estructura y sintaxis de CSS son sencillas, pero poderosas. Cada regla se compone de un selector y un bloque de declaraciones, donde se define el estilo de los elementos seleccionados. El uso de comentarios y selectores precisos ayuda a mantener un código CSS claro y fácil de gestionar a medida que los proyectos se vuelven más complejos.

[Volver al índice](./LM03.md)
