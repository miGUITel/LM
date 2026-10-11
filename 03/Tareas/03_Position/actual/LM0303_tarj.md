# UT3 – Tarea 3: Maquetación con Position

## Qué debes hacer

Crea una **tarjeta informativa sobre un servicio de la peluquería** del miniproyecto de ED, por ejemplo, un corte y peinado. Utiliza las propiedades de `position` para colocar los elementos como se indica.

## Requisitos funcionales

- **RF01. Contenido.** La página debe incluir un título fuera de la tarjeta, una imagen de fondo en la tarjeta, una breve descripción del servicio y un botón de acción, por ejemplo, «Consultar».
- **RF02. Mensaje.** Incluye un icono o un breve mensaje relacionado con la peluquería, por ejemplo, «Atendemos con cita previa».

## Requisitos no funcionales

- **RNF01. Tarjeta.** La tarjeta debe estar centrada en la página.
- **RNF02. Título.** Coloca el título fuera de la tarjeta, en la parte superior de la página, con `position: sticky`. El efecto debe apreciarse al hacer scroll.
- **RNF03. Imagen.** Coloca la imagen como fondo de la tarjeta utilizando `position: absolute` y `z-index`. Los textos deben quedar visibles sobre ella.
- **RNF04. Descripción.** Utiliza `position: relative` para desplazar la descripción de su posición en el flujo normal.
- **RNF05. Botón.** Coloca el botón en la esquina inferior derecha **de la tarjeta** con `position: absolute`.
- **RNF06. Mensaje fijo.** El icono o mensaje debe permanecer fijo en la pantalla al hacer scroll, utilizando `position: fixed`.
- **RNF07. Código propio.** No utilices frameworks de CSS.
- **RNF08. Comentarios.** Comenta el código para explicar el propósito de cada uso de `position`.

### Referencia visual aproximada

![Ejemplo de tarjeta de un servicio de peluquería](image.png)

Puedes utilizar esta [imagen de la peluquería](peluqueria.png). Los textos y el aspecto de tu tarjeta pueden variar, respetando los requisitos.

## Qué debes entregar

1. **Un archivo HTML y un archivo CSS**, con la tarjeta y los estilos del ejercicio.
2. **Las imágenes utilizadas**, para que la página se visualice correctamente.

## Rúbrica de evaluación

| Calificación | Criterio |
|---|---|
| 0 | **No entregado.** |
| 3 | **La mayoría de las respuestas son incorrectas.** La tarea presenta errores importantes que muestran una comprensión insuficiente de los contenidos o dificultades para aplicar los procedimientos trabajados. |
| 6 | **La mayoría de las respuestas son correctas.** Se demuestra una comprensión general de los contenidos y una aplicación adecuada de los procedimientos, aunque quedan errores u omisiones por corregir. |
| 9 | **Todo correcto.** La tarea responde de forma completa y correcta a lo solicitado, con explicaciones claras y procedimientos bien aplicados. |
| 10 | **Todo correcto y con una aportación extra.** Además de resolver correctamente la tarea, el alumno incorpora una aportación propia y pertinente que enriquece el trabajo y solicita su 10. |
