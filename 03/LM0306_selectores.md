[Volver al índice](./LM03.md)

# LM0306 Selectores

En esta página exploraremos los **selectores** en CSS, que permiten elegir qué elementos de un documento HTML recibirán los estilos definidos. CSS ofrece una amplia variedad de selectores que permiten seleccionar elementos de manera precisa y flexible. Estos incluyen selectores básicos, agrupación, combinación, pseudoclases y pseudoelementos.

### 1. Selectores básicos [ejemplo](https://miguitel.github.io/AWEB_disenioWeb/9%20index.html)

Los selectores básicos permiten seleccionar elementos individuales o grupos de elementos según su tipo, clase o ID.

- **Selector de tipo**: Selecciona todos los elementos de un tipo específico. Ejemplo: `p` selecciona todos los párrafos.
  
  ```css
  p {
      color: blue;
  }
  ```

- **Selector de clase**: Selecciona los elementos que tienen una clase específica. Se usa el símbolo `.` seguido del nombre de la clase. Ejemplo: `.clase`.

  ```css
  .destacado {
      background-color: yellow;
  }
  ```

- **Selector de ID**: Selecciona un único elemento con un ID específico. Se usa el símbolo `#` seguido del nombre del ID. Ejemplo: `#id`.

  ```css
  #encabezado {
      font-size: 24px;
  }
  ```

### 2. Agrupación de selectores

La agrupación de selectores permite aplicar los mismos estilos a varios elementos sin necesidad de repetir las reglas para cada uno. Los selectores se agrupan utilizando una coma `,` para separarlos.

#### Ejemplo de agrupación:

```css
h1, h2, p {
    color: green;
    margin-bottom: 10px;
}
```

En este ejemplo, se aplican los mismos estilos de color y margen a todos los encabezados `h1`, `h2` y párrafos `p`.

### 3. Combinación de selectores [+ con ejemplo](./LM0306+_selec.md)

Los selectores combinados permiten seleccionar elementos según su relación en el árbol del DOM, lo que facilita la aplicación de estilos basados en el contexto de los elementos.

- **Selector descendiente**: Selecciona los elementos que están dentro de un contenedor, sin importar el nivel. (hijos, nietos, etc.) Se indica mediante un espacio entre los selectores.

  ```css
  div p {
      color: red;
  }
  ```

  Este ejemplo selecciona todos los párrafos `p` que están dentro de un elemento `div`.

- **Selector hijo**: Selecciona los elementos que son hijos directos de un contenedor. **No se aplica a nietos.** Se indica mediante el símbolo `>`.

  ```css
  div > p {
      color: blue;
  }
  ```

  En este caso, solo se seleccionan los párrafos `p` que son hijos directos de un `div`.

- **Selector adyacente**: Selecciona el primer elemento que es inmediatamente adyacente a otro. Se indica con el símbolo `+`.

  ```css
  h1 + p {
      font-style: italic;
  }
  ```

  Este selector selecciona el párrafo `p` que aparece inmediatamente después de un `h1`.

- **Selector de hermano general**: Selecciona todos los elementos hermanos de otro elemento. Se indica con el símbolo `~`.

  ```css
  h1 ~ p {
      color: gray;
  }
  ```

  En este caso, se seleccionan todos los párrafos `p` que sean hermanos de un `h1` en el mismo contenedor.

### 4. Pseudoclases  [+](LM0306a.md)

Las pseudoclases permiten aplicar estilos a los elementos en un estado específico, como cuando el usuario interactúa con ellos o según su posición en el árbol DOM.

- **`:hover`**: Se aplica cuando el usuario pasa el cursor sobre un elemento.

  ```css
  a:hover {
      color: red;
  }
  ```

  Aquí, cuando un usuario pasa el cursor sobre un enlace `a`, el color del texto cambiará a rojo.

- **`:nth-child(n)`**: Selecciona el elemento que es el n-ésimo hijo de su contenedor. `n` puede ser un número o una fórmula.

  ```css
  li:nth-child(2) {
      background-color: lightgray;
  }
  ```

  Este selector aplica un color de fondo gris claro al segundo elemento `li` de una lista.

- **`:first-child`**: Selecciona el primer hijo de su contenedor.

  ```css
  p:first-child {
      font-weight: bold;
  }
  ```

  En este caso, el primer párrafo dentro de un contenedor tendrá el texto en negrita.

- **`:not(selector)`**: Selecciona todos los elementos que no coinciden con el selector dado.

  ```css
  p:not(.excluido) {
      color: green;
  }
  ```

  Aquí, todos los párrafos que no tienen la clase `excluido` serán verdes.

### 5. Pseudoelementos [+](LM0306a.md)

Los pseudoelementos permiten aplicar estilos a partes específicas de un elemento, como la primera letra o línea de un bloque de texto, o insertar contenido antes o después de un elemento.

- **`::before`**: Inserta contenido antes del contenido del elemento seleccionado.

  ```css
  h1::before {
      content: "¡";
      color: red;
  }
  ```

  Este pseudoelemento inserta el carácter "¡" antes del texto del `h1`.

- **`::after`**: Inserta contenido después del contenido del elemento.

  ```css
  h1::after {
      content: "!";
      color: blue;
  }
  ```

  Aquí, el carácter "!" se inserta después del contenido del `h1`.

- **`::first-letter`**: Aplica estilos a la primera letra de un bloque de texto.

  ```css
  p::first-letter {
      font-size: 2em;
      color: red;
  }
  ```

  Este pseudoelemento hace que la primera letra del párrafo sea más grande y de color rojo.

- **`::first-line`**: Aplica estilos a la primera línea de un bloque de texto.

  ```css
  p::first-line {
      font-weight: bold;
  }
  ```

  En este caso, solo la primera línea del párrafo estará en negrita.

### Conclusión

Los selectores en CSS ofrecen una poderosa herramienta para aplicar estilos de manera precisa y eficiente a los elementos de un documento HTML. Desde los selectores básicos hasta las combinaciones, pseudoclases y pseudoelementos, entender su uso permite crear diseños flexibles y específicos para diferentes interacciones y estructuras del DOM.

[Volver al índice](./LM03.md)