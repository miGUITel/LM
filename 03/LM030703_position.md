### LM030703-position-property.md

[inicio](./LM03.md)

La propiedad `position` en CSS se utiliza para controlar la colocación de los elementos en una página web, permitiendo que se ubiquen de diferentes maneras en relación con otros elementos o con la ventana del navegador. Los valores más comunes de `position` son `static`, `relative`, `absolute`, `fixed`, y `sticky`. A continuación se explica cómo funciona cada valor y se proporciona un ejemplo práctico.

#### Valores de la propiedad `position`

- **static**: Es el valor por defecto. Los elementos con `position: static` se colocan siguiendo el flujo normal del documento y no se ven afectados por las propiedades de desplazamiento (`top`, `left`, `right`, `bottom`).

- **relative**: Desplaza un elemento en relación con su posición original dentro del flujo del documento. Aunque el elemento se mueve, su posición original sigue siendo ocupada por él.

- **absolute**: Posiciona un elemento en relación con su contenedor más cercano que tenga `position` diferente de `static`. Si no existe tal contenedor, se posiciona en relación con el `body`.

- **fixed**: Fija un elemento en relación con la ventana del navegador. Este elemento no se moverá cuando el usuario haga scroll en la página.

- **sticky**: Combina las características de `relative` y `fixed`. El elemento se comporta como `relative` hasta que el usuario hace scroll más allá de un umbral especificado, momento en el cual pasa a comportarse como `fixed`.

#### z-index

La propiedad `z-index` define el orden de apilamiento de los elementos cuando se superponen. Los elementos con un valor mayor de `z-index` aparecerán por encima de otros con un valor menor. Esta propiedad solo funciona con elementos que tienen un `position` distinto de `static`.

#### Ejemplos de cada valor de `position`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de position</title>
    <style>
        .container {
            width: 100%;
            height: 400px;
            position: relative;
        }
        .static-box {
            width: 100px;
            height: 100px;
            background-color: red;
            position: static;
            text-align: center;
            line-height: 100px;
        }
        .relative-box {
            width: 100px;
            height: 100px;
            background-color: green;
            position: relative;
            left: 30px;
            top: 20px;
            text-align: center;
            line-height: 100px;
        }
        .absolute-box {
            width: 100px;
            height: 100px;
            background-color: blue;
            position: absolute;
            left: 150px;
            top: 50px;
            text-align: center;
            line-height: 100px;
        }
        .fixed-box {
            width: 100px;
            height: 100px;
            background-color: orange;
            position: fixed;
            left: 300px;
            top: 100px;
            text-align: center;
            line-height: 100px;
        }
        .sticky-box {
            width: 100px;
            height: 100px;
            background-color: purple;
            position: sticky;
            top: 10px;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="static-box">static</div>
        <div class="relative-box">relative</div>
        <div class="absolute-box">absolute</div>
        <div class="fixed-box">fixed</div>
        <div class="sticky-box">sticky</div>
    </div>
    <p>Scroll para ver el efecto de "sticky" y "fixed".</p>
</body>
</html>
```

En este ejemplo:

- **Cuadro rojo (static)**: Este cuadro está en su posición por defecto, dentro del flujo normal del documento.
- **Cuadro verde (relative)**: Este cuadro se ha movido 30px a la derecha y 20px hacia abajo desde su posición original, pero el espacio que ocupa su posición original sigue respetado.
- **Cuadro azul (absolute)**: Este cuadro se ha posicionado de forma absoluta respecto a su contenedor `.container`, moviéndose 150px hacia la derecha y 50px hacia abajo.
- **Cuadro naranja (fixed)**: Este cuadro está fijado a 300px a la derecha y 100px hacia abajo en la ventana del navegador, y no se moverá al hacer scroll.
- **Cuadro morado (sticky)**: Este cuadro se comporta como `relative` hasta que el usuario hace scroll más allá de los 10px desde la parte superior de la ventana, momento en el cual se comporta como `fixed` y permanece visible.



<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de position</title>
    <style>
        .container {
            width: 100%;
            height: 400px;
            position: relative;
        }
        .static-box {
            width: 100px;
            height: 100px;
            background-color: red;
            position: static;
            text-align: center;
            line-height: 100px;
        }
        .relative-box {
            width: 100px;
            height: 100px;
            background-color: green;
            position: relative;
            left: 30px;
            top: 20px;
            text-align: center;
            line-height: 100px;
        }
        .absolute-box {
            width: 100px;
            height: 100px;
            background-color: blue;
            position: absolute;
            left: 150px;
            top: 50px;
            text-align: center;
            line-height: 100px;
        }
        .fixed-box {
            width: 100px;
            height: 100px;
            background-color: orange;
            position: fixed;
            left: 800px;
            top: 100px;
            text-align: center;
            line-height: 100px;
        }
        .sticky-box {
            width: 100px;
            height: 100px;
            background-color: purple;
            position: sticky;
            top: 10px;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="static-box">static</div>
        <div class="relative-box">relative</div>
        <div class="absolute-box">absolute</div>
        <div class="fixed-box">fixed</div>
        <div class="sticky-box">sticky</div>
    </div>
    <p>Scroll para ver el efecto de "sticky" y "fixed".</p>
</body>
</html>

"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ligula at tortor convallis vulputate sit amet et arcu. Ut venenatis, nulla in tristique cursus, nisi magna ultricies neque, vel suscipit est leo in odio. Aliquam erat volutpat. Cras tincidunt neque sed nulla interdum, ac dictum turpis ultricies. Integer condimentum libero et ante tincidunt sollicitudin. Curabitur quis ipsum a odio fermentum congue sed a nisi. Nulla facilisi. Donec pulvinar nisi ut augue gravida, vel dictum ligula porttitor. Suspendisse id dictum leo, non dapibus risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ligula at tortor convallis vulputate sit amet et arcu. Ut venenatis, nulla in tristique cursus, nisi magna ultricies neque, vel suscipit est leo in odio. Aliquam erat volutpat. Cras tincidunt neque sed nulla interdum, ac dictum turpis ultricies. Integer condimentum libero et ante tincidunt sollicitudin. Curabitur quis ipsum a odio fermentum congue sed a nisi. Nulla facilisi. Donec pulvinar nisi ut augue gravida, vel dictum ligula porttitor. Suspendisse id dictum leo, non dapibus risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ligula at tortor convallis vulputate sit amet et arcu. Ut venenatis, nulla in tristique cursus, nisi magna ultricies neque, vel suscipit est leo in odio. Aliquam erat volutpat. Cras tincidunt neque sed nulla interdum, ac dictum turpis ultricies. Integer condimentum libero et ante tincidunt sollicitudin. Curabitur quis ipsum a odio fermentum congue sed a nisi. Nulla facilisi. Donec pulvinar nisi ut augue gravida, vel dictum ligula porttitor. Suspendisse id dictum leo, non dapibus risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ligula at tortor convallis vulputate sit amet et arcu. Ut venenatis, nulla in tristique cursus, nisi magna ultricies neque, vel suscipit est leo in odio. Aliquam erat volutpat. Cras tincidunt neque sed nulla interdum, ac dictum turpis ultricies. Integer condimentum libero et ante tincidunt sollicitudin. Curabitur quis ipsum a odio fermentum congue sed a nisi. Nulla facilisi. Donec pulvinar nisi ut augue gravida, vel dictum ligula porttitor. Suspendisse id dictum leo, non dapibus risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

[inicio](./LM03.md)
