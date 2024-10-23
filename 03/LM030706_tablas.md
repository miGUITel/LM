### LM030706-table-properties.md

[Back to Index](../index.md)

Las tablas en CSS permiten organizar datos en filas y columnas, y el uso de propiedades específicas permite mejorar su presentación y control sobre su apariencia. Las propiedades de CSS para las tablas afectan tanto a la estructura de la tabla como a la disposición y estilo de los bordes, celdas y contenido.

#### Propiedades más importantes para las tablas

1. **border-collapse**: Define si los bordes de la tabla se colapsan en un solo borde o si permanecen separados.
   - `collapse`: Los bordes de las celdas adyacentes se combinan en un solo borde.
   - `separate`: Cada celda mantiene su propio borde (valor por defecto).

2. **border-spacing**: Especifica el espacio entre los bordes de las celdas cuando `border-collapse` está en `separate`. Se puede definir en una o dos dimensiones (horizontal y vertical).

3. **table-layout**: Controla el diseño y el ajuste de las tablas.
   - `auto`: El ancho de las columnas se ajusta automáticamente basado en el contenido (valor por defecto).
   - `fixed`: Las columnas tienen un ancho fijo, calculado en base al ancho definido en el `th` o `td`.

4. **width**: Define el ancho total de la tabla. Se puede expresar en píxeles, porcentajes u otras unidades CSS.

5. **text-align**: Controla la alineación horizontal del texto dentro de las celdas (`left`, `center`, `right`).

6. **vertical-align**: Define la alineación vertical del contenido dentro de las celdas (`top`, `middle`, `bottom`).

7. **padding**: Añade espacio entre el contenido de la celda y su borde.

8. **border**: Aplica un borde a las celdas de la tabla, filas o columnas. Puede ser usado para definir el estilo, grosor y color del borde.

#### Ejemplo de uso de propiedades de tablas

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Tablas en CSS</title>
    <style>
        .table {
            width: 100%;
            border: 2px solid black;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .table-separate {
            border-spacing: 10px;
        }

        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: left;
        }

        .table-layout-auto {
            table-layout: auto;
        }

        .table-layout-fixed {
            table-layout: fixed;
        }

        .align-right {
            text-align: right;
        }

        .align-center {
            text-align: center;
        }

        .vertical-top {
            vertical-align: top;
        }

        .vertical-middle {
            vertical-align: middle;
        }

        .vertical-bottom {
            vertical-align: bottom;
        }
    </style>
</head>
<body>

    <h2>Tabla con border-collapse: collapse</h2>
    <table class="table">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Celda 6</td>
        </tr>
    </table>

    <h2>Tabla con border-collapse: separate y border-spacing</h2>
    <table class="table table-separate">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Celda 6</td>
        </tr>
    </table>

    <h2>Tabla con table-layout: auto</h2>
    <table class="table table-layout-auto">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Contenido largo en la celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Contenido mucho más largo en la celda 6</td>
        </tr>
    </table>

    <h2>Tabla con table-layout: fixed</h2>
    <table class="table table-layout-fixed">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Contenido largo en la celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Contenido mucho más largo en la celda 6</td>
        </tr>
    </table>

    <h2>Alineación de texto en celdas</h2>
    <table class="table">
        <tr>
            <th class="align-left">Alineado a la izquierda</th>
            <th class="align-center">Centrado</th>
            <th class="align-right">Alineado a la derecha</th>
        </tr>
        <tr>
            <td class="vertical-top">Arriba</td>
            <td class="vertical-middle">Medio</td>
            <td class="vertical-bottom">Abajo</td>
        </tr>
    </table>

</body>
</html>
```

En este ejemplo se muestran diferentes valores aplicados a las propiedades más comunes para tablas:

- **border-collapse**: Muestra cómo los bordes de las celdas se colapsan en una sola línea o permanecen separados.
- **border-spacing**: Demuestra cómo el espaciado entre celdas afecta la apariencia de una tabla cuando los bordes no se colapsan.
- **table-layout**: Comparación entre `auto` y `fixed`, donde `auto` ajusta las columnas según el contenido, y `fixed` distribuye las columnas de manera uniforme.
- **text-align** y **vertical-align**: Muestra cómo alinear el texto horizontal y verticalmente dentro de las celdas.

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Tablas en CSS</title>
    <style>
        .table {
            width: 100%;
            border: 2px solid black;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .table-separate {
            border-spacing: 10px;
        }

        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: left;
        }

        .table-layout-auto {
            table-layout: auto;
        }

        .table-layout-fixed {
            table-layout: fixed;
        }

        .align-right {
            text-align: right;
        }

        .align-center {
            text-align: center;
        }

        .vertical-top {
            vertical-align: top;
        }

        .vertical-middle {
            vertical-align: middle;
        }

        .vertical-bottom {
            vertical-align: bottom;
        }
    </style>
</head>
<body>

    <h2>Tabla con border-collapse: collapse</h2>
    <table class="table">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Celda 6</td>
        </tr>
    </table>

    <h2>Tabla con border-collapse: separate y border-spacing</h2>
    <table class="table table-separate">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Celda 6</td>
        </tr>
    </table>

    <h2>Tabla con table-layout: auto</h2>
    <table class="table table-layout-auto">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Contenido largo en la celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Contenido mucho más largo en la celda 6</td>
        </tr>
    </table>

    <h2>Tabla con table-layout: fixed</h2>
    <table class="table table-layout-fixed">
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
        <tr>
            <td>Contenido largo en la celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
        </tr>
        <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Contenido mucho más largo en la celda 6</td>
        </tr>
    </table>

    <h2>Alineación de texto en celdas</h2>
    <table class="table">
        <tr>
            <th class="align-left">Alineado a la izquierda</th>
            <th class="align-center">Centrado</th>
            <th class="align-right">Alineado a la derecha</th>
        </tr>
        <tr>
            <td class="vertical-top">Arriba</td>
            <td class="vertical-middle">Medio</td>
            <td class="vertical-bottom">Abajo</td>
        </tr>
    </table>

</body>
</html>

[Back to Index](../index.md)