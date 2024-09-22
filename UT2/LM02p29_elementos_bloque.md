# Elementos html en bloque

### 1. `<address>` (Dirección de Contacto)
**Descripción**: El elemento `<address>` representa información de contacto, generalmente relacionada con el autor o el dueño de un documento o artículo.

**Ejemplo en HTML**:
```html
<address>
  Contacto: <a href="mailto:email@example.com">email@example.com</a>
</address>
```


Contacto: [email@example.com](mailto:email@example.com)

---

### 2. `<article>` (Artículo)
**Descripción**: El elemento `<article>` define contenido independiente dentro de un documento, como un artículo de una revista o una entrada de blog.

**Ejemplo en HTML**:
```html
<article>
  <h2>Título del Artículo</h2>
  <p>Este es el contenido del artículo.</p>
</article>
```


**Título del Artículo**  
Este es el contenido del artículo.

---

### 3. `<aside>` (Contenido Relacionado)
**Descripción**: El elemento `<aside>` define contenido relacionado o adicional, como una barra lateral, que puede estar conectado tangencialmente al contenido principal.

**Ejemplo en HTML**:
```html
<aside>
  <p>Este es un consejo útil relacionado con el tema principal.</p>
</aside>
```


Este es un consejo útil relacionado con el tema principal.

---

### 4. `<blockquote>` (Cita en Bloque)
**Descripción**: El elemento `<blockquote>` se utiliza para citas largas que ocupan un bloque completo.

**Ejemplo en HTML**:
```html
<blockquote>
  <p>Este es un ejemplo de una cita en bloque.</p>
</blockquote>
```


> Este es un ejemplo de una cita en bloque.

---

### 5. `<details>` (Detalles Desplegables)
**Descripción**: El elemento `<details>` proporciona un widget interactivo que el usuario puede expandir para ver más detalles.

**Ejemplo en HTML**:
```html
<details>
  <summary>Más detalles</summary>
  <p>Este contenido es visible al desplegar.</p>
</details>
```


(No aplicable, ya que Markdown no tiene un equivalente interactivo).

---

### 6. `<dialog>` (Cuadro de Diálogo)
**Descripción**: El elemento `<dialog>` representa un cuadro de diálogo o una ventana emergente que puede activarse en la página.

**Ejemplo en HTML**:
```html
<dialog open>
  <p>Este es un cuadro de diálogo.</p>
</dialog>
```


(No hay soporte en Markdown para ventanas emergentes).

---

### 7. `<div>` (División de Bloque)
**Descripción**: El elemento `<div>` es un contenedor genérico de bloque, utilizado principalmente para agrupar otros elementos para fines de estilo o scripts.

**Ejemplo en HTML**:
```html
<div>
  <p>Este es un bloque de contenido agrupado en un <code>div</code>.</p>
</div>
```


Este es un bloque de contenido agrupado en un `div`.

---

### 8. `<dl>`, `<dt>`, `<dd>` (Lista de Definiciones)
**Descripción**: El elemento `<dl>` representa una lista de definiciones. Los elementos `<dt>` definen el término y los elementos `<dd>` contienen la descripción correspondiente.

**Ejemplo en HTML**:
```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado utilizado para estructurar una página web.</dd>
</dl>
```


HTML  
: Lenguaje de marcado utilizado para estructurar una página web.

---

### 9. `<figure>` y `<figcaption>` (Figura y Subtítulo)
**Descripción**: El elemento `<figure>` se utiliza para agrupar contenido multimedia como imágenes o gráficos, y el `<figcaption>` proporciona un subtítulo o descripción.

**Ejemplo en HTML**:
```html
<figure>
  <img src="imagen.jpg" alt="Descripción de la imagen">
  <figcaption>Esta es una imagen con un subtítulo.</figcaption>
</figure>
```


![Descripción de la imagen](imagen.jpg)  
Esta es una imagen con un subtítulo.

---

### 10. `<footer>` (Pie de Página)
**Descripción**: El elemento `<footer>` representa el pie de página de un documento o sección, que generalmente incluye información de autoría, enlaces o derechos de autor.

**Ejemplo en HTML**:
```html
<footer>
  <p>Derechos de autor © 2024.</p>
</footer>
```


Derechos de autor © 2024.

---

### 11. `<h1>`, `<h2>`, ... `<h6>` (Encabezados)
**Descripción**: Los elementos de encabezado `<h1>` a `<h6>` definen títulos o encabezados, siendo `<h1>` el más importante y `<h6>` el menos importante.

**Ejemplo en HTML**:
```html
<h1>Encabezado 1</h1>
<h2>Encabezado 2</h2>
<h3>Encabezado 3</h3>
```


# Encabezado 1  
## Encabezado 2  
### Encabezado 3

---

### 12. `<header>` (Encabezado)
**Descripción**: El elemento `<header>` representa un encabezado de una sección o documento, y suele contener títulos, logos o elementos de navegación.

**Ejemplo en HTML**:
```html
<header>
  <h1>Mi sitio web</h1>
</header>
```


**Mi sitio web**

---

### 13. `<li>`, `<ol>`, `<ul>` (Elementos de Lista)
**Descripción**: El elemento `<li>` define un ítem en una lista. Las listas ordenadas `<ol>` se numeran automáticamente, mientras que las listas desordenadas `<ul>` muestran marcadores.

**Ejemplo en HTML**:
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
<ol>
  <li>Primer ítem</li>
  <li>Segundo ítem</li>
</ol>
```


- Elemento 1  
- Elemento 2  

1. Primer ítem  
2. Segundo ítem

---

### 14. `<main>` (Contenido Principal)
**Descripción**: El elemento `<main>` representa el contenido principal de un documento, que es único y directamente relacionado con el tema principal.

**Ejemplo en HTML**:
```html
<main>
  <p>Este es el contenido principal de la página.</p>
</main>
```


Este es el contenido principal de la página.

---

### 15. `<nav>` (Navegación)
**Descripción**: El elemento `<nav>` contiene enlaces de navegación dentro del documento o hacia otros documentos.

**Ejemplo en HTML**:
```html
<nav>
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
  </ul>
</nav>
```


- [Inicio](#inicio)  
- [Sobre nosotros](#sobre-nosotros)

---

### 16. `<p>` (Párrafo)
**Descripción**: El elemento `<p>` define un párrafo de texto.

**Ejemplo en HTML**:
```html
<p>Este es un párrafo de ejemplo.</p>
```


Este es un párrafo de ejemplo.

---

### 17. `<pre>` (Texto Preformateado)
**Descripción**: El elemento `<pre>` mantiene el formato de texto tal como aparece en el código fuente, respetando los espacios y saltos de línea.

**Ejemplo en HTML**:
```html
<pre>
Texto preformateado
  con saltos de línea y espacios.
</pre>
```


```
Texto preformateado
  con saltos de línea y espacios.
```

---

### 18. `<section>` (Sección)
**Descripción**: El elemento `<section>` agrupa contenido relacionado en una sección del documento, como capítulos o partes de un artículo.

**Ejemplo en HTML**:
```html
<section>
  <h2>Sección 1</h2>
  <p>Este es el contenido de la primera sección.</p>
</section>
```


## Sección 1  
Este es el contenido de la primera sección.

---
