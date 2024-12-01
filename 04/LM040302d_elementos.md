[índice](./LM0400_indice.md)

# Definición de Elementos en las DTD

En una DTD (Document Type Definition), la **definición de elementos** es fundamental para establecer la estructura y los tipos de contenido que debe tener un documento XML. La declaración de elementos define qué etiquetas están permitidas, qué tipo de contenido pueden contener, y cómo se relacionan con otros elementos dentro del documento. A continuación, veremos los **tipos de contenido**, las **cardinalidades**, y ejemplos parciales y completos de cómo definir elementos en una DTD.

## Tipos de Contenido en la Definición de Elementos

Cuando se define un elemento en una DTD, existen varios tipos de contenido que se pueden especificar:

1. **Contenido de Texto (PCDATA)**: `#PCDATA` (Parsed Character Data) indica que el elemento puede contener texto, que puede ser interpretado por el parser.
   ```xml
   <!ELEMENT titulo (#PCDATA)>
   ```
   En este ejemplo, el elemento `<titulo>` solo puede contener texto.

2. **Contenido Elemental**: Indica que el elemento contiene otros elementos anidados. Debemos definir qué elementos pueden aparecer dentro de un elemento padre.
   ```xml
   <!ELEMENT libro (titulo, autor)>
   ```
   Aquí, el elemento `<libro>` contiene dos elementos hijos: `<titulo>` y `<autor>`.

3. **Contenido Mixto**: Contiene una combinación de texto y elementos. Se declara con `(#PCDATA)` junto con los elementos hijos.
   ```xml
   <!ELEMENT descripcion (#PCDATA | enfasis)*>
   ```
   En este caso, el elemento `<descripcion>` puede contener texto y elementos `<enfasis>` en cualquier orden y cantidad.

   [aclaración](./LM040302d_aclaramixto.md)

4. **Contenido Vacio (EMPTY)**: Indica que el elemento no contiene ningún contenido.
   ```xml
   <!ELEMENT imagen EMPTY>
   ```
   En este ejemplo, el elemento `<imagen>` no tiene contenido ni hijos.

5. **Cualquier Contenido (ANY)**: Indica que el elemento puede contener cualquier tipo de contenido (texto, elementos, etc.).
> **ANY** se debe usar con cuidado ya que reduce la validación.
   ```xml
   <!ELEMENT contenedor ANY>
   ```
   Aquí, el elemento `<contenedor>` puede contener cualquier contenido, sin restricciones específicas.

## Cardinalidades en la Definición de Elementos

Las **cardinalidades** se utilizan para especificar cuántas veces un elemento puede aparecer dentro de otro elemento. Esto se expresa mediante caracteres especiales:

1. **`?` (Cero o Una Vez)**: El elemento es opcional y puede aparecer como máximo una vez.
   ```xml
   <!ELEMENT subtitulo (fecha?)>
   ```
   El elemento `<fecha>` es opcional dentro de `<subtitulo>`.

2. **`*` (Cero o Más Veces)**: El elemento puede aparecer cualquier número de veces, incluyendo ninguna.
   ```xml
   <!ELEMENT lista (item*)>
   ```
   En este ejemplo, el elemento `<lista>` puede contener cero o más `<item>`.

3. **`+` (Una o Más Veces)**: El elemento debe aparecer al menos una vez, pero puede repetirse.
   ```xml
   <!ELEMENT autor (nombre+)>
   ```
   El elemento `<autor>` debe tener al menos un `<nombre>`, pero puede tener más de uno.

4. **Sin Símbolo**: Si no se usa ningún símbolo, el elemento debe aparecer exactamente una vez.
   ```xml
   <!ELEMENT libro (titulo, autor)>
   ```
   En este caso, `<libro>` debe contener exactamente un `<titulo>` y un `<autor>`.

## Ejemplos Parciales de Definición de Elementos

1. **Definición de Elemento con Contenido de Texto**
   ```xml
   <!ELEMENT resumen (#PCDATA)>
   ```
   El elemento `<resumen>` contiene solo texto.

2. **Definición de Elemento con Elementos Anidados**
   ```xml
   <!ELEMENT capitulo (titulo, parrafo*)>
   ```
   El elemento `<capitulo>` debe tener un `<titulo>` y puede tener cero o más `<parrafo>`.

3. **Definición de Elemento con Contenido Mixto**
   ```xml
   <!ELEMENT comentario (#PCDATA | autor)*>
   ```
   El elemento `<comentario>` puede tener texto y también uno o más `<autor>` en cualquier orden.

## Ejemplo Completo de una DTD

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE biblioteca [
    <!ELEMENT biblioteca (libro+)>
    <!ELEMENT libro (titulo, autor, año, genero?, reseña?)>
    <!ELEMENT titulo (#PCDATA)>
    <!ELEMENT autor (#PCDATA)>
    <!ELEMENT año (#PCDATA)>
    <!ELEMENT genero (#PCDATA)>
    <!ELEMENT reseña (#PCDATA | enfasis)*>
    <!ELEMENT enfasis (#PCDATA)>
]>
<biblioteca>
    <libro>
        <titulo>XML Avanzado</titulo>
        <autor>Juan Pérez</autor>
        <año>2021</año>
        <genero>Tecnología</genero>
    </libro>
    <libro>
        <titulo>Introducción a XML</titulo>
        <autor>María López</autor>
        <año>2019</año>
        <reseña>Este es un <enfasis>excelente</enfasis> libro para empezar.</reseña>
    </libro>
</biblioteca>
```

En este ejemplo completo, se define una estructura para una biblioteca, que contiene uno o más `<libro>`. Cada `<libro>` tiene un `<titulo>`, un `<autor>`, un `<año>`, y un `<genero>` opcional. Además, la `<reseña>` puede tener texto y elementos `<enfasis>` anidados.

## Conclusión

Definir elementos en una DTD es esencial para estructurar un documento XML. Con una correcta definición de tipos de contenido y cardinalidades, se puede asegurar que el documento cumple con las expectativas y restricciones necesarias para ser procesado adecuadamente. Las DTD permiten definir de manera clara y precisa la jerarquía de los elementos, lo cual contribuye a la interoperabilidad y validación de los documentos XML.

[índice](./LM0400_indice.md)
