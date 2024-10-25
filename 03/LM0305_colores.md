Aquí tienes un ejemplo en HTML con CSS interno para demostrar cómo aplicar colores de fondo a varios `<div>` usando codificación en hexadecimal, RGB y con palabra clave. Cada `<div>` muestra un texto explicando la regla CSS utilizada para el color:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colores en CSS</title>
    <style>
        /* Hexadecimal */
        .hex-red {
            background-color: #FF0000;
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .hex-green {
            background-color: #00FF00;
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .hex-orange {
            background-color: #FFA500;
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }

        /* RGB */
        .rgb-red {
            background-color: rgb(255, 0, 0);
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .rgb-green {
            background-color: rgb(0, 255, 0);
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .rgb-orange {
            background-color: rgb(255, 165, 0);
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }

        /* Palabra clave */
        .keyword-red {
            background-color: red;
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .keyword-green {
            background-color: green;
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .keyword-orange {
            background-color: orange;
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Ejemplos de Colores en CSS</h1>

    <!-- Colores en Hexadecimal -->
    <div class="hex-red">Color en Hexadecimal: #FF0000 (Rojo)</div>
    <div class="hex-green">Color en Hexadecimal: #00FF00 (Verde)</div>
    <div class="hex-orange">Color en Hexadecimal: #FFA500 (Naranja)</div>

    <!-- Colores en RGB -->
    <div class="rgb-red">Color en RGB: rgb(255, 0, 0) (Rojo)</div>
    <div class="rgb-green">Color en RGB: rgb(0, 255, 0) (Verde)</div>
    <div class="rgb-orange">Color en RGB: rgb(255, 165, 0) (Naranja)</div>

    <!-- Colores por Palabra Clave -->
    <div class="keyword-red">Color por Palabra Clave: red (Rojo)</div>
    <div class="keyword-green">Color por Palabra Clave: green (Verde)</div>
    <div class="keyword-orange">Color por Palabra Clave: orange (Naranja)</div>
</body>
</html>
```
[ver en el navedador](./LM0305_colores.html)

Este código crea un conjunto de `<div>` en tres secciones diferentes: colores en hexadecimal, en RGB y usando palabras clave. Cada `<div>` muestra el color aplicado y el código utilizado para lograrlo, permitiendo una clara comparación entre las tres formas de codificación de color en CSS.

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colores en CSS</title>
    <style>
        /* Hexadecimal */
        .hex-red {
            background-color: #FF0000;
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .hex-green {
            background-color: #00FF00;
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .hex-orange {
            background-color: #FFA500;
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }

        /* RGB */
        .rgb-red {
            background-color: rgb(255, 0, 0);
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .rgb-green {
            background-color: rgb(0, 255, 0);
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .rgb-orange {
            background-color: rgb(255, 165, 0);
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }

        /* Palabra clave */
        .keyword-red {
            background-color: red;
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .keyword-green {
            background-color: green;
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .keyword-orange {
            background-color: orange;
            color: black;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Ejemplos de Colores en CSS</h1>

    <!-- Colores en Hexadecimal -->
    <div class="hex-red">Color en Hexadecimal: #FF0000 (Rojo)</div>
    <div class="hex-green">Color en Hexadecimal: #00FF00 (Verde)</div>
    <div class="hex-orange">Color en Hexadecimal: #FFA500 (Naranja)</div>

    <!-- Colores en RGB -->
    <div class="rgb-red">Color en RGB: rgb(255, 0, 0) (Rojo)</div>
    <div class="rgb-green">Color en RGB: rgb(0, 255, 0) (Verde)</div>
    <div class="rgb-orange">Color en RGB: rgb(255, 165, 0) (Naranja)</div>

    <!-- Colores por Palabra Clave -->
    <div class="keyword-red">Color por Palabra Clave: red (Rojo)</div>
    <div class="keyword-green">Color por Palabra Clave: green (Verde)</div>
    <div class="keyword-orange">Color por Palabra Clave: orange (Naranja)</div>
</body>
</html>