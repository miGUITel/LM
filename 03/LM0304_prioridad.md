[Volver al índice](./LM03.md)

# LM0304 Prioridad y orden: Cascada, Especificidad y Herencia

En esta página exploraremos cómo CSS decide qué estilos aplicar cuando hay múltiples reglas en conflicto. Este proceso se basa en tres principios clave: **la cascada**, **la especificidad** y **la herencia**. Entender cómo funcionan estos conceptos es fundamental para controlar de manera efectiva la apariencia de los elementos en una página web.

### 1. La cascada

El término "cascada" en CSS se refiere al proceso por el cual el navegador decide qué reglas aplicar cuando existen múltiples reglas que coinciden con un mismo elemento. Cuando esto ocurre, CSS utiliza un conjunto de principios para determinar el orden de prioridad:

1. **Importancia**: Las reglas con `!important` tienen la mayor prioridad y siempre se aplican, independientemente de su posición en el archivo CSS.
2. **Especificidad**: Si dos o más reglas tienen el mismo nivel de importancia, CSS evalúa su especificidad (se explica más adelante).
3. **Orden en la hoja de estilo**: Si las reglas tienen la misma especificidad, se aplicará la última definida en el archivo CSS.

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

La especificidad es un valor que CSS asigna a las reglas en función de cuán específicas son. A mayor especificidad, mayor prioridad tendrá la regla. La especificidad se calcula a partir del tipo de selectores utilizados en una regla. Se agrupan en cuatro niveles principales:

- **Selectores inline** (atributo `style` en HTML): tienen la mayor especificidad.
- **Selectores de ID**: un selector con `#` tiene alta especificidad.
- **Selectores de clase, atributos o pseudoclases**: un selector con `.`, `[]`, o `:hover` tiene especificidad media.
- **Selectores de tipo o pseudoelementos**: selectores como `h1`, `p`, `::before` tienen la menor especificidad.

La especificidad de una regla CSS se representa como un número de cuatro partes (a, b, c, d), donde:
- **a**: si se utiliza `!important`.
- **b**: número de selectores `ID`.
- **c**: número de clases, atributos o pseudoclases.
- **d**: número de selectores de tipo o pseudoelementos.

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

- El selector `p` tiene una especificidad de (0, 0, 0, 1).
- El selector `#mi-parrafo` tiene una especificidad de (0, 1, 0, 0).
- El selector `div p` tiene una especificidad de (0, 0, 0, 2).

En este caso, si un párrafo tiene el ID `mi-parrafo`, su color será **rojo** porque el selector `#mi-parrafo` tiene mayor especificidad que los otros selectores.

### 3. Herencia

En CSS, algunos estilos se **heredan** automáticamente de los elementos superiores (parent) a los elementos inferiores (children) en el árbol del DOM. Esto significa que, por ejemplo, si aplicas un color de texto a un contenedor, sus elementos hijos también tendrán ese color, a menos que se especifique lo contrario.

Sin embargo, no todas las propiedades se heredan. Las propiedades que generalmente **sí** se heredan incluyen:
- `color`
- `font-family`
- `line-height`

Por otro lado, propiedades como `margin`, `border` y `padding` **no** se heredan de forma predeterminada.

#### Ejemplo de herencia:

```css
body {
    color: black;
}

p {
    font-size: 16px;
}
```

En este ejemplo, todos los elementos dentro del `body` (incluidos los párrafos) heredarán el color **negro** porque `color` es una propiedad heredada. Sin embargo, el tamaño de fuente de los párrafos (`font-size`) se especifica de manera independiente, ya que esa propiedad no se hereda automáticamente.

#### Controlar la herencia con `inherit`, `initial` y `unset`:

- `inherit`: fuerza a que una propiedad herede su valor del elemento padre.
- `initial`: restablece una propiedad a su valor predeterminado.
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

En este ejemplo:
- El primer párrafo será de color **azul**, ya que la regla `p` tiene mayor especificidad que la herencia del color negro del `body`.
- El segundo párrafo (con el ID `especial`) será de color **rojo** porque la regla `p#especial` tiene una especificidad más alta que `#especial` o `p`.

### Conclusión

La cascada, la especificidad y la herencia son mecanismos clave que CSS utiliza para determinar qué estilos se aplican en un documento cuando múltiples reglas coinciden con el mismo elemento. Comprender estos conceptos es esencial para resolver conflictos de estilos y asegurarse de que el diseño se aplique correctamente según lo esperado.

[Volver al índice](./LM03.md)