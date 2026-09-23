# Metadatos en la cabecera

`meta` aporta información sobre el documento. No sustituye al título visible ni al texto del cuerpo.

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Ficha de un alumno ficticio.">
<meta name="author" content="Integrantes de la pareja">
```

- `charset` declara la codificación; guardad también el archivo como UTF-8.
- `viewport` ajusta la ventana de presentación en móviles; por sí solo no convierte cualquier diseño en adaptable.
- El par `name` y `content` identifica un metadato y su valor. Descripción y autoría son ejemplos sencillos.

El idioma se declara en `<html lang="es">`, no mediante una etiqueta `meta` de Content-Language. `title` y el enlace al favicon son otros elementos de `head`, pero no son etiquetas `meta`.

## Consulta adicional

`http-equiv` admite determinadas directivas, como `refresh`, pero no permite escribir cualquier cabecera HTTP. No utilicéis `meta http-equiv="Cache-Control"` para controlar la caché: esa política se configura con cabeceras HTTP del servidor. Además, `no-cache` significa revalidar, no prohibir todo almacenamiento.

Las redirecciones automáticas, palabras clave, metadatos sociales y configuraciones de caché no forman parte del mínimo de este proyecto. No añadáis metadatos sin poder explicar su función.

Referencia: [meta en HTML](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element).
