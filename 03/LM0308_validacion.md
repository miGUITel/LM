[Volver al índice](./LM03.md)

# Comprobación de HTML y CSS

Una página puede verse bien y contener errores. Comprueba por separado su HTML y su CSS, corrige los mensajes relevantes y revisa después el resultado en el navegador.

## Herramientas

- [Nu HTML Checker](https://validator.w3.org/nu/): comprueba el HTML mediante una dirección pública, un archivo o código pegado.
- [Validador CSS del W3C](https://jigsaw.w3.org/css-validator/): comprueba el CSS mediante una dirección, un archivo o código pegado. Para una hoja externa, puedes cargar directamente el archivo CSS.

Si tus archivos están solo en tu ordenador, utiliza la carga de archivo o el código pegado; una dirección local no es accesible para el servicio.

## Prueba breve

1. Copia este HTML en un archivo y compruébalo con Nu HTML Checker:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Prueba de validación</title>
</head>
<body>
    <h1>Servicios de peluquería</h2>
    <p>Corte y peinado.</p>
</body>
</html>
```

2. Localiza el mensaje y la línea del encabezado. Corrige su cierre y repite la comprobación. Un solo error puede provocar varios mensajes relacionados.
3. Pega este CSS en el validador CSS:

```css
p {
    color: #12zz45;
}
```

4. Sustituye el color inválido por `blue` y vuelve a comprobarlo.

## Interpretar el resultado

- **Error:** el código incumple una regla del lenguaje. Localiza la causa; el navegador puede haber intentado recuperarse de ella.
- **Advertencia:** pide revisar un aspecto del código; no significa por sí sola que la declaración sea inválida.
- **Comprobación visual:** prueba anchura de ventana, zoom, legibilidad y distribución. Los validadores no comprueban todos los requisitos de una tarea ni garantizan que el diseño sea accesible o tenga el aspecto esperado.

[Volver al índice](./LM03.md)
