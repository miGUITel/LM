# id, name y label en los formularios

`id` identifica un elemento dentro del documento y debe ser único. El `for` de una etiqueta `label` coincide con ese `id`. También sirve como destino de un enlace interno.

`name` identifica el dato enviado por un control del formulario. No tiene que ser único: los botones de opción de un mismo grupo comparten `name`.

**id y name pueden tener el mismo valor.** No es un error ni es necesario inventar dos nombres distintos.

```html
<label for="correo">Correo de prueba:</label>
<input type="email" id="correo" name="correo" required>
```

En un grupo de selección única, cada control tiene su propio `id`, pero comparten `name` y tienen valores distintos:

```html
<fieldset>
  <legend>Preferencia de respuesta</legend>
  <input type="radio" id="respuesta-correo" name="respuesta" value="correo">
  <label for="respuesta-correo">Correo</label>
  <input type="radio" id="respuesta-clase" name="respuesta" value="clase">
  <label for="respuesta-clase">En clase</label>
</fieldset>
```

Una casilla sin marcar no aporta su dato al envío. Una marcada aporta su `name` y su `value`; escribid valores que permitan distinguir las opciones. Un `placeholder` es una pista y no sustituye al `label`.

Referencia: [formularios HTML](https://html.spec.whatwg.org/multipage/forms.html).
