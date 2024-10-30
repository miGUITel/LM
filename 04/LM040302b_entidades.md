[índice](./LM0400_indice.md)

# Entidades en las DTD (Document Type Definition)

En el contexto de DTD, las **entidades** son fragmentos reutilizables de información que se pueden definir una sola vez y usar múltiples veces dentro de un documento XML. Las entidades en las DTD son útiles para reducir la redundancia y facilitar el mantenimiento de documentos complejos. Pueden contener texto, caracteres especiales, o incluso referenciar archivos externos.

## Tipos de Entidades en las DTD

Existen dos tipos principales de entidades en las DTD: **entidades generales** y **entidades externas**.

### Entidades Generales

Las **entidades generales** permiten definir un fragmento de texto que puede ser utilizado en diferentes lugares del documento XML. Se definen utilizando la palabra clave `<!ENTITY>` y pueden ser referenciadas en el documento mediante el símbolo `&` seguido del nombre de la entidad y el carácter `;`.

**Ejemplo de Entidad General en una DTD Interna:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE libro [
    <!ENTITY autor "Juan Pérez">
]>
<libro>
    <titulo>Introducción a XML</titulo>
    <autor>&autor;</autor>
</libro>
```

En este ejemplo, la entidad `&autor;` se define como `"Juan Pérez"` y se reutiliza dentro del documento XML. Esto es útil si el mismo valor se repite varias veces, ya que facilita las modificaciones futuras.

### Entidades Externas

Las **entidades externas** permiten incluir contenido que se encuentra en un archivo externo. Esto es particularmente útil cuando se tiene información compartida entre varios documentos XML. Las entidades externas se definen también con `<!ENTITY>`, pero especificando la palabra clave `SYSTEM` seguida de la URL o la ruta al archivo externo.

**Ejemplo de Entidad Externa en una DTD Interna:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE libro [
    <!ENTITY datosExternos SYSTEM "datos.txt">
]>
<libro>
    <contenido>&datosExternos;</contenido>
</libro>
```

En este ejemplo, la entidad `&datosExternos;` incluirá el contenido del archivo `datos.txt` en el lugar donde se haga referencia. Esto permite mantener el contenido actualizado en un solo lugar y reutilizarlo en múltiples documentos.

## Ventajas de Usar Entidades en DTD

1. **Reutilización de Información**: Permiten definir fragmentos de información una sola vez y utilizarlos en todo el documento, lo cual hace que sea fácil mantener el documento actualizado.
2. **Facilita la Gestión de Cambios**: Si una entidad definida se usa en múltiples lugares, un cambio en su definición se reflejará en todas las instancias, lo cual reduce errores y ahorra tiempo.
3. **Modularización del Contenido**: Las entidades externas permiten que el contenido se mantenga en archivos separados, facilitando la organización y el mantenimiento de grandes volúmenes de datos.

## Ejemplo Completo con DTD Interna y Entidades

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE catalogo [
    <!ENTITY editorial "Editorial Ejemplo S.A.">
    <!ENTITY datosExternos SYSTEM "notas.txt">
    <!ELEMENT catalogo (libro+)>
    <!ELEMENT libro (titulo, autor, notas)>
    <!ELEMENT titulo (#PCDATA)>
    <!ELEMENT autor (#PCDATA)>
    <!ELEMENT notas (#PCDATA)>
]>
<catalogo>
    <libro>
        <titulo>XML Básico</titulo>
        <autor>&editorial;</autor>
        <notas>&datosExternos;</notas>
    </libro>
</catalogo>
```

En este ejemplo, la entidad `&editorial;` se utiliza para definir la editorial del libro, mientras que `&datosExternos;` incluye el contenido del archivo externo `notas.txt` en la sección de notas del libro.

## Conclusión

Las entidades en las DTD proporcionan una forma poderosa de simplificar la gestión y reutilización de información dentro de documentos XML. Al definir texto o referencias externas como entidades, se puede mantener la consistencia y reducir la redundancia, lo cual resulta especialmente útil para proyectos que requieren el manejo de grandes volúmenes de datos o documentos interrelacionados.


[índice](./LM0400_indice.md)
