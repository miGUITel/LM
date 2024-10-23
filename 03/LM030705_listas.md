### LM030705-list-properties.md

[Back to Index](../index.md)

Las propiedades CSS relacionadas con las listas permiten controlar la apariencia y el comportamiento de las listas ordenadas (`<ol>`) y no ordenadas (`<ul>`). A través de estas propiedades, es posible definir el estilo de los marcadores, la posición de los mismos y otros aspectos que afectan la presentación de los elementos listados.

#### Propiedades más importantes para las listas

1. **list-style-type**: Define el tipo de marcador que se usará para los elementos de una lista. Algunos de los valores más comunes son:
   - `disc`: Marcador con un círculo relleno (valor por defecto en listas no ordenadas).
   - `circle`: Marcador con un círculo vacío.
   - `square`: Marcador en forma de cuadrado.
   - `decimal`: Números (valor por defecto en listas ordenadas).
   - `upper-roman`: Números romanos en mayúsculas (`I, II, III...`).
   - `lower-alpha`: Letras minúsculas (`a, b, c...`).

2. **list-style-position**: Especifica la posición de los marcadores con respecto a los elementos de la lista.
   - `inside`: Los marcadores se alinean con el contenido del elemento de la lista.
   - `outside`: Los marcadores se colocan fuera del contenido de la lista (valor por defecto).

3. **list-style-image**: Permite usar una imagen personalizada como marcador en lugar de los valores predefinidos. Se especifica una URL para la imagen.
   - `url("ruta-imagen")`: Define la imagen que se usará como marcador.
   - `none`: Elimina cualquier imagen como marcador (valor por defecto).

4. **list-style**: Propiedad abreviada que permite establecer `list-style-type`, `list-style-position` y `list-style-image` en una sola línea.

#### Ejemplo de uso de propiedades de listas

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Listas en CSS</title>
    <style>
        .list-type-disc { list-style-type: disc; }
        .list-type-circle { list-style-type: circle; }
        .list-type-square { list-style-type: square; }

        .list-type-decimal { list-style-type: decimal; }
        .list-type-upper-roman { list-style-type: upper-roman; }
        .list-type-lower-alpha { list-style-type: lower-alpha; }

        .list-position-inside { list-style-position: inside; }
        .list-position-outside { list-style-position: outside; }

        .list-image {
            list-style-image: url('https://via.placeholder.com/15');
        }
    </style>
</head>
<body>

    <h2>Listas no ordenadas (ul)</h2>
    <ul class="list-type-disc">
        <li>Elemento con marcador tipo disc</li>
    </ul>
    <ul class="list-type-circle">
        <li>Elemento con marcador tipo circle</li>
    </ul>
    <ul class="list-type-square">
        <li>Elemento con marcador tipo square</li>
    </ul>

    <h2>Listas ordenadas (ol)</h2>
    <ol class="list-type-decimal">
        <li>Elemento con marcador decimal</li>
    </ol>
    <ol class="list-type-upper-roman">
        <li>Elemento con marcador upper-roman</li>
    </ol>
    <ol class="list-type-lower-alpha">
        <li>Elemento con marcador lower-alpha</li>
    </ol>

    <h2>Posición del marcador</h2>
    <ul class="list-position-inside">
        <li>Marcador alineado con el contenido (inside)</li>
    </ul>
    <ul class="list-position-outside">
        <li>Marcador fuera del contenido (outside)</li>
    </ul>

    <h2>Marcadores personalizados con imágenes</h2>
    <ul class="list-image">
        <li>Elemento con marcador personalizado con imagen</li>
    </ul>

</body>
</html>
```

En este ejemplo, se muestran diferentes valores aplicados a las propiedades más comunes para listas:

- **list-style-type**: Se usan diferentes tipos de marcadores (círculo, cuadrado, decimal, letras).
- **list-style-position**: Se demuestra cómo los marcadores se posicionan dentro o fuera del contenido.
- **list-style-image**: Se utiliza una imagen personalizada como marcador.

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Listas en CSS</title>
    <style>
        .list-type-disc { list-style-type: disc; }
        .list-type-circle { list-style-type: circle; }
        .list-type-square { list-style-type: square; }

        .list-type-decimal { list-style-type: decimal; }
        .list-type-upper-roman { list-style-type: upper-roman; }
        .list-type-lower-alpha { list-style-type: lower-alpha; }

        .list-position-inside { list-style-position: inside; }
        .list-position-outside { list-style-position: outside; }

        .list-image {
            list-style-image: url('https://via.placeholder.com/15');
        }
    </style>
</head>
<body>

    <h2>Listas no ordenadas (ul)</h2>
    <ul class="list-type-disc">
        <li>Elemento con marcador tipo disc</li>
    </ul>
    <ul class="list-type-circle">
        <li>Elemento con marcador tipo circle</li>
    </ul>
    <ul class="list-type-square">
        <li>Elemento con marcador tipo square</li>
    </ul>

    <h2>Listas ordenadas (ol)</h2>
    <ol class="list-type-decimal">
        <li>Elemento con marcador decimal</li>
    </ol>
    <ol class="list-type-upper-roman">
        <li>Elemento con marcador upper-roman</li>
    </ol>
    <ol class="list-type-lower-alpha">
        <li>Elemento con marcador lower-alpha</li>
    </ol>

    <h2>Posición del marcador</h2>
    <ul class="list-position-inside">
        <li>Marcador alineado con el contenido (inside)</li>
    </ul>
    <ul class="list-position-outside">
        <li>Marcador fuera del contenido (outside)</li>
    </ul>

    <h2>Marcadores personalizados con imágenes</h2>
    <ul class="list-image">
        <li>Elemento con marcador personalizado con imagen</li>
    </ul>

</body>
</html>


[Back to Index](../index.md)