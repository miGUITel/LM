Aquí tienes un ejemplo en HTML con CSS interno que muestra los selectores CSS básicos, de agrupación, descendiente, hijo, adyacente y hermano. Cada elemento HTML incluye texto explicativo para describir el selector que se le aplica y cómo afecta su formato.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplos de Selectores CSS</title>
    <style>
        /* Selector básico: aplica estilo a todos los elementos <h1> */
        h1 {
            color: darkblue;
            font-size: 24px;
            text-align: center;
        }

        /* Selector de agrupación: aplica el mismo estilo a <h2> y <h3> */
        h2, h3 {
            color: darkgreen;
            font-size: 20px;
            margin-top: 20px;
            text-align: left;
        }

        /* Selector descendiente: aplica estilo a <p> dentro de <section> */
        section p {
            color: darkred;
            font-style: italic;
        }

        /* Selector hijo directo: aplica estilo a <p> que es hijo directo de <article> */
        article > p {
            background-color: lightgray;
            padding: 10px;
            border-radius: 5px;
        }

        /* Selector adyacente: aplica estilo al <p> que sigue inmediatamente a un <h2> */
        h2 + p {
            color: darkorange;
            font-weight: bold;
        }

        /* Selector de hermano general: aplica estilo a todos los <p> hermanos de <h3> */
        h3 ~ p {
            border-left: 4px solid darkgray;
            padding-left: 10px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Ejemplo de Selectores CSS</h1>

    <!-- Selector Básico -->
    <section>
        <h2>Selector Básico</h2>
        <p>Este texto está dentro de un &lt;h1&gt; y se aplica un color y tamaño específico usando un selector básico.</p>
    </section>

    <!-- Selector de Agrupación -->
    <section>
        <h2>Selector de Agrupación</h2>
        <h3>Este título <h2> y el siguiente <h3> comparten el mismo estilo.</h3>
        <p>Usamos un selector de agrupación para aplicar el mismo estilo a ambos elementos <h2> y <h3>.</p>
    </section>

    <!-- Selector Descendiente -->
    <section>
        <h2>Selector Descendiente</h2>
        <p>Este párrafo está estilizado con un selector descendiente, ya que está dentro de una &lt;section&gt;.</p>
    </section>

    <!-- Selector Hijo Directo -->
    <article>
        <h2>Selector Hijo Directo</h2>
        <p>Este párrafo es un hijo directo de &lt;article&gt; y tiene un fondo gris claro, con padding y bordes redondeados.</p>
        <div>
            <p>Este párrafo no es un hijo directo de &lt;article&gt;, por lo que el estilo no se aplica.</p>
        </div>
    </article>

    <!-- Selector Adyacente -->
    <section>
        <h2>Selector Adyacente</h2>
        <p>Este párrafo sigue inmediatamente al &lt;h2&gt;, por lo que se le aplica el estilo de color naranja y negrita.</p>
    </section>

    <!-- Selector de Hermano General -->
    <section>
        <h3>Selector de Hermano General</h3>
        <p>Este párrafo es un hermano de &lt;h3&gt;, así que recibe un borde gris y padding.</p>
        <p>Otro hermano de &lt;h3&gt;, también estilizado con el mismo borde y padding.</p>
    </section>
</body>
</html>
```

### Explicación
- **Selector Básico**: Aplica estilo directamente al elemento seleccionado (`h1`).
- **Selector de Agrupación**: Permite aplicar el mismo estilo a múltiples elementos (`h2, h3`).
- **Selector Descendiente**: Aplica estilo a elementos que están dentro de otro elemento, sin importar la profundidad (`section p`).
- **Selector Hijo Directo**: Estiliza solo a los elementos que son hijos directos del contenedor (`article > p`).
- **Selector Adyacente**: Estiliza el elemento que sigue inmediatamente al especificado (`h2 + p`).
- **Selector de Hermano General**: Aplica estilo a todos los elementos hermanos que siguen al elemento especificado (`h3 ~ p`).
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplos de Selectores CSS</title>
    <style>
        /* Selector básico: aplica estilo a todos los elementos <h1> */
        h1 {
            color: darkblue;
            font-size: 24px;
            text-align: center;
        }

        /* Selector de agrupación: aplica el mismo estilo a <h2> y <h3> */
        h2, h3 {
            color: darkgreen;
            font-size: 20px;
            margin-top: 20px;
            text-align: left;
        }

        /* Selector descendiente: aplica estilo a <p> dentro de <section> */
        section p {
            color: darkred;
            font-style: italic;
        }

        /* Selector hijo directo: aplica estilo a <p> que es hijo directo de <article> */
        article > p {
            background-color: lightgray;
            padding: 10px;
            border-radius: 5px;
            color: red;
        }

        /* Selector adyacente: aplica estilo al <p> que sigue inmediatamente a un <h2> */
        h2 + p {
            color: blue;
            font-weight: bold;
        }

        /* Selector de hermano general: aplica estilo a todos los <p> hermanos de <h3> */
        h3 ~ p {
            border: 4px solid darkgray;
            padding-left: 20px;
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <h1>Ejemplo de Selectores CSS</h1>

    <!-- Selector Básico -->
    <section>
        <h2>Selector Básico</h2>
        <p>Este texto está dentro de un &lt;h1&gt; y se aplica un color y tamaño específico usando un selector básico.</p>
    </section>

    <!-- Selector de Agrupación -->
    <section>
        <h2>&lt;h2&gt; Selector de Agrupación. Este título &lt;h2&gt; y el siguiente &lt;h3&gt; comparten el mismo estilo.</h2>
        <h3>Título con &lt;h3&gt;</h3>
        <p>Usamos un selector de agrupación para aplicar el mismo estilo a ambos elementos h2 y h3.</p>
    </section>

    <!-- Selector Descendiente -->
    <section>
        <h2>Selector Descendiente</h2>
        <p>Este párrafo está estilizado con un selector descendiente, ya que está dentro de una &lt;section&gt;.</p>
    </section>

    <!-- Selector Hijo Directo -->
    <article>
        <h2>Selector Hijo Directo</h2>
        <p>Este párrafo es un hijo directo de &lt;article&gt; y tiene un fondo gris claro, con padding y bordes redondeados.</p>
        <div>
            <p>Este párrafo no es un hijo directo de &lt;article&gt;, por lo que el estilo no se aplica.</p>
        </div>
    </article>

    <!-- Selector Adyacente -->
    <section>
        <h2>Selector Adyacente</h2>
        <p>Este párrafo sigue inmediatamente al &lt;h2&gt;, por lo que se le aplica el estilo de color naranja y negrita.</p>
    </section>

    <!-- Selector de Hermano General -->
    <section>
        <h3>Selector de Hermano General</h3>
        <p>Este párrafo es un hermano de &lt;h3&gt;, así que recibe un borde gris y padding.</p>
        <p>Otro hermano de &lt;h3&gt;, también estilizado con el mismo borde y padding.</p>
    </section>
</body>
</html>

Este código muestra cómo aplicar los diferentes selectores en CSS y ayuda a ver sus efectos con ejemplos concretos en una estructura semántica.