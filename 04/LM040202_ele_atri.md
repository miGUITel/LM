[índice](./LM0400_indice.md)

# Estructura, Sintaxis, Elementos y Atributos en XML RA1g

La estructura y sintaxis de XML están diseñadas para ser claras y consistentes, de modo que los datos puedan almacenarse y compartirse de forma estándar y comprensible tanto por humanos como por máquinas. Cada documento XML se compone de elementos y atributos organizados de manera jerárquica, lo que facilita la descripción y validación de los datos.

## Estructura de un Documento XML

Un documento XML está compuesto por una serie de elementos anidados que describen la jerarquía de la información. La estructura básica incluye:

- **Declaración XML:** Es el encabezado que define la versión, la codificación y si el documento es independiente o no.
- **Elemento raíz:** Todo documento XML debe tener un único elemento raíz que contenga a todos los demás elementos.
- **Elementos y atributos:** Los elementos son las unidades de datos principales, mientras que los atributos ofrecen metadatos o características adicionales de los elementos.

### Ejemplo de Estructura de un Documento XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<libro>
    <titulo>Introducción a XML</titulo>
    <autor edad="35">Juan Pérez</autor>
    <año>2023</año>
</libro>
```

## Sintaxis de XML

XML sigue una sintaxis estricta que debe respetarse para que los documentos sean válidos. A continuación se detallan las principales reglas de sintaxis que rigen la creación de elementos y atributos, así como las relaciones entre estos.

### Reglas para la Asignación de Nombres de Elementos

Al definir elementos en XML, se deben seguir ciertas reglas para garantizar que los nombres sean válidos y consistentes:

1. **Inicio del nombre:** Los nombres de los elementos deben comenzar con una letra o un guion bajo (`_`). No pueden comenzar con un número ni con caracteres especiales.
2. **Uso de caracteres válidos:** Solo se permiten letras, dígitos, guiones bajos (`_`), guiones (`-`), puntos (`.`) y dos puntos (`:`), aunque estos últimos están reservados principalmente para espacios de nombres (*namespaces*).
3. **Sensibilidad a mayúsculas y minúsculas:** XML distingue entre mayúsculas y minúsculas, por lo que `<titulo>` y `<Titulo>` se interpretan como diferentes.
4. **Espacios en blanco no permitidos:** Los nombres de los elementos no pueden contener espacios.

#### Ejemplos de Nombres Válidos e Inválidos para Elementos

```xml
<!-- Válidos -->
<nombre>...</nombre>
<_nombre>...</_nombre>
<nombre_libro>...</nombre_libro>

<!-- Inválidos -->
<1nombre>...</1nombre> <!-- Comienza con un número -->
<nombre libro>...</nombre libro> <!-- Contiene un espacio -->
<nombre$>...</nombre$> <!-- Contiene un carácter especial no permitido -->
```

### Reglas para la Creación de Atributos

Los atributos en XML proporcionan información adicional sobre un elemento y deben definirse con cuidado, siguiendo estas reglas:

1. **Se escriben entre comillas simples o dobles:** Los valores de los atributos deben ir siempre entre comillas simples o dobles.
2. **Definición en la etiqueta de apertura:** Los atributos deben ir dentro de la etiqueta de apertura del elemento.
3. **Formato de pares nombre-valor:** Cada atributo debe definirse como un par `nombre="valor"`. El valor siempre debe ir entre comillas dobles o simples.
4. **Unicidad de nombres:** Los nombres de los atributos deben ser únicos dentro de un mismo elemento, es decir, no pueden repetirse.
5. **Nombres de atributos válidos:** Siguen las mismas reglas que los nombres de los elementos, pero no deben contener caracteres especiales o espacios.

#### Ejemplos de Creación Correcta e Incorrecta de Atributos

```xml
<!-- Correcto -->
<autor nombre="Juan Pérez" edad="35">...</autor>

<!-- Incorrecto -->
<autor nombre=Juan Pérez edad=35>...</autor> <!-- Falta de comillas -->
<autor nombre="Juan" nombre="Pérez">...</autor> <!-- Atributos duplicados -->
<autor nombre-autor="Juan Pérez">...</autor> <!-- Nombre de atributo con carácter especial no permitido -->
```

## Relaciones entre Elementos: Hijo, Padre y Hermano

La estructura jerárquica de XML permite definir relaciones claras entre los elementos. Cada elemento puede relacionarse como **padre**, **hijo** o **hermano** respecto a otros elementos:

- **Elemento Padre:** Un elemento que contiene a otros elementos. Por ejemplo, `<libro>` es el elemento padre de `<titulo>`, `<autor>`, y `<año>` en la estructura siguiente.
- **Elemento Hijo:** Un elemento que está contenido dentro de otro elemento. Por ejemplo, `<titulo>` y `<autor>` son hijos del elemento `<libro>`.
- **Elemento Hermano:** Elementos que comparten el mismo elemento padre y están al mismo nivel en la jerarquía. En el ejemplo, `<titulo>`, `<autor>`, y `<año>` son hermanos, ya que están contenidos dentro del mismo elemento `<libro>`.

### Ejemplo de Relaciones entre Elementos

```xml
<libro> <!-- Padre -->
    <titulo>Introducción a XML</titulo> <!-- Hijo de libro, hermano de autor y año -->
    <autor>Juan Pérez</autor> <!-- Hijo de libro, hermano de titulo y año -->
    <año>2023</año> <!-- Hijo de libro, hermano de titulo y autor -->
</libro>
```

Estas relaciones permiten organizar los datos de manera lógica y estructurada, lo cual es fundamental para procesar documentos XML correctamente y extraer información específica según la jerarquía definida.

[Volver al índice principal](./LM0400_indice.md)

