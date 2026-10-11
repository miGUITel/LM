# Tarea 3. Tarjeta de una cita con position

## Qué debes hacer

Crea en `cita.html`, con su hoja `cita.css`, una tarjeta informativa de una cita de la peluquería. Utiliza datos ficticios y un contenido coherente con las pantallas previstas en tu memoria de ED.

La tarjeta estará centrada horizontalmente en la página. Aplicarás las distintas variantes de `position` para observar cómo se comportan sus elementos y los de la página.

Los códigos **RF** identifican los requisitos funcionales y los códigos **RNF**, los requisitos no funcionales de esta tarea.

## Requisitos funcionales

- **RF01. Información de la cita.** La tarjeta mostrará, al menos, el nombre ficticio del cliente, el servicio y la fecha y hora de la cita. Incluye una breve descripción y una imagen relacionada con el servicio.
- **RF02. Acción.** La tarjeta tendrá un enlace con aspecto de botón, «Ver detalle», que lleve a una sección de la página con información ampliada de esa cita.
- **RF03. Título y aviso.** Fuera de la tarjeta habrá un título de página y un aviso breve relacionado con la gestión de citas.

## Requisitos no funcionales

- **RNF01. Título sticky.** El título estará por encima y fuera de la tarjeta. Usará `position: sticky`: al desplazarte por la página se quedará visible al alcanzar el borde superior, dentro del espacio de su contenedor. Incluye suficiente contenido para que el efecto pueda comprobarse.
- **RNF02. Imagen superpuesta.** Coloca la imagen con `position: absolute` detrás del contenido de la tarjeta. Utiliza `z-index` para controlar el apilamiento; la imagen no ocultará el texto ni el enlace.
- **RNF03. Descripción relative.** Desplaza ligeramente la descripción respecto a su posición original mediante `position: relative`, conservando su espacio en el flujo y sin tapar otros elementos.
- **RNF04. Acción absolute.** El enlace «Ver detalle» se situará en la esquina inferior derecha de la tarjeta mediante `position: absolute`. Debe permanecer dentro de ella y separado del texto.
- **RNF05. Aviso fixed.** El aviso usará `position: fixed` y permanecerá en la misma posición de la ventana al hacer scroll, sin impedir la lectura ni el uso del enlace.
- **RNF06. Código.** Usa CSS externo y código propio, sin frameworks. Comenta brevemente el propósito de cada uso de `position` y de `z-index`.
- **RNF07. Comprobación.** Valida HTML y CSS y corrige los errores. Prueba el scroll, el enlace y la disposición con anchos de ventana de 375, 768 y 1280 píxeles, y con zoom al 100 % y al 200 %. El contenido debe seguir siendo legible y utilizable, sin solapamientos ni desplazamiento horizontal de la página.

## Qué debes entregar

1. **`cita.html`, `cita.css` y las imágenes utilizadas**, con rutas que funcionen dentro del proyecto.
2. **Un índice en el `README.md` del proyecto**, con una entrada enlazada a la reflexión de cada tarea realizada.
3. **La reflexión de esta tarea en el mismo `README.md`**, explicando brevemente:
   - Qué has aprendido y por qué has utilizado cada variante de `position`.
   - Qué dificultades has encontrado y cómo las has resuelto.
   - Qué has comprobado: scroll, enlace, tamaños de ventana, zoom y validación. Incluye una captura del resultado en Firefox y otra que muestre el título y el aviso tras hacer scroll.
   - Las fuentes y el uso de IA, si lo ha habido.

## Rúbrica de evaluación

| Calificación | Criterio |
|---|---|
| 0 | **No entregado.** |
| 3 | **La mayoría de las respuestas son incorrectas.** La tarea presenta errores importantes que muestran una comprensión insuficiente de los contenidos o dificultades para aplicar los procedimientos trabajados. |
| 6 | **La mayoría de las respuestas son correctas.** Se demuestra una comprensión general de los contenidos y una aplicación adecuada de los procedimientos, aunque quedan errores u omisiones por corregir. |
| 9 | **Todo correcto.** La tarea responde de forma completa y correcta a lo solicitado, con explicaciones claras y procedimientos bien aplicados. |
| 10 | **Todo correcto y con una aportación extra.** Además de resolver correctamente la tarea, el alumno incorpora una aportación propia y pertinente que enriquece el trabajo, como un ejemplo, una comprobación adicional o una reflexión razonada. |
