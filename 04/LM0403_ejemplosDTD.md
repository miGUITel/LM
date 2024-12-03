[índice](./LM0400_indice.md)

## Ejemplos de definiciones de elementos en XML utilizando una DTD.

Cada ejemplo contiene la definición DTD y un ejemplo XML que la cumple.

### 1. Elemento que Contiene PCDATA
**DTD:**
```xml
<!ELEMENT titulo (#PCDATA)>
```
**Ejemplo XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<titulo>Guía para la programación en XML</titulo>
```

### 2. Elemento que Contiene dos Elementos
**DTD:**
```xml
<!ELEMENT libro (titulo, autor)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
```
**Ejemplo XML:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<libro>
    <titulo>Aprendiendo XML</titulo>
    <autor>Juan Pérez</autor>
</libro>
```

### 3. Elemento que Puede Contener uno u Otro Elemento (`|`)
**DTD:**
```xml
<!ELEMENT publicacion (articulo | libro)>
<!ELEMENT articulo (#PCDATA)>
<!ELEMENT libro (#PCDATA)>
```
**Ejemplo XML (1 - `articulo`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<publicacion>
    <articulo>La tecnología en el siglo XXI</articulo>
</publicacion>
```
**Ejemplo XML (2 - `libro`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<publicacion>
    <libro>Guía de XML Avanzado</libro>
</publicacion>
```

### 4. Elemento que Contiene dos Elementos y un Tercero con dos Opciones
**DTD:**
```xml
<!ELEMENT curso (nombre, profesor, (teoria | practica))>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT profesor (#PCDATA)>
<!ELEMENT teoria (#PCDATA)>
<!ELEMENT practica (#PCDATA)>
```
**Ejemplo XML (con `teoria`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<curso>
    <nombre>Introducción a XML</nombre>
    <profesor>Ana López</profesor>
    <teoria>Conceptos básicos de XML</teoria>
</curso>
```
**Ejemplo XML (con `practica`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<curso>
    <nombre>Introducción a XML</nombre>
    <profesor>Ana López</profesor>
    <practica>Ejercicios de XML</practica>
</curso>
```

### 5. Elemento que Puede Contener dos Elementos en Cualquier Orden
**DTD:**
```xml
<!ELEMENT ejemplo ((nombre, apellido) | (apellido, nombre))>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT apellido (#PCDATA)>
```
**Ejemplo XML (Orden: `a`, `b`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ejemplo>
    <nombre>Juan</nombre>
    <apellido>Pérez</apellido>
</ejemplo>
```
**Ejemplo XML (Orden: `b`, `a`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ejemplo>
    <apellido>Pérez</apellido>
    <nombre>Juan</nombre>
</ejemplo>
```

### Uso de los Cuantificadores (`*`, `?`, `+`)
#### 6. Elemento que Contiene Cero o Más (`*`)
**DTD:**
```xml
<!ELEMENT biblioteca (libro*)>
<!ELEMENT libro (titulo, autor)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
```
**Ejemplo XML (con múltiples `libro`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <libro>
        <titulo>XML Básico</titulo>
        <autor>Juan Pérez</autor>
    </libro>
    <libro>
        <titulo>XML Avanzado</titulo>
        <autor>Ana López</autor>
    </libro>
</biblioteca>
```
**Ejemplo XML (sin `libro`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca/>
```

#### 7. Elemento que Contiene Cero o Uno (`?`)
**DTD:**
```xml
<!ELEMENT revista (titulo, editor?)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT editor (#PCDATA)>
```
**Ejemplo XML (con `editor`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<revista>
    <titulo>Revista de Tecnología</titulo>
    <editor>Editorial ABC</editor>
</revista>
```
**Ejemplo XML (sin `editor`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<revista>
    <titulo>Revista de Tecnología</titulo>
</revista>
```

#### 8. Elemento que Contiene Uno o Más (`+`)
**DTD:**
```xml
<!ELEMENT capitulo (seccion+)>
<!ELEMENT seccion (#PCDATA)>
```
**Ejemplo XML (con una o más `seccion`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<capitulo>
    <seccion>Introducción a XML</seccion>
    <seccion>Uso de DTDs</seccion>
    <seccion>Ejemplos prácticos</seccion>
</capitulo>
```

Estos ejemplos cubren la mayoría de los conceptos básicos y algunos avanzados de las definiciones de elementos en una DTD para XML, incluyendo modelos de contenido, opciones, orden de elementos y cuantificadores. Espero que te sean útiles para trabajar con tus estudiantes y que les ayuden a comprender mejor cómo estructurar documentos XML con DTD. ¡Si necesitas más ejemplos o ejercicios prácticos, estaré encantado de ayudar!

[índice](./LM0400_indice.md)