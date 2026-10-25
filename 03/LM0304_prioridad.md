[Volver al índice](./LM03.md)

# LM0304 Prioridad y orden: Cascada, Especificidad y Herencia

En esta página exploraremos cómo CSS decide qué estilos aplicar cuando hay múltiples reglas en conflicto. Este proceso se basa en tres principios clave: **la cascada**, **la especificidad** y **la herencia**. Entender cómo funcionan estos conceptos es fundamental para controlar de manera efectiva la apariencia de los elementos en una página web.

### 1. La cascada

La cascada decide qué declaración prevalece cuando varias compiten por una propiedad de un elemento. En los ejemplos de esta UT comparamos declaraciones del autor del mismo contexto, sin capas de cascada:

1. **Importancia**: Una declaración con `!important` prevalece sobre una normal. La marca afecta a la declaración que la lleva, no a toda la regla.
2. **Especificidad**: Si las declaraciones tienen la misma importancia, se compara la especificidad de sus selectores.
3. **Orden de aparición**: Si también empatan en especificidad, prevalece la declaración que aparece después.

#### Ejemplo de la cascada:

```css
p {
    color: blue;
}

p {
    color: red;
}
```

En este ejemplo, el color del texto del párrafo será **rojo**, porque esa regla aparece después en la hoja de estilos.

#### Uso de `!important`:

```css
p {
    color: blue !important;
}

p {
    color: red;
}
```

Aquí, el color del texto será **azul** a pesar de que la regla azul está definida antes, porque tiene la palabra clave `!important`, que le da mayor prioridad.

### 2. Especificidad

La especificidad permite comparar los selectores cuando las declaraciones tienen la misma importancia dentro del contexto explicado. Para los selectores de estos ejemplos se representa mediante una terna **(ID, clases, tipos)**:

- **ID**: número de selectores de ID, como `#mi-parrafo`.
- **Clases**: número de clases, atributos y pseudoclases, como `.destacado`, `[title]` o `:hover`.
- **Tipos**: número de selectores de tipo y pseudoelementos, como `h1`, `p` o `::before`.

Se compara primero el componente ID; solo si empata se compara el de clases y, si también empata, el de tipos. Los componentes no se suman entre sí. `!important` no forma parte de la especificidad: se considera antes.

Los **estilos inline**, declarados con el atributo `style` de HTML, no son un tipo de selector ni se incluyen en esta terna. Entre declaraciones del autor con la misma importancia y en el mismo contexto, prevalecen sobre las declaradas mediante selectores en hojas de estilo.

#### Ejemplo de especificidad:

```css
/* Selectores con diferentes niveles de especificidad */
p {
    color: blue;
}

#mi-parrafo {
    color: red;
}

div p {
    color: green;
}
```

- El selector `p` tiene una especificidad de **(0, 0, 1)**.
- El selector `#mi-parrafo` tiene una especificidad de **(1, 0, 0)**.
- El selector `div p` tiene una especificidad de **(0, 0, 2)**.

En este caso, si un párrafo tiene el ID `mi-parrafo`, su color será **rojo** porque el selector `#mi-parrafo` tiene mayor especificidad que los otros selectores.

### 3. Herencia

En CSS, algunos estilos se **heredan** automáticamente de los elementos superiores (parent) a los elementos inferiores (children) en el árbol del DOM. Esto significa que, por ejemplo, si aplicas un color de texto a un contenedor, sus elementos hijos también tendrán ese color, a menos que se especifique lo contrario.

Sin embargo, no todas las propiedades se heredan. Las propiedades que generalmente **sí** se heredan incluyen:
- `color`
- `font-family`
- `font-size`
- `line-height`

Por otro lado, propiedades como `margin`, `border` y `padding` **no** se heredan de forma predeterminada.

[Listado de propiedades que se heredan y la que no](./LM0304+_listado_herencia.md)

#### Ejemplo de herencia:

```css
body {
    color: black;
}

p {
    font-size: 16px;
}
```

En este ejemplo, los párrafos reciben el color **negro** por herencia del `body`, porque no tienen una declaración propia de color. **`font-size` también se hereda**, pero aquí la regla `p` declara directamente `16px` y sustituye el tamaño que recibirían por herencia.

#### Controlar la herencia con `inherit`, `initial` y `unset`:

- `inherit`: fuerza a que una propiedad herede su valor del elemento padre.
- `initial`: restablece una propiedad a su valor inicial definido por CSS.
- `unset`: restablece una propiedad a su valor heredado si es heredable, o a su valor inicial si no lo es.

```css
p {
    color: inherit; /* Heredará el color del elemento padre */
}
```

### Ejemplo completo: cascada, especificidad y herencia

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Prioridad en CSS</title>
    <style>
        body {
            color: black;
            font-family: Arial, sans-serif;
        }

        p {
            color: blue;
        }

        #especial {
            color: green;
        }

        p#especial {
            color: red;
        }
    </style>
</head>
<body>
    <p>Este es un párrafo normal.</p>
    <p id="especial">Este es un párrafo especial.</p>
</body>
</html>
```

#### Pruebas con el ejemplo

1. Copia el código completo en un archivo HTML. Antes de abrirlo en el navegador, predice el color de cada párrafo. Después comprueba tu predicción.
2. Añade al final del bloque de estilos otra regla: `p { color: purple; }`. Observa el primer párrafo. Mueve esa nueva regla antes de la regla `p` que declara azul y comprueba qué cambia. Al terminar, elimina la regla añadida.
3. Intercambia el orden de las reglas `#especial` y `p#especial`. Comprueba el segundo párrafo y explica si el orden basta para decidir su color en este caso.
4. Abre el inspector con F12 y selecciona el párrafo especial. En sus estilos, identifica la declaración de color aplicada y las anuladas. Desactiva solo `color: red` de `p#especial`, comprueba qué color queda aplicado y localiza la regla de la que procede. Vuelve a activarla.
5. Selecciona el primer párrafo y desactiva `color: blue` de la regla `p`. Localiza el color que recibe ahora del `body` y comprueba también de dónde procede su tipo de letra. Reactiva la declaración y compara el color heredado con el declarado directamente en el párrafo.

Al terminar, debes poder justificar qué declaración se aplica en cada prueba y distinguir la competencia entre reglas de la herencia. Los cambios hechos en el inspector son temporales y desaparecen al recargar la página.

En este ejemplo:
- El primer párrafo será de color **azul**, porque la regla `p` declara ese color directamente y sustituye el negro que el párrafo recibiría por herencia del `body`.
- El segundo párrafo (con el ID `especial`) será de color **rojo** porque la regla `p#especial` tiene una especificidad más alta que `#especial` o `p`.

### Conclusión

La cascada, la especificidad y la herencia son mecanismos clave que CSS utiliza para determinar qué estilos se aplican en un documento cuando múltiples reglas coinciden con el mismo elemento. Comprender estos conceptos es esencial para resolver conflictos de estilos y asegurarse de que el diseño se aplique correctamente según lo esperado.

[Volver al índice](./LM03.md)
