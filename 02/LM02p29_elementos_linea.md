- [1. `<a>` (Enlace)](#1-a-enlace)
- [2. `<abbr>` (Abreviación)](#2-abbr-abreviación)
- [3. `<bdi>` (Aislamiento de Texto Bidireccional)](#3-bdi-aislamiento-de-texto-bidireccional)
- [4. `<bdo>` (Anulación de Dirección de Texto)](#4-bdo-anulación-de-dirección-de-texto)
- [5. `<cite>` (Cita de una Fuente)](#5-cite-cita-de-una-fuente)
- [6. `<code>` (Código Fuente)](#6-code-código-fuente)
- [7. `<data>` (Vinculación de Datos)](#7-data-vinculación-de-datos)
- [8. `<del>` (Texto Eliminado)](#8-del-texto-eliminado)
- [9. `<dfn>` (Definición)](#9-dfn-definición)
- [10. `<em>` (Énfasis)](#10-em-énfasis)
- [11. `<ins>` (Texto Insertado)](#11-ins-texto-insertado)
- [12. `<kbd>` (Entrada de Usuario del Teclado)](#12-kbd-entrada-de-usuario-del-teclado)
- [13. `<q>` (Cita en Línea)](#13-q-cita-en-línea)
- [14. `<script>` (Script de JavaScript)](#14-script-script-de-javascript)
- [15. `<span>` (Contenedor en Línea)](#15-span-contenedor-en-línea)
- [16. `<strong>` (Fuerte Énfasis)](#16-strong-fuerte-énfasis)
- [17. `<var>` (Variable)](#17-var-variable)

---

### 1. `<a>` (Enlace)
**Descripción**: El elemento `<a>` crea un enlace a otro documento o ubicación dentro de la misma página. Existen dos tipos:
- **Enlaces internos**: Los que apuntan a un lugar dentro del mismo documento o página, usando un atributo `href` que empieza con `#` seguido del identificador del destino.
- **Enlaces externos**: Apuntan a otra página o documento fuera del actual, usando una URL completa en el atributo `href`.

**Atributos importantes**:
- `href`: URL o identificador a donde apunta el enlace.
- `target`: Define dónde se abrirá el enlace (por ejemplo, `_blank` abre en una nueva pestaña).
- `rel`: Indica la relación entre el documento actual y el destino del enlace (importante para seguridad, como `noopener` para evitar ataques).

**Ejemplo en HTML**:
```html
<a href="https://example.com" target="_blank" rel="noopener">Enlace externo</a>
<a href="#seccion1">Enlace interno a la sección 1</a>
```

**Visualización en Markdown**:
[Enlace externo](https://example.com)  
[Enlace interno a la sección 1](#seccion1)

---

### 2. `<abbr>` (Abreviación)
**Descripción**: El elemento `<abbr>` indica que un fragmento de texto es una abreviatura o sigla, y se puede proporcionar el significado completo a través del atributo `title`.

**Ejemplo en HTML**:
```html
<p>La <abbr title="Organización de las Naciones Unidas">ONU</abbr> fue fundada en 1945.</p>
```

**Visualización en Markdown**:
La ONU fue fundada en 1945.

---

### 3. `<bdi>` (Aislamiento de Texto Bidireccional)
**Descripción**: El elemento `<bdi>` aísla un fragmento de texto que podría tener una dirección de texto diferente del entorno, evitando que interfiera con el resto del contenido bidireccional.

**Ejemplo en HTML**:
```html
<p>Nombre de usuario: <bdi>מוחמד</bdi></p>
```

**Visualización en Markdown**:
Nombre de usuario: מוחמד

---

### 4. `<bdo>` (Anulación de Dirección de Texto)
**Descripción**: El elemento `<bdo>` anula la dirección de texto por defecto, permitiendo especificar una dirección de texto diferente mediante el atributo `dir`.

**Ejemplo en HTML**:
```html
<p><bdo dir="rtl">Este texto se muestra de derecha a izquierda.</bdo></p>
```

**Visualización en Markdown**:
Este texto se muestra de derecha a izquierda.

---

### 5. `<cite>` (Cita de una Fuente)
**Descripción**: El elemento `<cite>` se utiliza para referenciar el título de una obra, como un libro, una película o un informe.

**Ejemplo en HTML**:
```html
<p>Una de mis novelas favoritas es <cite>1984</cite> de George Orwell.</p>
```

**Visualización en Markdown**:
Una de mis novelas favoritas es *1984* de George Orwell.

---

### 6. `<code>` (Código Fuente)
**Descripción**: El elemento `<code>` se utiliza para representar un fragmento de código o un término técnico.

**Ejemplo en HTML**:
```html
<p>Para imprimir en Python, usa el comando <code>print()</code>.</p>
```

**Visualización en Markdown**:
Para imprimir en Python, usa el comando `print()`.

---

### 7. `<data>` (Vinculación de Datos)
**Descripción**: El elemento `<data>` asocia un valor legible por máquina con un contenido legible por humanos, usando el atributo `value`.

**Ejemplo en HTML**:
```html
<p>El valor de la criptomoneda es <data value="20000">veinte mil dólares</data>.</p>
```

**Visualización en Markdown**:
El valor de la criptomoneda es veinte mil dólares.

---

### 8. `<del>` (Texto Eliminado)
**Descripción**: El elemento `<del>` muestra que el contenido ha sido eliminado, generalmente lo muestra con una línea a través del texto.

**Ejemplo en HTML**:
```html
<p>El precio anterior era <del>50€</del>.</p>
```

**Visualización en Markdown**:
El precio anterior era ~~50€~~.

---

### 9. `<dfn>` (Definición)
**Descripción**: El elemento `<dfn>` indica que el texto dentro del elemento es el término que está siendo definido en el contexto de una frase o párrafo.

**Ejemplo en HTML**:
```html
<p><dfn>HTML</dfn> significa HyperText Markup Language.</p>
```

**Visualización en Markdown**:
HTML significa HyperText Markup Language.

---

### 10. `<em>` (Énfasis)
**Descripción**: El elemento `<em>` añade énfasis al texto, que suele mostrarse en cursiva por defecto.

**Ejemplo en HTML**:
```html
<p>Es <em>muy importante</em> entender este concepto.</p>
```

**Visualización en Markdown**:
Es *muy importante* entender este concepto.

---

### 11. `<ins>` (Texto Insertado)
**Descripción**: El elemento `<ins>` se utiliza para mostrar que el contenido ha sido insertado, a menudo subrayado.

**Ejemplo en HTML**:
```html
<p>El precio actual es <ins>45€</ins>.</p>
```

**Visualización en Markdown**:
El precio actual es _45€_.

---

### 12. `<kbd>` (Entrada de Usuario del Teclado)
**Descripción**: El elemento `<kbd>` representa una entrada del teclado o comandos que el usuario debe escribir.

**Ejemplo en HTML**:
```html
<p>Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar.</p>
```

**Visualización en Markdown**:
Presiona `Ctrl` + `C` para copiar.

---

### 13. `<q>` (Cita en Línea)
**Descripción**: El elemento `<q>` se utiliza para citas cortas en línea, y automáticamente incluye comillas alrededor del contenido citado.

**Ejemplo en HTML**:
```html
<p>Ella dijo: <q>La práctica hace al maestro.</q></p>
```

**Visualización en Markdown**:
Ella dijo: "La práctica hace al maestro."

---

### 14. `<script>` (Script de JavaScript)
**Descripción**: El elemento `<script>` se utiliza para incrustar o referenciar scripts de JavaScript en la página.

**Ejemplo en HTML**:
```html
<script>
  alert('¡Hola, mundo!');
</script>
```

**Visualización en Markdown**: (No se puede visualizar en Markdown, ya que es código JavaScript).

---

### 15. `<span>` (Contenedor en Línea)
**Descripción**: El elemento `<span>` es un contenedor en línea sin semántica propia, usado para agrupar o aplicar estilo a partes del texto.

**Ejemplo en HTML**:
```html
<p>Este es un texto con <span style="color: red;">color rojo</span>.</p>
```

**Visualización en Markdown**:
Este es un texto con color rojo.

---

### 16. `<strong>` (Fuerte Énfasis)
**Descripción**: El elemento `<strong>` se utiliza para marcar texto con una importancia fuerte, por defecto se muestra en negrita.

**Ejemplo en HTML**:
```html
<p>Esto es <strong>muy importante</strong>.</p>
```

**Visualización en Markdown**:
Esto es **muy importante**.

---

### 17. `<var>` (Variable)
**Descripción**: El elemento `<var>` se utiliza para representar una variable o un valor matemático en programación o fórmulas.

**Ejemplo en HTML**:
```html
<p>La variable <var>x</var> es igual a 5.</p>
```

**Visualización en Markdown**:
La variable *x* es igual a 5.

---

