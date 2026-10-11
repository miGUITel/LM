# Tarea 2. Cinco versiones de la misma pantalla

## Qué debes hacer

Prepara cinco versiones de una pantalla del prototipo de la peluquería. Todas mostrarán el mismo contenido HTML, pero cada una tendrá su propia hoja CSS. El objetivo es comparar cómo cambia la presentación al cambiar los estilos.

Reutiliza el contenido de la tarea anterior y complétalo según los requisitos siguientes antes de crear las cinco versiones.

Los códigos **RF** identifican los requisitos funcionales y los códigos **RNF**, los requisitos no funcionales de esta tarea.

## Requisitos funcionales

- **RF01. Contenido común.** La pantalla identificará la peluquería e incluirá encabezados `h1`, `h2` y `h3`, párrafos sobre la gestión de citas y al menos dos enlaces a secciones o páginas existentes del prototipo.
- **RF02. Listas.** Incluye una lista no ordenada de servicios y una lista ordenada que explique cómo se atiende o gestiona una cita, de acuerdo con tu memoria de ED.
- **RF03. Palabras clave.** Marca con elementos HTML algunas palabras clave de cada párrafo para poder aplicarles un estilo diferente. Hazlo en el contenido común, antes de crear las versiones.
- **RF04. Cinco versiones.** Crea `T2.1.html` a `T2.5.html`, enlazados respectivamente con `T2.1.css` a `T2.5.css`.

## Requisitos no funcionales

- **RNF01. HTML estable.** Las cinco versiones conservarán los mismos elementos, atributos y textos. Solo podrán variar el `title` que identifica la versión y el enlace a la hoja CSS. No uses estilos internos ni en línea. El **contenedor general** al que se refieren los requisitos siguientes será `main`.
- **RNF02. Hoja 1.** Aplica estos estilos:
  - Enlaces: negrita y color `rgb(128,77,51)`.
  - `h1`: `rgb(255,0,0)`; `h2` y `h3`: `rgb(102,51,51)`. Los tres niveles tendrán fondo `rgb(220,220,220)`.
  - `ol`: texto `rgb(0,255,0)` y fondo `rgb(77,51,102)`; `ul`: fondo `rgb(128,77,51)`.
  - Contenedor general: borde sólido negro de `3px` y fondo amarillo suave `rgb(255,255,224)`.
  - Párrafos: texto `rgb(102,153,204)`.
- **RNF03. Hoja 2.** Aplica estos estilos:
  - Enlaces: subrayados y color `rgb(26,179,51)`.
  - `h1`: `rgb(51,51,128)`; `h2` y `h3`: `rgb(51,128,77)`. Los tres niveles tendrán fondo `rgb(220,220,220)`.
  - `ol`: texto blanco y fondo `rgb(102,51,77)`; `ul`: fondo `rgb(153,153,77)`.
  - Contenedor general: borde sólido azul de `2px`.
  - Párrafos: texto `rgb(102,179,128)`.
- **RNF04. Hoja 3.** Aplica estos estilos:
  - Enlaces: sin subrayar y color `rgb(179,51,26)`.
  - `h1`: `rgb(26,179,51)`; `h2` y `h3`: `rgb(179,153,26)`. Los tres niveles tendrán fondo `rgb(240,240,240)`.
  - `ol`: texto negro y fondo `rgb(230,179,179)`; `ul`: fondo `rgb(179,230,179)`.
  - Contenedor general: borde punteado verde de `3px`.
  - Párrafos: texto `rgb(102,102,102)`.
- **RNF05. Hoja 4.** Aplica estos estilos:
  - Enlaces: cursiva y color `rgb(102,51,153)`.
  - `h1`: `rgb(153,102,51)`; `h2` y `h3`: `rgb(179,153,51)`. Los tres niveles tendrán fondo `rgb(220,220,220)`.
  - `ol`: texto negro y fondo `rgb(153,204,230)`; `ul`: fondo `rgb(230,230,204)`.
  - Contenedor general: borde doble negro de `4px`.
  - Párrafos: fuente de familia serif; las palabras clave marcadas tendrán color `rgb(153,102,77)`.
- **RNF06. Hoja 5.** Aplica estos estilos:
  - Enlaces: negrita y color `rgb(26,179,51)`.
  - `h1`: `rgb(26,51,179)`; `h2` y `h3`: `rgb(179,153,51)`. Los tres niveles tendrán fondo `rgb(220,220,220)`.
  - `ol`: texto blanco y fondo `rgb(179,26,26)`; `ul`: fondo `rgb(128,77,51)`.
  - Contenedor general: borde sólido gris de `6px`, con esquinas redondeadas de `12px`.
  - Párrafos: texto en cursiva.
- **RNF07. Comprobación.** Valida el HTML y las cinco hojas CSS, corrige los errores y comprueba cada versión en el navegador, incluidos los enlaces y las palabras clave de la hoja 4.

## Qué debes entregar

1. **Los cinco HTML y los cinco CSS** indicados, dentro del proyecto, con las rutas necesarias para que funcionen.
2. **Un índice en el `README.md` del proyecto**, con una entrada enlazada a la reflexión de cada tarea realizada.
3. **La reflexión de esta tarea en el mismo `README.md`**, explicando brevemente:
   - Qué has aprendido al aplicar estilos diferentes al mismo HTML.
   - Qué dificultades has encontrado y cómo las has resuelto.
   - Qué has comprobado en cada versión y en los validadores.
   - Las fuentes y el uso de IA, si lo ha habido.

## Rúbrica de evaluación

| Calificación | Criterio |
|---|---|
| 0 | **No entregado.** |
| 3 | **La mayoría de las respuestas son incorrectas.** La tarea presenta errores importantes que muestran una comprensión insuficiente de los contenidos o dificultades para aplicar los procedimientos trabajados. |
| 6 | **La mayoría de las respuestas son correctas.** Se demuestra una comprensión general de los contenidos y una aplicación adecuada de los procedimientos, aunque quedan errores u omisiones por corregir. |
| 9 | **Todo correcto.** La tarea responde de forma completa y correcta a lo solicitado, con explicaciones claras y procedimientos bien aplicados. |
| 10 | **Todo correcto y con una aportación extra.** Además de resolver correctamente la tarea, el alumno incorpora una aportación propia y pertinente que enriquece el trabajo, como un ejemplo, una comprobación adicional o una reflexión razonada. |
