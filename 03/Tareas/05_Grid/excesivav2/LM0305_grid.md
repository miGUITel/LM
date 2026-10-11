# Tarea 5. Panel de citas de la peluquería con Grid

## Qué debes hacer

Crea en `index.html`, con su hoja `estilos.css`, un panel de citas para el prototipo de la peluquería. Utiliza CSS Grid para organizar una cabecera superior, una columna de avisos a la izquierda y una zona de citas a la derecha.

Reutiliza los contenidos de las tareas anteriores y adapta la pantalla a las decisiones de tu memoria de ED. Los datos serán ficticios y las citas se mostrarán como contenido estático.

Los códigos **RF** identifican los requisitos funcionales y los códigos **RNF**, los requisitos no funcionales de esta tarea.

## Requisitos funcionales

- **RF01. Cabecera.** Identifica la peluquería y el día al que corresponde la agenda mostrada.
- **RF02. Avisos.** Incluye al menos tres avisos diferenciados sobre la gestión de citas: incidencias o instrucciones coherentes con los requisitos de tu memoria.
- **RF03. Citas.** Muestra al menos dos citas en bloques separados. Cada una incluirá el nombre ficticio del cliente, el servicio y la fecha y hora. Puedes reutilizar el contenido de la tarjeta anterior, adaptando su CSS a esta tarea.
- **RF04. Acceso a los avances.** Incluye enlaces a los ejercicios de selectores, las cinco versiones de estilos y las páginas `cita.html` y `flex.html`, para poder abrir todos los resultados desde `index.html`.

## Requisitos no funcionales

- **RNF01. Rejilla.** Resuelve la distribución mediante CSS Grid. A partir de 768 píxeles de ancho de ventana, la cabecera ocupará todo el ancho y, debajo, los avisos estarán a la izquierda y las citas a la derecha.
- **RNF02. Separación.** Habrá separación visible entre las columnas y entre los bloques. El texto, las imágenes y los enlaces permanecerán dentro de sus zonas sin superponerse.
- **RNF03. Apariencia.** La columna de avisos tendrá fondo rojo o de un tono similar, y la zona de citas, verde o de un tono similar. El color del texto permitirá leer ambos contenidos.
- **RNF04. Técnica.** Usa HTML semántico, CSS externo y código propio. No uses `position` en ninguna variante, `float`, Flexbox, tablas para maquetar ni frameworks. Si reutilizas contenido anterior, no importes estilos que incumplan estas restricciones.
- **RNF05. Adaptación y comprobación.** Por debajo de 768 píxeles, las zonas se mostrarán en una sola columna: cabecera, avisos y citas. Valida HTML y CSS y corrige los errores. Prueba anchos de 375, 768 y 1280 píxeles y zoom al 100 % y al 200 %: el contenido debe seguir siendo legible y los enlaces utilizables, sin solapamientos ni desplazamiento horizontal de la página.

## Qué debes entregar

1. **`index.html`, `estilos.css` y las imágenes utilizadas**, junto con las páginas y hojas CSS de los avances anteriores a los que enlaza el panel. Las rutas deben funcionar dentro del proyecto.
2. **Un índice en el `README.md` del proyecto**, con una entrada enlazada a la reflexión de cada tarea realizada.
3. **La reflexión de esta tarea en el mismo `README.md`**, explicando brevemente:
   - Qué has aprendido y cómo has organizado la rejilla y sus zonas.
   - Qué dificultades has encontrado y cómo las has resuelto.
   - Qué has comprobado: contenido de la agenda, enlaces, tamaños de ventana, zoom y validación. Incluye una captura del resultado con dos columnas y otra de la versión de una columna.
   - Las fuentes y el uso de IA, si lo ha habido.

## Rúbrica de evaluación

| Calificación | Criterio |
|---|---|
| 0 | **No entregado.** |
| 3 | **La mayoría de las respuestas son incorrectas.** La tarea presenta errores importantes que muestran una comprensión insuficiente de los contenidos o dificultades para aplicar los procedimientos trabajados. |
| 6 | **La mayoría de las respuestas son correctas.** Se demuestra una comprensión general de los contenidos y una aplicación adecuada de los procedimientos, aunque quedan errores u omisiones por corregir. |
| 9 | **Todo correcto.** La tarea responde de forma completa y correcta a lo solicitado, con explicaciones claras y procedimientos bien aplicados. |
| 10 | **Todo correcto y con una aportación extra.** Además de resolver correctamente la tarea, el alumno incorpora una aportación propia y pertinente que enriquece el trabajo, como un ejemplo, una comprobación adicional o una reflexión razonada. |
