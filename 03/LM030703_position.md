### LM030703-position-property.md

[inicio](./LM03.md)

La propiedad `position` en CSS se utiliza para controlar la colocación de los elementos en una página web, permitiendo que se ubiquen de diferentes maneras en relación con otros elementos o con la ventana del navegador. Los valores más comunes de `position` son `static`, `relative`, `absolute`, `fixed`, y `sticky`. A continuación se explica cómo funciona cada valor y se proporciona un ejemplo práctico.

#### Valores de la propiedad `position`

- **static**: Es el valor por defecto. Los elementos con `position: static` se colocan siguiendo el flujo normal del documento y no se ven afectados por las propiedades de desplazamiento (`top`, `left`, `right`, `bottom`).

- **relative**: Desplaza un elemento en relación con su posición original dentro del flujo del documento. Aunque el elemento se mueve, su posición original sigue siendo ocupada por él.

- **absolute**: Posiciona un elemento en relación con su contenedor más cercano que tenga `position` diferente de `static`. En estos ejemplos, si no existe ese ancestro, utiliza el bloque de contención inicial, no necesariamente `body`. Sale del flujo normal y deja de reservar su espacio.

- **fixed**: Fija un elemento en relación con la ventana del navegador. Este elemento no se moverá cuando el usuario haga scroll en la página.

- **sticky**: Combina las características de `relative` y `fixed`. Conserva su espacio en el flujo. Al hacer scroll, sus desplazamientos se ajustan para respetar un umbral, como `top: 10px`, mientras su contenedor lo permite. No cambia su valor a `fixed` y sale de la vista al alcanzar el límite de su contenedor.

#### z-index

La propiedad `z-index` define el orden de apilamiento de los elementos cuando se superponen. Dentro del mismo contexto de apilamiento, un valor mayor coloca la caja por delante de otra con un valor menor. Se aplica a cajas posicionadas y también a elementos de Flexbox y Grid. Para empezar, compara dos cajas posicionadas con índices positivos 1 y 2.

#### Ejemplos de cada valor de `position`

[ver en el navegador](./position/LM0307_position.html)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de position</title>
    <style>
        body{
            padding-top: 7em;
        }
        .header{
            height: 200px;
            background-color: rgb(246, 233, 218);
        }
        .container {
            width: 100%;
            height: auto;
            position: relative;
            background-color: bisque;
        }
        /* STATIC es el comportamiento por defecto, la caja se encuentra en su lugar habitual en el flujo */
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
            z-index: 1;
            left: 30px;
            top: 20px;
            text-align: center;
            line-height: 100px;
        }
        .absolute-box {
            width: 100px;
            height: 100px;
            background-color: rgb(153, 223, 229);
            position: absolute;
            z-index: 2;
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
            right: 10px;
            top: 10px;
            text-align: center;
            line-height: 100px;
        }
        .sticky-box {
            width: 100px;
            height: 100px;
            background-color: purple;
            position: sticky;
            top: 10px;
            /* top: 400px; */
            /* modifica el top a 400 para destacar el funcionamiento */
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <div class="header"><p>HEADER</p>
    <h2>Prueba: multiplica cada uno de los tipos de cajas para ver el efecto, algunos position mantienen el flujo y otros se salen del flujo.</h2></div>
    <h2>Pruebas de posición, flujo y apilamiento</h2>
    <ol>
        <li>Cambia top y left de relative y absolute. Comprueba desde dónde se cuentan y qué hueco conserva cada caja.</li>
        <li>Haz scroll: fixed conserva su lugar en la ventana; sticky se limita por su umbral y por su contenedor. Continúa hasta el texto posterior al contenedor.</li>
        <li>Para superponer las cajas verde y celeste, prueba left: 80px y top: 150px en .absolute-box. Compara z-index: 1 y 2 e intercambia esos valores entre ambas cajas.</li>
    </ol>
    <div class="container"><p>CONTAINER</p>
        <div class="static-box">static</div>
        <div class="relative-box">relative</div>
        <div class="absolute-box">absolute</div>
        <div class="fixed-box">fixed</div>
        <div class="sticky-box">sticky</div>
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
        <p>Scroll para ver el efecto de "sticky" y "fixed".</p>    
    </div>
    
    <div style="min-height: 70vh"><p>Ya has pasado el final del contenedor: sticky sale con él; fixed continúa en la ventana.</p></div>
</body>
</html>
```

En este ejemplo:

- **Cuadro rojo (static)**: Este cuadro está en su posición por defecto, dentro del flujo normal del documento.
- **Cuadro verde (relative)**: Este cuadro se ha movido 30px a la derecha y 20px hacia abajo desde su posición original, pero el espacio que ocupa su posición original sigue respetado.
- **Cuadro celeste (absolute)**: Este cuadro se ha posicionado de forma absoluta respecto a su contenedor `.container`, moviéndose 150px hacia la derecha y 50px hacia abajo.
- **Cuadro naranja (fixed)**: Este cuadro queda a 10px de los bordes superior y derecho de la ventana, y no se mueve al hacer scroll.
- **Cuadro morado (sticky)**: Este cuadro conserva su hueco. Al llegar al umbral superior de 10px, se mantiene allí mientras su contenedor lo permite; al pasar su final, sale con él.

### RECURSOS

[inicio](./LM03.md)

[vídeo](https://www.youtube.com/watch?v=_e0ddNlc0Y8)
