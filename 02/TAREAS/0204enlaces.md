# Taller 4. Listas y navegación

[Volver a los talleres](README.md)

## Qué vais a hacer

Conectaréis las tres páginas del proyecto y organizaréis los intereses con listas. No se crean cinco páginas ni se añaden estilos para colocar los elementos.

## Pasos

1. Cread `solicitud.html` con cabecera propia, `header`, `main` y `footer`. Escribid un encabezado y una frase sobre la finalidad de la solicitud. El formulario se construirá en su taller.
2. Añadid a las tres páginas un `nav` con una lista de enlaces a **Ficha**, **Intereses** y **Solicitud**. Conservad el mismo orden y textos. Podéis indicar la página actual con `aria-current="page"` en su enlace.
3. En `intereses.html`, añadid una lista no ordenada de aficiones y una ordenada de objetivos. Explicad por qué una tiene orden y la otra no.
4. Incluid un enlace externo relacionado con un interés. Su texto debe indicar el destino; evitad «pincha aquí». No es necesario abrir otra pestaña.
5. En `index.html`, dad un identificador único a la sección de presentación y añadid un enlace que lleve a ella. Comprobad que lo escrito después de `#` coincide con ese identificador.
6. Recorred los tres enlaces del menú desde cada una de las tres páginas. Probad también los enlaces externo e interno. Registrad el resultado en el `README.md`.

## Qué se incorpora y entrega

Las tres páginas conectadas, listas y enlaces, conservando la multimedia. Entregad según la [entrega común](0200_entrega.md), como `t04`. La solicitud todavía puede ser una presentación sin formulario.

## Cómo comprobarlo y qué se valorará

- Se llega a cualquier página desde las otras, mediante rutas relativas.
- Se distinguen listas ordenadas y no ordenadas, correctamente anidadas.
- Los enlaces tienen textos comprensibles y destinos que funcionan.
- La navegación funciona con el teclado y desde el ZIP extraído.

**Ampliación opcional:** añadid una lista de términos con `dl`, `dt` y `dd` para aclarar conceptos de la ficha y explicad por qué es apropiada.
