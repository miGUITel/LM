[índice](./LM0400_indice.md)

# Introducción a DTD (Document Type Definition)

**DTD (Document Type Definition)** es una tecnología utilizada en XML para definir la estructura, elementos y atributos que debe tener un documento XML. Es esencial para garantizar que un documento XML siga una estructura específica y que todos los elementos y atributos se utilicen correctamente. La DTD se puede utilizar para validar documentos XML, asegurando que cumplen con las reglas definidas.

Las DTD pueden ser de dos tipos: **interna** y **externa**, dependiendo de si la definición está incluida dentro del mismo documento XML o se encuentra en un archivo separado.

## DTD Interna

Una **DTD interna** se declara dentro del propio documento XML, justo después de la declaración del XML y dentro de la declaración `<!DOCTYPE>`. Este tipo de DTD es útil para documentos pequeños y cuando las reglas solo se aplican a un archivo en particular.

**Ejemplo de DTD Interna:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE libro [
    <!ELEMENT libro (titulo, autor)>
    <!ELEMENT titulo (#PCDATA)>
    <!ELEMENT autor (#PCDATA)>
]>
<libro>
    <titulo>Introducción a XML</titulo>
    <autor>Juan Pérez</autor>
</libro>
```

En este ejemplo, la DTD interna define que el elemento `<libro>` debe contener un `<titulo>` y un `<autor>`, ambos con texto (representado por `#PCDATA`, que significa *Parsed Character Data*).

## DTD Externa

Una **DTD externa** se declara en un archivo separado, lo cual facilita la reutilización de la definición en múltiples documentos XML. La DTD externa se referencia mediante la declaración `<!DOCTYPE>` seguida de una URL o ruta al archivo que contiene la DTD.

**Ejemplo de DTD Externa:**

Archivo DTD (`libro.dtd`):
```dtd
<!ELEMENT libro (titulo, autor)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
```

Archivo XML que hace referencia a la DTD externa:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE libro SYSTEM "libro.dtd">
<libro>
    <titulo>Introducción a XML</titulo>
    <autor>Juan Pérez</autor>
</libro>
```

En este caso, la declaración `<!DOCTYPE libro SYSTEM "libro.dtd">` indica que las reglas para el elemento `<libro>` están definidas en el archivo externo `libro.dtd`.

## Ventajas de DTD

- **Reutilización**: Las DTD externas permiten definir una vez la estructura y utilizarla en múltiples documentos.
- **Validación**: Garantizan que los documentos XML cumplan con una estructura específica, evitando errores y asegurando consistencia.

Las DTD son una de las formas más antiguas de definir la estructura de un documento XML, aunque en la actualidad se utilizan otras tecnologías como XML Schema (XSD) que ofrecen mayor flexibilidad y capacidad de definición. Sin embargo, las DTD siguen siendo útiles para aplicaciones simples o para comprender los fundamentos de la validación de XML.


[índice](./LM0400_indice.md)
