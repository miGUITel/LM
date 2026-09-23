# Miniproyecto HTML La ficha de un alumno

En parejas, vais a construir un pequeño sitio web para consultar la ficha de un alumno ficticio. Todas las parejas trabajan sobre el mismo encargo; cada una inventa su personaje y sus datos. Las prácticas de cabecera, depuración, multimedia, navegación, tablas y formularios os ayudarán a completarlo poco a poco.

La presentación del profesor será vuestra guía principal. Consultad los apuntes y ejemplos enlazados cuando los necesitéis.

Para empezar, seguid el [arranque guiado](0200_arranque_guiado.md). El [índice de talleres](README.md) enlaza las seis prácticas que construirán este proyecto. Cada avance sigue la [comprobación y entrega común](0200_entrega.md).

## El encargo

Un centro necesita un prototipo sencillo para mostrar la ficha de un alumno: quién es, qué estudia, cuáles son sus intereses y qué horario tiene. También debe mostrar un formulario con el que se podría solicitar una modificación de la ficha.

El sitio se abrirá en el navegador desde los archivos del proyecto. El formulario será un prototipo: no tiene que guardar ni modificar datos. No se necesita Java, JavaScript, una base de datos ni un servidor propio.

## Antes de escribir HTML

Hablad brevemente y anotad estas decisiones en vuestro `README.md`:

1. ¿Quién consultará la ficha y para qué?
2. ¿Qué datos mostraréis y cuáles serán sus valores de ejemplo?
3. ¿En qué páginas se repartirá la información y cómo se navegará entre ellas?
4. ¿Cómo vais a repartir y revisar el trabajo?

Podéis partir de la [plantilla breve de documentación](0200_plantilla_documentacion.md). Bastan respuestas claras, una lista de requisitos y un esquema sencillo de las páginas. No hace falta una memoria extensa.

## Resultado mínimo

| Requisito | Qué debe poder comprobarse |
|---|---|
| RF01. Ficha | `index.html` muestra el nombre ficticio, un identificador, ciclo y curso, grupo y una presentación breve del alumno. |
| RF02. Páginas | El sitio tiene tres páginas: `index.html`, `intereses.html` y `solicitud.html`. Todas tienen un título propio y un menú para acceder a las otras dos. |
| RF03. Cabecera | Cada página incluye la estructura básica de HTML, el idioma, la codificación, un título y el favicon del proyecto. |
| RF04. Estructura | El contenido se organiza con encabezados y elementos semánticos adecuados. Se distinguen navegación, contenido principal y pie de página. |
| RF05. Listas y enlaces | La página de intereses incluye una lista no ordenada de aficiones, otra ordenada de objetivos y un enlace externo relacionado. La ficha incluye un enlace a una sección de la misma página. |
| RF06. Multimedia | La página de intereses incluye una imagen con texto alternativo y pie, un audio y un vídeo con controles. Se usan recursos pequeños y disponibles para la práctica; no hace falta grabarse. |
| RF07. Tabla | La ficha contiene el horario ficticio del alumno. Se identifica la tabla, se utilizan encabezados y se emplea al menos una combinación de celdas que tenga sentido. La tabla representa datos, no distribuye el resto de la página. |
| RF08. Formulario | `solicitud.html` permite indicar nombre, correo de ejemplo, tipo de cambio, al menos una opción de selección única, varias opciones de selección múltiple y una explicación. Incluye etiquetas asociadas a los controles, agrupación, campos obligatorios adecuados y botones de envío y restablecimiento. |
| RF09. Funcionamiento | Las rutas relativas, los enlaces y los recursos funcionan al extraer el ZIP en otra carpeta. El HTML está ordenado y se han revisado los errores con el validador indicado por el profesor. |
| RF10. Documentación y colaboración | El `README.md` explica el análisis inicial, los requisitos adoptados, el reparto y las comprobaciones. Los dos integrantes conocen el conjunto y realizan aportaciones identificables. |

Usad datos ficticios y recursos proporcionados o reutilizables. Anotad la procedencia de los recursos externos. No necesitáis fotografías ni datos reales de compañeros.

Los requisitos se completan conforme se trabajan sus contenidos. No intentéis resolverlos todos el primer día. Los enunciados de las prácticas concretarán los ejercicios que correspondan a cada parte.

## Organización de los archivos

Una estructura sencilla para empezar es:

```text
ficha-alumno/
├── README.md
├── index.html
├── intereses.html
├── solicitud.html
└── recursos/
    ├── imagenes/
    ├── audio/
    └── video/
```

Utilizad nombres de archivo breves, en minúsculas y sin espacios. Guardad los recursos dentro del proyecto y utilizad rutas relativas. Trabajad en vuestro repositorio privado, separado de la copia de los materiales del profesor.

## Trabajo por parejas

Los dos integrantes deben escribir HTML y revisar el trabajo del compañero. Alternad quién escribe y quién comprueba. No repartáis el proyecto de modo que cada uno desconozca la mitad del sitio.

Mantened un único repositorio privado compartido. Dad acceso al compañero y al profesor y comprobad que el profesor puede abrirlo. Guardad avances con mensajes breves que expliquen lo realizado. Las instrucciones para las operaciones de Git se trabajarán de forma guiada.

## Aspecto visual

Desarrollad primero el sitio con HTML. Al final, el profesor proporcionará un CSS básico para mejorar la apariencia y mostrar la conexión con CSS. No lo incorporéis antes de esa indicación.

No se pide maquetar, mover bloques ni programar efectos. El sitio debe seguir siendo comprensible y funcionar sin la hoja de estilo.

## Comprobación y entrega

Antes de entregar:

- Abrid las tres páginas y probad todos los enlaces.
- Comprobad que se cargan los recursos y que el formulario permite seleccionar, escribir y restablecer sus valores.
- Revisad las etiquetas, el anidamiento, los identificadores y los mensajes del validador.
- Actualizad el `README.md` con las comprobaciones, las aportaciones y cualquier parte pendiente.
- Guardad y enviad los últimos cambios al repositorio.
- Generad un ZIP de esa misma versión, sin la carpeta `.git`, y probadlo después de extraerlo en otra ubicación.

Entregad por Aula Virtual **el enlace al repositorio privado y el ZIP**. Identificad a los dos integrantes y anotad en el mensaje de entrega el identificador del último commit incluido. Si habéis utilizado IA, indicad para qué y qué habéis comprobado vosotros.

Cada integrante debe poder explicar y modificar el HTML del proyecto de forma individual. El calendario de entregas y las condiciones de la prueba se comunicarán por los canales del módulo.

## Ampliaciones opcionales

Cuando el mínimo funcione, podéis añadir una lista de términos, subtítulos al vídeo, más controles adecuados en el formulario o información adicional bien organizada. Las ampliaciones deben mantenerse dentro de lo que podéis explicar y comprobar. No se necesita aumentar el número de páginas.

Conservad los nombres y el significado de los datos de la ficha: servirán para reutilizar esa información cuando trabajemos otros formatos.
