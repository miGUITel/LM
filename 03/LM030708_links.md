### LM030708-link-properties.md

[Back to Index](../index.md)

Los enlaces (`<a>`) en CSS pueden estilizarse de varias maneras para cambiar su apariencia y comportamiento cuando los usuarios interactúan con ellos. Las propiedades CSS aplicables a los enlaces permiten ajustar el color, las decoraciones, la alineación, entre otros aspectos, y también cambiar el estilo según diferentes estados del enlace como `hover`, `focus`, `active`, y `visited`.

#### Propiedades más importantes para los enlaces

1. **color**: Define el color del enlace. Se puede aplicar a los estados normales y modificarse para estados como `hover`, `visited`, etc.

2. **text-decoration**: Controla las decoraciones aplicadas al texto de los enlaces. Comúnmente se utiliza para agregar o eliminar subrayados.
   - `none`: Elimina el subrayado predeterminado de los enlaces.
   - `underline`: Añade un subrayado al enlace (valor predeterminado).
   - `line-through`: Agrega una línea que atraviesa el texto, dando un efecto de tachado.

3. **font-weight**: Ajusta el grosor del texto del enlace. Valores comunes incluyen `normal`, `bold`, y valores numéricos como `100`, `400`, `700`.

4. **background-color**: Establece un color de fondo para el enlace, especialmente útil cuando se quiere resaltar en estados como `hover` o `focus`.

5. **padding**: Añade espacio alrededor del texto dentro del enlace, lo que puede aumentar el área de clic y mejorar la experiencia de usuario.

6. **border**: Permite añadir un borde alrededor del enlace, que puede cambiar de color o estilo en diferentes estados (`hover`, `focus`, etc.).

7. **display**: Controla cómo se comporta el enlace en el flujo del documento. Al usar `inline-block` o `block`, se puede controlar mejor el tamaño y las propiedades de caja como `width` y `height`.

8. **text-align**: Controla la alineación del texto dentro del enlace, especialmente cuando se usa con `block` o `inline-block`.

9. **transition**: Permite animar los cambios en el estilo del enlace, como cuando el usuario pasa el cursor sobre él (`hover`), haciendo las transiciones más suaves.

#### Estados de los enlaces

- **:link**: Aplica estilos a los enlaces que aún no han sido visitados.
- **:visited**: Aplica estilos a los enlaces que ya han sido visitados.
- **:hover**: Aplica estilos cuando el usuario pasa el ratón sobre el enlace.
- **:active**: Aplica estilos cuando el enlace está siendo clicado.
- **:focus**: Aplica estilos cuando el enlace está seleccionado (usualmente con tabulador).

#### Ejemplo de uso de propiedades de enlaces

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Enlaces en CSS</title>
    <style>
        a {
            color: blue;
            text-decoration: none;
            font-weight: normal;
            padding: 5px 10px;
            border: 2px solid transparent;
            display: inline-block;
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        a:hover {
            background-color: lightblue;
            border-color: blue;
        }

        a:focus {
            outline: 2px dotted blue;
            background-color: lightyellow;
        }

        a:visited {
            color: purple;
        }

        a:active {
            background-color: darkblue;
            color: white;
        }

        .button-link {
            background-color: #4CAF50;
            color: white;
            border-radius: 5px;
            padding: 10px 20px;
        }

        .button-link:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <h2>Ejemplo de enlaces estilizados</h2>
    
    <p><a href="#">Enlace normal</a></p>
    
    <p><a href="#" class="button-link">Enlace estilo botón</a></p>

    <p><a href="#">Este enlace cambiará de color cuando sea visitado</a></p>

</body>
</html>
```

En este ejemplo:

- **color**: El enlace cambia de azul a púrpura cuando es visitado, y a blanco cuando está activo (clicado).
- **text-decoration**: El enlace no tiene subrayado por defecto (`none`), pero se puede modificar según el estado.
- **padding**: Se añade espacio interno para hacer que el área clicable sea más grande.
- **hover**: Cuando el ratón pasa sobre el enlace, cambia el color de fondo a azul claro y se añade un borde.
- **focus**: Se aplica un borde punteado para indicar que el enlace está seleccionado.
- **active**: Cuando el enlace es clicado, cambia de color y fondo.
- **transition**: Los cambios de estilo ocurren suavemente debido a la propiedad `transition`.

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Enlaces en CSS</title>
    <style>
        a {
            color: blue;
            text-decoration: none;
            font-weight: normal;
            padding: 5px 10px;
            border: 2px solid transparent;
            display: inline-block;
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        a:hover {
            background-color: lightblue;
            border-color: blue;
        }

        a:focus {
            outline: 2px dotted blue;
            background-color: lightyellow;
        }

        a:visited {
            color: purple;
        }

        a:active {
            background-color: darkblue;
            color: white;
        }

        .button-link {
            background-color: #4CAF50;
            color: white;
            border-radius: 5px;
            padding: 10px 20px;
        }

        .button-link:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <h2>Ejemplo de enlaces estilizados</h2>
    
    <p><a href="#">Enlace normal</a></p>
    
    <p><a href="#" class="button-link">Enlace estilo botón</a></p>

    <p><a href="#">Este enlace cambiará de color cuando sea visitado</a></p>

</body>
</html>

[Back to Index](../index.md)