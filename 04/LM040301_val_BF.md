[índice](./LM0400_indice.md)

# Documentos XML: Bien Formados y Válidos RA4ab

Cuando trabajamos con XML, es fundamental comprender los conceptos de **documento bien formado** y **documento válido**. Ambos términos describen distintos niveles de calidad y conformidad de un documento XML, y son esenciales para asegurar la interoperabilidad y la correcta interpretación de los datos contenidos en un archivo XML.

## Documento Bien Formado

Un documento XML **bien formado** es aquel que sigue las reglas básicas de sintaxis del lenguaje XML. Esto significa que cumple con las siguientes características:

1. **Etiqueta de Apertura y Cierre**: Cada etiqueta debe tener su correspondiente etiqueta de cierre.
   ```xml
   <libro>
       <titulo>Introducción a XML</titulo>
   </libro>
   ```
2. **Jerarquía Correcta**: Las etiquetas deben estar correctamente anidadas. Es decir, si una etiqueta se abre dentro de otra, debe cerrarse antes de cerrar la etiqueta externa.
   ```xml
   <!-- Correcto -->
   <libro>
       <autor>
           <nombre>Juan Pérez</nombre>
       </autor>
   </libro>
   
   <!-- Incorrecto -->
   <libro>
       <autor>
           <nombre>Juan Pérez</autor>
       </nombre>
   </libro>
   ```
3. **Declaración de la Versión XML**: Aunque opcional, es buena práctica incluir la declaración del XML al inicio del documento.
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   ```
4. **Sensibilidad a Mayúsculas y Minúsculas**: XML distingue entre mayúsculas y minúsculas, por lo que `<Titulo>` y `<titulo>` son elementos diferentes.

5. **Atributos Entre Comillas**: Los valores de los atributos deben estar siempre entre comillas dobles o simples.
   ```xml
   <libro titulo="XML Básico"/>
   ```

Si un documento cumple con todas estas reglas, se considera bien formado, lo cual significa que cualquier parser XML puede procesarlo correctamente.

## Documento Válido

Un documento XML **válido** no solo debe estar bien formado, sino que también debe cumplir con un conjunto de reglas definidas en un esquema externo. Estas reglas definen la estructura, los elementos permitidos, los atributos y sus relaciones. Existen dos tecnologías principales para definir estas reglas:

1. **DTD (Document Type Definition)**: El DTD define la estructura básica del documento XML, especificando qué elementos y atributos están permitidos, así como el orden y la cantidad de estos elementos.

   **Ejemplo de DTD**:
   ```xml
   <!DOCTYPE libro [
       <!ELEMENT libro (titulo, autor)>
       <!ELEMENT titulo (#PCDATA)>
       <!ELEMENT autor (#PCDATA)>
   ]>
   ```
   En este ejemplo, el DTD especifica que un `<libro>` debe contener un `<titulo>` y un `<autor>`, ambos con texto (PCDATA).

2. **XML Schema (XSD)**: XSD es una tecnología más avanzada y flexible para definir la estructura de un documento XML. Permite especificar tipos de datos, restricciones, y validaciones más complejas que DTD.

   **Ejemplo de XSD**:
   ```xml
   <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
       <xs:element name="libro">
           <xs:complexType>
               <xs:sequence>
                   <xs:element name="titulo" type="xs:string"/>
                   <xs:element name="autor" type="xs:string"/>
               </xs:sequence>
           </xs:complexType>
       </xs:element>
   </xs:schema>
   ```
   En este ejemplo, el esquema XSD especifica que el elemento `<libro>` debe tener un `<titulo>` y un `<autor>`, ambos de tipo string.

## Necesidad de Definir un Documento XML y sus Reglas

Definir un documento XML con reglas específicas tiene varias ventajas fundamentales:

1. **Garantizar la Consistencia**: Las reglas garantizan que todos los documentos XML de un tipo determinado tendrán la misma estructura, lo cual facilita la validación y el procesamiento de los datos.

2. **Interoperabilidad**: Asegura que los documentos puedan ser interpretados de la misma manera por diferentes sistemas y aplicaciones, permitiendo el intercambio de datos sin errores.

3. **Validación Automática**: Permite que herramientas automáticas validen los documentos para asegurar que cumplen con la estructura y reglas esperadas antes de ser procesados, lo cual reduce los errores y problemas en la transmisión de datos.

## Tecnologías Relacionadas con la Definición de Documentos XML

- **DTD (Document Type Definition)**: Define las reglas básicas para los documentos XML. Es menos flexible que XSD, pero es más simple y puede ser suficiente para estructuras básicas.

- **XML Schema (XSD)**: Es la tecnología más utilizada hoy en día para definir reglas complejas en documentos XML. Proporciona un mayor control sobre los tipos de datos y las relaciones entre los elementos.

- **RELAX NG**: Es otra tecnología para definir la estructura de un documento XML. Es más simple que XSD y se considera más legible, aunque no tiene la misma adopción masiva.

- **Schematron**: Permite definir reglas de validación adicionales para XML que no pueden ser cubiertas fácilmente con DTD o XSD. Es útil para validar reglas de negocio más complejas.

## Conclusión

Un documento XML bien formado es la base para cualquier intercambio de datos estructurados, mientras que un documento válido asegura que dichos datos cumplen con las reglas específicas de una aplicación o contexto. Definir reglas claras mediante DTD, XSD u otras tecnologías es crucial para garantizar la interoperabilidad, la consistencia y la calidad de los datos en aplicaciones modernas.

[índice](./LM0400_indice.md)

[DTD detallado](https://www.mclibre.org/consultar/xml/lecciones/xml-dtd.html#ddiv-declaracion-notaciones)

[Resumen DTD](https://www.mclibre.org/consultar/xml/lecciones/xml-dtd-resumen.html)
