# Tarea 4. Navegación de la peluquería con Flexbox

## Qué debes hacer

Crea `flex.html` y `flex.css` para probar la distribución de la cabecera y los menús del prototipo de la peluquería mediante Flexbox. Reutiliza los contenidos y destinos de navegación previstos en tu memoria de ED.

Define primero el HTML con los elementos siguientes. Una vez preparada esa estructura, resuelve la maquetación modificando únicamente el CSS.

Los códigos **RF** identifican los requisitos funcionales y los códigos **RNF**, los requisitos no funcionales de esta tarea.

## Requisitos funcionales

- **RF01. Cabecera.** Incluye un `header` con el nombre de la peluquería y una barra de navegación con clase `barra1`, formada por al menos tres enlaces.
- **RF02. Menú lateral.** Incluye un `aside` con al menos tres enlaces a opciones del prototipo.
- **RF03. Destinos.** Los enlaces de ambos menús llevarán a secciones o páginas existentes. Puedes reutilizar las páginas anteriores o crear secciones con contenido ficticio en `flex.html`.

## Requisitos no funcionales

- **RNF01. HTML estable.** Tras preparar el contenido y los enlaces, conserva el HTML sin añadir ni eliminar elementos, ni cambiar sus clases o su orden para conseguir la distribución solicitada.
- **RNF02. Cabecera.** Con un ancho de ventana de al menos 768 píxeles, la cabecera tendrá una altura total de `100px`, incluidos borde y relleno. Su borde será rojo, sólido y de `2px`; el texto será azul y el fondo amarillo.
- **RNF03. Título y barra.** Distribuye la cabecera mediante Flexbox. El nombre de la peluquería quedará centrado horizontal y verticalmente en su zona, por encima de la barra. Ambos elementos tendrán espacios separados, sin superponerse.
- **RNF04. Barra superior.** La barra `barra1` utilizará Flexbox. A partir de 768 píxeles de ancho, sus enlaces aparecerán en una sola fila, en orden visual inverso al HTML y con el conjunto alineado al lado izquierdo de la cabecera.
- **RNF05. Menú lateral.** El menú utilizará Flexbox para mostrar sus enlaces en columna y en orden visual inverso al HTML. Su ancho se ajustará al contenido, sin ocupar todo el ancho disponible.
- **RNF06. Técnica.** Toda la distribución se resolverá con Flexbox y CSS propio. No uses `position` en ninguna variante, `float`, Grid, tablas para maquetar ni frameworks. Los márgenes y rellenos podrán separar elementos, pero no simular su distribución.
- **RNF07. Adaptación y comprobación.** Por debajo de 768 píxeles, permite que la cabecera crezca y los enlaces ocupen varias filas si lo necesitan. Valida HTML y CSS y corrige los errores. Prueba anchos de 375, 768 y 1280 píxeles y zoom al 100 % y al 200 %: los enlaces deben seguir siendo legibles y utilizables, sin solapamientos ni desplazamiento horizontal de la página.

## Qué debes entregar

1. **`flex.html` y `flex.css`**, con los enlaces funcionando y el orden del HTML conservado durante la maquetación.
2. **Un índice en el `README.md` del proyecto**, con una entrada enlazada a la reflexión de cada tarea realizada.
3. **La reflexión de esta tarea en el mismo `README.md`**, explicando brevemente:
   - Qué has aprendido y qué consigue cada regla relacionada con Flexbox que has utilizado.
   - Qué dificultades has encontrado y cómo las has resuelto.
   - Qué has comprobado: menús, orden visual, tamaños de ventana, zoom y validación. Incluye una captura antes de aplicar Flexbox y otra del resultado final; no se pide una captura por regla.
   - Qué diferencia observas entre el orden visual de los enlaces y su recorrido al utilizar la tecla Tab. Incluye las fuentes y declara el uso de IA, si lo ha habido.

## Rúbrica de evaluación

| Calificación | Criterio |
|---|---|
| 0 | **No entregado.** |
| 3 | **La mayoría de las respuestas son incorrectas.** La tarea presenta errores importantes que muestran una comprensión insuficiente de los contenidos o dificultades para aplicar los procedimientos trabajados. |
| 6 | **La mayoría de las respuestas son correctas.** Se demuestra una comprensión general de los contenidos y una aplicación adecuada de los procedimientos, aunque quedan errores u omisiones por corregir. |
| 9 | **Todo correcto.** La tarea responde de forma completa y correcta a lo solicitado, con explicaciones claras y procedimientos bien aplicados. |
| 10 | **Todo correcto y con una aportación extra.** Además de resolver correctamente la tarea, el alumno incorpora una aportación propia y pertinente que enriquece el trabajo, como un ejemplo, una comprobación adicional o una reflexión razonada. |
