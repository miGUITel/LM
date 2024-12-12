[índice](./LM0400_indice.md)

## ENTIDADES PARAMÉTRICAS

Las **entidades paramétricas** en XML son una forma de definir y reutilizar contenido dentro de un Documento de Tipo de Definición (**DTD**, por sus siglas en inglés). Estas entidades se utilizan exclusivamente dentro de DTDs, ya sean internas o externas, y permiten simplificar la definición de estructuras XML complejas.

### Características principales de las entidades paramétricas:
1. **Se definen con `%`**: A diferencia de las entidades generales, que usan `&`, las entidades paramétricas comienzan con un `%` y terminan con un punto y coma (`;`).
2. **Uso exclusivo en DTD**: No se utilizan directamente en el contenido del documento XML, sino en las definiciones de la DTD.
3. **Reutilización de definiciones**: Ayudan a evitar la duplicación de código dentro de una DTD, facilitando el mantenimiento y la legibilidad.

### Sintaxis
La definición de una entidad paramétrica sigue esta estructura:
```xml
<!ENTITY % nombreEntidad "valorEntidad">
```

Para usar la entidad en el DTD:
```xml
%nombreEntidad;
```

### Ejemplo práctico

Supongamos que queremos definir una DTD para un documento que incluye una lista de libros. Queremos reutilizar una estructura común.

#### Definición de la DTD:
```xml
<!DOCTYPE biblioteca [
  <!-- Definimos una entidad paramétrica -->
  <!ENTITY % libroElementos "titulo, autor, anio">
  
  <!-- Utilizamos la entidad para definir un elemento -->
  <!ELEMENT libro (%libroElementos;)>
  <!ELEMENT titulo (#PCDATA)>
  <!ELEMENT autor (#PCDATA)>
  <!ELEMENT anio (#PCDATA)>
  <!ELEMENT biblioteca (libro+)>
]>
```

#### Documento XML que usa esta DTD:
```xml
<biblioteca>
  <libro>
    <titulo>Aprendiendo XML</titulo>
    <autor>Juan Pérez</autor>
    <anio>2024</anio>
  </libro>
</biblioteca>
```

### Ventajas
1. **Facilita la lectura y el mantenimiento**: Se puede cambiar la definición de la estructura central en un solo lugar.
2. **Evita errores**: Al reutilizar definiciones, reduces inconsistencias en los elementos o atributos.
3. **Ideal para DTDs grandes y complejas**: Ayuda a mantener la organización en proyectos más grandes.

### Diferencias con las entidades generales
| Característica             | Entidades Generales             | Entidades Paramétricas       |
|----------------------------|---------------------------------|------------------------------|
| **Prefijo**                | `&`                             | `%`                          |
| **Alcance**                | Documento XML                   | DTD                          |
| **Uso**                    | Representar texto o caracteres  | Representar partes de la DTD |


### EJEMPLO MÁS COMPLEJO

Aquí tienes un ejemplo más elaborado en el que se reutiliza una entidad paramétrica para definir elementos relacionados con libros y revistas dentro de una biblioteca. Esto muestra claramente cómo la entidad permite simplificar y mantener consistente la definición de elementos que comparten características comunes:

```xml
<!DOCTYPE biblioteca [
  <!-- Definimos una entidad paramétrica para los elementos comunes -->
  <!ENTITY % publicacionElementos "titulo, autor, anio, editorial">
  
  <!-- Utilizamos la entidad para definir elementos comunes a libros y revistas -->
  <!ELEMENT libro (%publicacionElementos;, genero)>
  <!ELEMENT revista (%publicacionElementos;, volumen, numero)>
  
  <!-- Definimos cada elemento utilizado por las publicaciones -->
  <!ELEMENT titulo (#PCDATA)>
  <!ELEMENT autor (#PCDATA)>
  <!ELEMENT anio (#PCDATA)>
  <!ELEMENT editorial (#PCDATA)>
  <!ELEMENT genero (#PCDATA)>
  <!ELEMENT volumen (#PCDATA)>
  <!ELEMENT numero (#PCDATA)>
  
  <!-- Definimos la biblioteca como un conjunto de libros y revistas -->
  <!ELEMENT biblioteca (libro | revista)+>
]>
```

### Explicación de las ventajas:
1. **Reutilización y consistencia:** La entidad `%publicacionElementos` se usa tanto para los libros como para las revistas, evitando repetir las definiciones de elementos comunes.
2. **Facilidad de mantenimiento:** Si necesitas cambiar la estructura de los elementos comunes (por ejemplo, agregar un nuevo elemento como `idioma`), solo debes actualizar la entidad `%publicacionElementos`, y el cambio se aplicará automáticamente a los libros y revistas.
3. **Lectura más clara:** Al usar la entidad paramétrica, la estructura es más compacta y comprensible, ya que se evita la redundancia en las definiciones.

Este ejemplo es más claro y resalta la ventaja de usar entidades paramétricas en documentos DTD para definir estructuras más complejas y reutilizables.

[índice](./LM0400_indice.md)