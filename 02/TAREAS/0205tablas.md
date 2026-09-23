# Taller 5. El horario del alumno

[Volver a los talleres](README.md)

## Qué vais a hacer

Añadiréis a `index.html` una tabla con el horario ficticio del alumno. Representa datos: no se utiliza para colocar el menú, imágenes u otras partes de la página.

## Pasos

1. Dibujad una cuadrícula: columna de tramo horario y cinco columnas de días. Inventad al menos cuatro tramos lectivos y una fila de recreo. No hace falta copiar vuestro horario real.
2. Cread la tabla dentro de una sección del contenido principal, con un encabezado y un `caption` que identifique el horario.
3. Separad encabezados y datos mediante `thead` y `tbody`. Usad `th` para días y tramos, con `scope="col"` o `scope="row"` según corresponda, y `td` para las actividades.
4. Representad el recreo combinando las cinco columnas de días mediante `colspan`. La columna del tramo queda separada. Todas las filas deben ocupar la misma cuadrícula lógica aunque no tengan el mismo número de etiquetas de celda.
5. No uséis celdas vacías para desplazar contenidos ni atributos de presentación como `border`, `bgcolor` o `align`. Trabajad sin CSS; no copiéis los estilos de las plantillas antiguas.
6. Validad el HTML y revisad la tabla en el navegador. Registrad en el `README.md` qué celdas son encabezados y por qué el recreo necesita esa combinación.

## Qué se incorpora y entrega

El horario dentro de la ficha, manteniendo las tres páginas, navegación y multimedia. Entregad según la [entrega común](0200_entrega.md), como `t05`.

## Cómo comprobarlo y qué se valorará

- Se entienden días, tramos y actividades; hay título y encabezados adecuados.
- La combinación de celdas conserva una cuadrícula coherente y tiene significado.
- No se usa la tabla para maquetar; el código está ordenado y es válido.
- Ambos integrantes explican cómo afecta `colspan` al número de celdas de una fila.

**Ampliación opcional:** representad una actividad que ocupa dos tramos mediante `rowspan`, o añadid un `tfoot` con un resumen útil. Ajustad la cuadrícula y justificad la elección; no añadáis un pie vacío por obligación.

Consulta: [tablas en HTML](https://html.spec.whatwg.org/dev/tables.html).
