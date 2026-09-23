# Taller 2. Detectar, explicar y corregir errores

[Volver a los talleres](README.md)

## Qué vais a hacer

Investigaréis un HTML con errores intencionados y aplicaréis lo aprendido a vuestra ficha. Que el navegador muestre una página no demuestra que su código sea correcto.

## Pasos

1. Descargad [el archivo de práctica](recursos/errores.html) y guardad una copia sin modificar en `documentacion/depuracion/original.html`. Duplicadla como `corregido.html` en esa misma carpeta.
2. Antes de usar herramientas, leed el código y abrid el original en el navegador. Anotad lo que os parezca incorrecto y probad el enlace interno.
3. Revisad la copia con el [validador HTML](https://validator.w3.org/nu/). Usad VS Code para corregirla; sus ayudas están permitidas, pero debéis explicar cada cambio.
4. Cread `documentacion/depuracion/registro.md` con una tabla: **línea del original | fragmento | problema | corrección | comprobación**. Un error puede provocar varios mensajes del validador: no contéis los mensajes como errores independientes automáticamente.
5. Revisad cierres y anidamiento, identificadores, estructura de listas y destino del enlace. Volved a validar y a probar en el navegador. Explicad un problema que el navegador disimula y otro que exige probar el funcionamiento.
6. Aplicad la revisión a vuestro `index.html`. Organizadlo con `header`, `main` y `footer`, encabezados coherentes y datos ficticios completos. El menú común se trabajará después. Anotad los cambios de vuestra ficha en el registro, separados de los del ejercicio.

## Qué se incorpora y entrega

La ficha revisada y los tres archivos de `documentacion/depuracion/`. El original conserva errores a propósito como evidencia: no forma parte del sitio que visita el usuario. Entregad según la [entrega común](0200_entrega.md), como `t02`.

## Cómo comprobarlo y qué se valorará

- Conserváis el original y justificáis las correcciones con vuestras palabras.
- La copia corregida y la ficha no presentan errores en el validador; revisáis los avisos.
- El enlace interno funciona, los identificadores son únicos y la estructura se entiende.
- Ambos integrantes pueden corregir y explicar un error semejante.

**Ampliación opcional:** cread otro fallo pequeño y explicad su efecto y corrección en el registro. Mantened el sitio definitivo corregido.
