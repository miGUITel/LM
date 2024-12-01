[índice](./LM0400_indice.md)

# Definición de Atributos en la DTD (Document Type Definition)

En una DTD, los **atributos** permiten agregar información adicional a los elementos. Los atributos se utilizan para proporcionar detalles que no encajan en la estructura jerárquica de los elementos. La definición de atributos en una DTD se realiza mediante la declaración `<!ATTLIST>`, que especifica los atributos permitidos para un elemento, sus tipos y si son obligatorios u opcionales.

## Sintaxis de Definición de Atributos

La declaración de atributos en una DTD utiliza `<!ATTLIST>` seguido del nombre del elemento al cual pertenecen los atributos, y luego la lista de los atributos con su respectivo tipo y valor predeterminado.

**Ejemplo de Definición de Atributos:**

```xml
<!ELEMENT libro (titulo, autor)>
<!ATTLIST libro
          id ID #REQUIRED
          genero CDATA #IMPLIED>
```

En este ejemplo:

- Se define un elemento `<libro>` con hijos `<titulo>` y `<autor>`.
- El atributo `id` se define como obligatorio (`#REQUIRED`) y su tipo es `ID`, lo cual significa que debe ser único en todo el documento.
- El atributo `genero` es opcional (`#IMPLIED`) y su tipo es `CDATA`, lo cual significa que puede contener cualquier dato textual.

## Tipos de Atributos



1. **CDATA**: Los atributos de tipo `CDATA` pueden contener cualquier cadena de texto. No tienen restricciones sobre los caracteres que se pueden utilizar.

   ```xml
   <!ATTLIST autor
             nombre CDATA #REQUIRED>
   ```

   En este caso, el atributo `nombre` del elemento `<autor>` puede contener cualquier texto y es obligatorio.

2. **Enumerados**: Permiten definir un conjunto fijo de valores posibles para el atributo. Es útil cuando el valor debe ser uno entre varias opciones específicas.

   ```xml
   <!ATTLIST libro
             genero (Ficción | NoFicción | Ciencia | Historia) "Ficción">
   ```

   En este caso, el atributo genero debe ser uno de los valores listados, y si no se especifica un valor, se asume "Ficción".

3. **ID**: El tipo `ID` se utiliza para definir un identificador único dentro del documento. Solo puede haber un valor `ID` específico en todo el documento XML.

   ```xml
   <!ATTLIST libro
             id ID #REQUIRED>
   ```

   El atributo `id` debe ser único y se utiliza para identificar de forma exclusiva al elemento.

4. **IDREF e IDREFS**: `IDREF` se utiliza para referenciar un atributo de tipo `ID` en otro elemento, creando una relación entre elementos. `IDREFS` permite hacer referencia a múltiples `ID`, separados por espacios.

   ```xml
   <!ATTLIST prestamo
             libroID IDREF #REQUIRED>
   ```

   En este ejemplo, `libroID` hace referencia al atributo `id` de algún elemento `<libro>` definido previamente en el documento.

5. **ENTITY**: Hace referencia a una entidad definida en la DTD.

   ```xml
   <!ATTLIST imagen
             fuente ENTITY #REQUIRED>
   ```

   Aquí, el atributo `fuente` debe ser una entidad previamente definida en la DTD, como una imagen.

## Valor Predeterminado y Reglas de Valor para los Atributos

- **#REQUIRED**: Indica que el atributo es obligatorio y debe especificarse siempre en el elemento.
- **#IMPLIED**: Indica que el atributo es opcional. Si no se proporciona, el elemento sigue siendo válido.
- **Valor Literal**: Se puede proporcionar un valor predeterminado que se utilizará si no se especifica explícitamente en el elemento.
  ```xml
  <!ATTLIST libro
            idioma CDATA "español">
  ```
  En este ejemplo, el atributo `idioma` tiene el valor predeterminado `"español"` si no se indica otro valor.

## Ejemplo Completo con Atributos

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE biblioteca [
    <!ELEMENT biblioteca (libro*)>
    <!ELEMENT libro (titulo, autor)>
    <!ELEMENT titulo (#PCDATA)>
    <!ELEMENT autor (#PCDATA)>
    <!ATTLIST libro
              id ID #REQUIRED
              genero (Ficción | NoFicción | Ciencia | Historia) #IMPLIED
              idioma CDATA "español">
]>
<biblioteca>
    <libro id="b1" genero="Ciencia">
        <titulo>El Universo en una Cáscara de Nuez</titulo>
        <autor>Stephen Hawking</autor>
    </libro>
    <libro id="b2">
        <titulo>Historia del Tiempo</titulo>
        <autor>Stephen Hawking</autor>
    </libro>
</biblioteca>
```

En este ejemplo:

- El elemento `<libro>` tiene atributos `id`, `genero`, e `idioma`.
- El atributo `id` es obligatorio y debe ser único.
- El atributo `genero` es opcional y tiene un conjunto limitado de valores posibles.
- El atributo `idioma` tiene un valor predeterminado de `"español"` si no se especifica otro.

## Conclusión

Los atributos en las DTD son una herramienta poderosa para definir información adicional sobre los elementos, proporcionando detalles importantes sin complicar la estructura del documento. Con tipos de atributos como `CDATA`, `ID`, y valores enumerados, las DTD permiten una definición clara y precisa de los elementos y sus características, facilitando la validación y la consistencia de los documentos XML.

[índice](./LM0400_indice.md)
