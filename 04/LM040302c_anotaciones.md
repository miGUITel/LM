[índice](./LM0400_indice.md)

# Notaciones en la DTD (Document Type Definition)

En una DTD, la declaración **!NOTATION** se utiliza para definir un tipo de dato que hace referencia a un formato específico de contenido externo. Las notaciones se usan cuando es necesario incluir información no textual en un documento XML, como imágenes, archivos binarios, u otros datos cuyo formato debe especificarse claramente.

Las notaciones permiten al parser XML entender el tipo de contenido asociado a un elemento o a una entidad externa, pero no interpretan el contenido en sí, sino que lo identifican para un procesamiento adecuado por otras aplicaciones.

## Sintaxis de !NOTATION en DTD

La notación se declara con `<!NOTATION>` seguida del nombre de la notación y un identificador de sistema (`SYSTEM`) o un identificador público (`PUBLIC`) para definir el tipo de dato.

**Ejemplo de Definición de Notación en una DTD**:

```xml
<!DOCTYPE multimedia [
    <!NOTATION jpg SYSTEM "image/jpeg">
    <!NOTATION png SYSTEM "image/png">

    <!ELEMENT archivo (nombre, tipo)>
    <!ELEMENT nombre (#PCDATA)>
    <!ELEMENT tipo EMPTY>
    <!ATTLIST tipo formato NOTATION (jpg | png) #REQUIRED>
]>

<multimedia>
    <archivo>
        <nombre>imagen1</nombre>
        <tipo formato="jpg"/>
    </archivo>
</multimedia>
```

En este ejemplo:
- La declaración `<!NOTATION jpg SYSTEM "image/jpeg">` indica que `jpg` es una notación que representa el formato de imagen JPEG.
- Similarmente, `<!NOTATION png SYSTEM "image/png">` indica que `png` representa el formato PNG.
- El elemento `<tipo>` utiliza el atributo `formato` para especificar que la imagen debe ser de tipo `jpg` o `png`.

## Tipos de Identificadores en !NOTATION

1. **SYSTEM**: Se usa para definir la notación con un identificador de sistema que proporciona el tipo MIME o una descripción de cómo se debe interpretar el contenido. Este identificador es específico y depende de la implementación del sistema donde se está utilizando.

   ```xml
   <!NOTATION gif SYSTEM "image/gif">
   ```

2. **PUBLIC**: Se utiliza para proporcionar un identificador público que sea más general y que permita definir un formato estándar reconocido. Este identificador es útil para asegurar que la notación sea comprensible en distintos sistemas y aplicaciones.

   ```xml
   <!NOTATION pdf PUBLIC "-//Adobe//DTD PDF 1.4//EN">
   ```

## Usos de !NOTATION en XML

- **Contenido Multimedia**: Cuando se tiene un documento XML que hace referencia a recursos externos como imágenes, video o audio, las notaciones ayudan a especificar el formato exacto del recurso para asegurar que las aplicaciones externas sepan cómo manejar dicho contenido.
- **Integración con Otras Aplicaciones**: Las notaciones se utilizan para integrar el XML con otras aplicaciones que necesitan saber el tipo exacto del contenido para procesarlo correctamente. Por ejemplo, una imagen JPEG puede ser manejada por un visualizador de imágenes específico según la notación indicada.

## Ejemplo Completo con Notaciones

```xml
<!DOCTYPE documento [
    <!NOTATION pdf SYSTEM "application/pdf">
    <!NOTATION svg SYSTEM "image/svg+xml">

    <!ELEMENT recurso (nombre, descripcion, tipo)>
    <!ELEMENT nombre (#PCDATA)>
    <!ELEMENT descripcion (#PCDATA)>
    <!ELEMENT tipo EMPTY>
    <!ATTLIST tipo formato NOTATION (pdf | svg) #REQUIRED>
]>

<documento>
    <recurso>
        <nombre>Diagrama Arquitectura</nombre>
        <descripcion>Diagrama de la arquitectura del sistema en SVG</descripcion>
        <tipo formato="svg"/>
    </recurso>
</documento>
```

En este ejemplo, se utiliza la notación `svg` para especificar que el recurso es un diagrama en formato SVG, mientras que también se podría usar `pdf` para definir documentos en formato PDF. Esto asegura que el contenido se maneje de forma adecuada por aplicaciones compatibles.

## Conclusión

Las notaciones en DTD (`!NOTATION`) proporcionan una forma de definir el tipo de contenido no textual que puede referenciarse en documentos XML, asegurando que dichos contenidos sean procesados correctamente por aplicaciones externas. Aunque no son ampliamente utilizadas en la práctica moderna debido a la adopción de tecnologías más flexibles como XML Schema, siguen siendo una característica valiosa cuando se necesita manejar distintos tipos de recursos en un contexto XML.

[índice](./LM0400_indice.md)
