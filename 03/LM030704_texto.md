### LM030704-text-properties.md

[Back to Index](./LM03.md)

Las propiedades CSS relacionadas con el texto permiten controlar aspectos clave de la presentación tipográfica en una página web. Estas propiedades afectan desde el tamaño y el color del texto hasta la alineación, el espaciado entre caracteres y palabras, entre otros. A continuación se detallan las propiedades más relevantes:

#### Propiedades de texto más importantes

1. **color**: Define el color del texto. Puede utilizarse con nombres de colores, valores hexadecimales, RGB o HSL.
   
2. **font-size**: Establece el tamaño de la fuente. Los valores pueden ser en unidades relativas (como `em`, `rem`) o absolutas (`px`, `pt`).

3. **font-family**: Especifica la familia de fuentes que se utilizará para el texto. Se pueden definir varias familias de fuente como fallback en caso de que la primera no esté disponible.

4. **font-weight**: Controla el grosor del texto. Los valores comunes incluyen `normal`, `bold`, y valores numéricos como `100`, `400`, `700` (donde 400 es el peso normal).

5. **text-align**: Define cómo se alineará el texto dentro de su contenedor. Los valores más comunes son `left`, `right`, `center`, y `justify`.

6. **line-height**: Controla la altura de la línea del texto. Esto afecta el espacio vertical entre líneas de texto.

7. **letter-spacing**: Ajusta el espacio entre caracteres individuales en el texto.

8. **text-transform**: Controla la capitalización del texto, permitiendo convertir el texto en mayúsculas, minúsculas o capitalizar la primera letra de cada palabra.

9. **text-decoration**: Añade decoraciones al texto, como subrayado, tachado, o líneas sobre el texto. Los valores más comunes son:
   - `none`: Elimina cualquier decoración existente.
   - `underline`: Añade una línea debajo del texto.
   - `line-through`: Añade una línea a través del texto, generando un efecto de tachado.
   - `overline`: Añade una línea sobre el texto.

#### Ejemplo de uso de propiedades de texto

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Texto en CSS</title>
    <style>
        .example {
            margin-bottom: 20px;
        }
        .color-red { color: red; }
        .color-green { color: green; }
        .color-blue { color: blue; }

        .size-small { font-size: 12px; }
        .size-medium { font-size: 18px; }
        .size-large { font-size: 24px; }

        .font-sans { font-family: Arial, sans-serif; }
        .font-serif { font-family: "Times New Roman", serif; }
        .font-monospace { font-family: "Courier New", monospace; }

        .weight-normal { font-weight: normal; }
        .weight-bold { font-weight: bold; }
        .weight-light { font-weight: 300; }

        .align-left { text-align: left; }
        .align-center { text-align: center; }
        .align-justify { text-align: justify; }

        .line-short { line-height: 1.2; }
        .line-normal { line-height: 1.5; }
        .line-tall { line-height: 2; }

        .spacing-tight { letter-spacing: -1px; }
        .spacing-normal { letter-spacing: 0px; }
        .spacing-wide { letter-spacing: 2px; }

        .transform-uppercase { text-transform: uppercase; }
        .transform-lowercase { text-transform: lowercase; }
        .transform-capitalize { text-transform: capitalize; }

        .decoration-none { text-decoration: none; }
        .decoration-underline { text-decoration: underline; }
        .decoration-linethrough { text-decoration: line-through; }
        .decoration-overline { text-decoration: overline; }
    </style>
</head>
<body>

    <div class="example color-red">Este texto es rojo</div>
    <div class="example color-green">Este texto es verde</div>
    <div class="example color-blue">Este texto es azul</div>

    <div class="example size-small">Este texto es pequeño (12px)</div>
    <div class="example size-medium">Este texto es mediano (18px)</div>
    <div class="example size-large">Este texto es grande (24px)</div>

    <div class="example font-sans">Este texto usa fuente sans-serif (Arial)</div>
    <div class="example font-serif">Este texto usa fuente serif (Times New Roman)</div>
    <div class="example font-monospace">Este texto usa fuente monospace (Courier New)</div>

    <div class="example weight-normal">Este texto tiene peso normal</div>
    <div class="example weight-bold">Este texto tiene peso bold</div>
    <div class="example weight-light">Este texto tiene peso light (300)</div>

    <div class="example align-left">Este texto está alineado a la izquierda</div>
    <div class="example align-center">Este texto está alineado al centro</div>
    <div class="example align-justify">Este texto está justificado para ocupar todo el ancho</div>

    <div class="example line-short">Este texto tiene una altura de línea corta (1.2)</div>
    <div class="example line-normal">Este texto tiene una altura de línea normal (1.5)</div>
    <div class="example line-tall">Este texto tiene una altura de línea grande (2)</div>

    <div class="example spacing-tight">Este texto tiene espaciado entre letras ajustado (-1px)</div>
    <div class="example spacing-normal">Este texto tiene espaciado normal entre letras (0px)</div>
    <div class="example spacing-wide">Este texto tiene espaciado amplio entre letras (2px)</div>

    <div class="example transform-uppercase">este texto está en mayúsculas</div>
    <div class="example transform-lowercase">ESTE TEXTO ESTÁ EN MINÚSCULAS</div>
    <div class="example transform-capitalize">este texto está capitalizado</div>

    <div class="example decoration-none">Este texto no tiene decoración</div>
    <div class="example decoration-underline">Este texto tiene subrayado</div>
    <div class="example decoration-linethrough">Este texto está tachado</div>
    <div class="example decoration-overline">Este texto tiene una línea sobre él</div>

</body>
</html>
```
En este ejemplo, cada propiedad de texto se muestra con tres valores distintos para ilustrar su funcionamiento:

    color: Se utilizan los colores rojo, verde y azul.
    font-size: Se aplican tamaños de fuente pequeños (12px), medianos (18px), y grandes (24px).
    font-family: Se usan tres familias de fuentes: sans-serif (Arial), serif (Times New Roman), y monospace (Courier New).
    font-weight: Se varía el grosor de la fuente entre normal, bold y light (300).
    text-align: El texto se alinea a la izquierda, al centro, y justificado.
    line-height: Se varía la altura de línea entre corta (1.2), normal (1.5) y alta (2).
    letter-spacing: Se ajusta el espaciado entre caracteres de manera ajustada (-1px), normal (0px) y amplia (2px).
    text-transform: Se demuestra el uso de mayúsculas, minúsculas, y capitalización.

En este ejemplo se demuestra el uso de la propiedad `text-decoration` con tres valores distintos:

- **none**: El texto no tiene ninguna decoración.
- **underline**: El texto tiene una línea subrayada.
- **line-through**: El texto está tachado.
- **overline**: El texto tiene una línea sobre él.

[Back to Index](./LM03.md)