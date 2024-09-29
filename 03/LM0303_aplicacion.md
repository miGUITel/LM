[Volver al índice](../index.md)

# LM0303 Aplicación: Externo, Interno, Inline

En esta página se describen las tres maneras principales de aplicar CSS a un documento HTML: mediante hojas de estilo **externas**, **internas** o **inline** (en línea). Cada método tiene sus propias características, ventajas y desventajas, y es importante saber cuándo utilizar cada uno de ellos.

### 1. Hojas de estilo externas

Una hoja de estilo externa es un archivo CSS separado que se enlaza al documento HTML utilizando la etiqueta `<link>` dentro del `<head>`. Este enfoque es el más recomendado cuando se trabaja en proyectos grandes, ya que permite mantener el código HTML limpio y centralizar todos los estilos en un solo archivo o en varios archivos CSS.

#### Ejemplo de enlace a una hoja de estilo externa:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo con CSS externo</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Mi sitio web</h1>
    <p>Este es un ejemplo de una hoja de estilo externa.</p>
</body>
</html>
```

En este ejemplo, el archivo `estilos.css` contiene todas las reglas CSS que se aplicarán a la página. Esto facilita la reutilización de estilos en múltiples páginas, ya que un solo archivo de estilo puede ser enlazado desde varios documentos HTML.

#### Ventajas:
- **Reutilización**: Una hoja de estilo externa puede aplicarse a muchas páginas diferentes, garantizando un diseño coherente.
- **Mantenimiento sencillo**: Al tener los estilos separados del HTML, es más fácil modificar o actualizar el diseño sin tener que tocar el código estructural de las páginas.
- **Carga más eficiente**: Las hojas de estilo externas se pueden cachear, lo que mejora el tiempo de carga del sitio.

#### Desventajas:
- **Dependencia de la conexión**: Si el archivo CSS externo no está disponible (por ejemplo, por un error en la conexión), la página puede perder su formato.

### 2. Hojas de estilo internas

Una hoja de estilo interna se escribe dentro de la propia página HTML, en el `<head>`, utilizando la etiqueta `<style>`. Este enfoque es útil cuando se desea aplicar estilos específicos a una sola página o cuando no es necesario reutilizar los estilos en otros documentos.

#### Ejemplo de una hoja de estilo interna:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo con CSS interno</title>
    <style>
        body {
            background-color: #f0f0f0;
            color: #333;
        }
        h1 {
            font-size: 24px;
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Mi sitio web</h1>
    <p>Este es un ejemplo de una hoja de estilo interna.</p>
</body>
</html>
```

En este caso, las reglas CSS están contenidas directamente en el archivo HTML, dentro de la sección `<style>`. Esto puede ser útil para proyectos pequeños o para páginas que tienen estilos únicos que no se repetirán en otros documentos.

#### Ventajas:
- **Facilidad de uso en proyectos pequeños**: Es útil cuando se necesitan definir estilos para una sola página o cuando no es necesario un archivo CSS externo.
- **Independencia**: No depende de un archivo CSS externo, por lo que los estilos siempre estarán disponibles.

#### Desventajas:
- **Mantenimiento complicado**: En proyectos grandes, tener estilos internos en cada página puede dificultar la actualización y el mantenimiento, ya que cualquier cambio en el diseño implicaría editar cada archivo HTML individualmente.
- **No reutilizable**: Los estilos no pueden aplicarse fácilmente a otras páginas, lo que puede llevar a duplicación de código.

### 3. Estilos en línea (inline)

Los estilos inline o en línea se aplican directamente a un elemento HTML utilizando el atributo `style`. Este enfoque es el menos recomendado, ya que mezcla el contenido HTML con el formato visual, lo que puede hacer que el código sea difícil de mantener.

#### Ejemplo de estilo inline:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo con CSS inline</title>
</head>
<body>
    <h1 style="color: blue; font-size: 24px;">Mi sitio web</h1>
    <p style="color: #333;">Este es un ejemplo de estilo en línea.</p>
</body>
</html>
```

En este ejemplo, los estilos para el encabezado `h1` y el párrafo `p` están definidos directamente en los atributos `style` de cada elemento. Aunque este método puede ser útil para aplicar estilos únicos y rápidos a un elemento en particular, no es una práctica recomendada para sitios grandes o complejos.

#### Ventajas:
- **Aplicación rápida**: Se pueden aplicar estilos directamente a elementos individuales sin necesidad de crear una hoja de estilo.
- **Útil para ajustes específicos**: En ocasiones, se puede usar para ajustes únicos o excepcionales donde no se necesita modificar toda la hoja de estilo.

#### Desventajas:
- **Difícil de mantener**: Tener los estilos distribuidos a lo largo de un documento HTML hace que sea complicado realizar cambios globales en el diseño.
- **Malas prácticas**: Va en contra del principio de separación de estructura y estilo, lo que puede llevar a un código desorganizado.

### Comparativa entre los tres métodos

| Método    | Ventajas                            | Desventajas                         |
|-----------|-------------------------------------|-------------------------------------|
| Externo   | Reutilizable, fácil de mantener, mejora la carga | Depende de la disponibilidad del archivo CSS |
| Interno   | Ideal para una página específica, independiente | Difícil de mantener en proyectos grandes |
| Inline    | Rápido para casos aislados          | Difícil de mantener, no reutilizable |

### Conclusión

La manera en que se aplica CSS depende del contexto y del tamaño del proyecto. Las hojas de estilo **externas** son ideales para proyectos grandes donde se busca consistencia y facilidad de mantenimiento, mientras que los estilos **internos** o **en línea** pueden ser útiles en casos más simples o específicos. Sin embargo, siempre es recomendable seguir la práctica de mantener separados el contenido y el estilo para garantizar un código más limpio y fácil de mantener.

[Volver al índice](../index.md)