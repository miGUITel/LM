# Elementos vacíos y cierres: HTML y XML

En HTML, elementos como `p`, `div`, `audio` y `video` pueden contener contenido. En nuestras prácticas escribimos sus etiquetas de apertura y cierre para que el anidamiento sea claro. HTML permite omitir algunas etiquetas en situaciones concretas; esa posibilidad no se aplica a todos los elementos.

```html
<p>Un párrafo con <strong>información importante</strong>.</p>
<video src="recursos/video/oso.mp4" controls></video>
```

Los elementos vacíos de HTML, como `img`, `br`, `hr`, `input`, `meta` y `link`, no admiten contenido ni etiqueta de cierre:

```html
<img src="foto.jpg" alt="Descripción de la fotografía">
<meta charset="utf-8">
```

En HTML, la barra final de `<img ... />` no cierra el elemento: es innecesaria y no tiene ese efecto. No convierte `<video />` en un vídeo correctamente cerrado.

XML utiliza otras reglas. Un elemento sin contenido puede escribirse como `<imagen />` o como `<imagen></imagen>`. No deben confundirse estas reglas con las de un documento servido como HTML.

Referencia: [sintaxis de HTML](https://html.spec.whatwg.org/multipage/syntax.html).
