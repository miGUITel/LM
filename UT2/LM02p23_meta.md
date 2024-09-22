- [1. **`charset`**:](#1-charset)
- [2. **`http-equiv`**:](#2-http-equiv)
- [3. **Par `name` y `content`**:](#3-par-name-y-content)

La etiqueta `<meta>` en HTML se utiliza para proporcionar metadatos sobre la página web al navegador o a otros servicios. Estos metadatos no se muestran directamente en la página, pero pueden influir en su funcionamiento y en cómo es interpretada por motores de búsqueda o navegadores. A continuación te explico las funciones de los metadatos más comunes asociados a la etiqueta `<meta>`.

### 1. **`charset`**: 
Define el conjunto de caracteres que la página utiliza. Esto es esencial para asegurar que los caracteres especiales o acentuados se muestren correctamente. 

Ejemplo: 
```html
<meta charset="UTF-8">
```
**UTF-8** es el estándar más utilizado porque puede representar casi todos los caracteres del mundo.

### 2. **`http-equiv`**: 
Esta propiedad actúa como un encabezado HTTP que puedes enviar desde la página HTML.

- **`content-type`**: Especifica el tipo de contenido y la codificación de la página.
  
  Ejemplo:
  ```html
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  ```
  Esto es más común en versiones antiguas de HTML, ya que en HTML5 se prefiere usar `charset` directamente.

- **`cache-control`**: Define cómo los navegadores deben manejar la caché de la página. Es útil para controlar cuánto tiempo se deben guardar copias en la caché de los usuarios.

  Ejemplo:
  ```html
  <meta http-equiv="Cache-Control" content="no-cache">
  ```
  Indica que el navegador no debe almacenar una copia en caché, forzando que se obtenga siempre una versión actualizada.

- **`refresh`**: Hace que la página se recargue automáticamente o redirige a otra URL después de un tiempo determinado.

  Ejemplo:
  ```html
  <meta http-equiv="refresh" content="10">
  ```
  Hace que la página se actualice automáticamente después de 10 segundos.

  O para redirigir:
  ```html
  <meta http-equiv="refresh" content="5;url=https://example.com">
  ```
  Redirige al usuario a otra página después de 5 segundos.

### 3. **Par `name` y `content`**: 
Estos metadatos proporcionan información adicional sobre la página que puede ser utilizada por los motores de búsqueda y navegadores.

- **`robots`**: Indica a los motores de búsqueda cómo deben tratar la página (indexarla o no, seguir los enlaces o no).

  Ejemplo:
  ```html
  <meta name="robots" content="index,follow">
  ```
  Esto indica que el contenido de la página debe ser indexado y que los motores de búsqueda deben seguir los enlaces.

  Alternativamente:
  ```html
  <meta name="robots" content="noindex,nofollow">
  ```
  Esto indica que no se debe indexar la página ni seguir los enlaces.

- **`keywords`**: Define una lista de palabras clave relevantes para el contenido de la página. Aunque ya no se utiliza mucho para SEO, todavía aparece en algunas páginas.

  Ejemplo:
  ```html
  <meta name="keywords" content="programación, HTML, desarrollo web">
  ```

- **`author`**: Indica el nombre del autor de la página.

  Ejemplo:
  ```html
  <meta name="author" content="Juan Pérez">
  ```

- **`copyright`**: Proporciona información sobre los derechos de autor de la página.

  Ejemplo:
  ```html
  <meta name="copyright" content="© 2024 Juan Pérez">
  ```

- **`viewport`**: Es especialmente importante para la adaptación de la página a dispositivos móviles. Define cómo se debe escalar y mostrar la página en diferentes pantallas.

  Ejemplo:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
  Esto asegura que la página se ajustará al ancho del dispositivo (móvil, tablet, etc.) y establece el nivel de zoom inicial al 100%.
