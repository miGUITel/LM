## Clasificación de los lenguajes de marcas:

### 1. **Lenguaje de Marcas Semántico**

Un **lenguaje de marcas semántico** se centra en la **estructura y el significado** del contenido. El propósito de las etiquetas es describir qué representan los elementos del documento, en lugar de cómo deben verse o comportarse. Las etiquetas semánticas son comprensibles tanto para los humanos como para las máquinas, como los motores de búsqueda y los lectores de pantalla.

#### Ejemplo: HTML5
- **Etiqueta:** `<article>`, `<header>`, `<nav>`, `<section>`
- **Propósito:** Indican roles específicos del contenido dentro de la página, como un artículo o un encabezado, y ayudan a definir la estructura lógica del documento.

#### Características:
- Mejoran la accesibilidad.
- Facilitan el SEO (optimización para motores de búsqueda).
- Separan el significado del contenido de su presentación visual.
  
#### Ejemplo en HTML5:
```html
<article>
  <h2>Título del artículo</h2>
  <p>Este es un artículo sobre...</p>
</article>
```

### 2. **Lenguaje de Marcas de Presentación**

Los **lenguajes de marcas de presentación** se enfocan en **definir el estilo visual** del contenido o cómo debe mostrarse en la interfaz. Estas marcas controlan aspectos como colores, fuentes, tamaños y disposición de los elementos en la página. No aportan significado estructural, sino que solo indican cómo debe verse o comportarse algo en pantalla.

#### Ejemplo: CSS (Cascading Style Sheets)
- **Etiqueta/Regla:** `color`, `font-size`, `margin`, `padding`
- **Propósito:** Determina la apariencia visual del contenido HTML o XML.

#### Características:
- Define el estilo visual de los elementos.
- Facilita la separación entre estructura y presentación.
  
#### Ejemplo en CSS:
```css
article {
  color: blue;
  font-size: 18px;
}
```

### 3. **Lenguaje de Marcas Procedimental**

Los **lenguajes de marcas procedimentales** indican **acciones o comportamientos** que el contenido debe seguir. Se utilizan para definir cómo se debe procesar, transformar o interactuar con los datos. Estos lenguajes no definen el significado o la presentación, sino las **instrucciones** para manipular el contenido.

#### Ejemplo: XSLT (Extensible Stylesheet Language Transformations)
- **Propósito:** Indica cómo se debe transformar un documento XML en otro formato, como HTML o texto.

#### Características:
- Define reglas de procesamiento de datos.
- Se utiliza para transformar o manipular documentos.

#### Ejemplo en XSLT:
```xslt
<xsl:template match="/">
  <html>
    <body>
      <h1><xsl:value-of select="title"/></h1>
      <p><xsl:value-of select="description"/></p>
    </body>
  </html>
</xsl:template>
```

---

### Resumen de las Diferencias:

| Tipo de Lenguaje de Marcas | **Semántico**                        | **De Presentación**                  | **Procedimental**                   |
|----------------------------|--------------------------------------|--------------------------------------|-------------------------------------|
| **Propósito**               | Describir el significado o estructura del contenido. | Definir la apariencia visual del contenido. | Indicar acciones o comportamientos a seguir. |
| **Enfoque**                 | Estructura lógica y rol del contenido. | Estilo visual y diseño.              | Procesamiento y transformación de datos.     |
| **Ejemplos**                | HTML5, XML                           | CSS                                  | XSLT, LaTeX                         |
| **Función**                 | Ayuda a entender el contenido.        | Controla la presentación.            | Define cómo manipular el contenido. |

