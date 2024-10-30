[índice](./LM0400_indice.md)

# Introducción a XML RA1f

XML, o *eXtensible Markup Language*, es un lenguaje de marcado que define una estructura estandarizada para almacenar y transmitir información. Fue desarrollado por el *World Wide Web Consortium* (W3C) en 1998 con el objetivo de mejorar el intercambio de datos de manera flexible y comprensible tanto para humanos como para máquinas. A diferencia de HTML, que se centra en la presentación visual de contenido, XML se enfoca en la estructura y el almacenamiento de datos, permitiendo la creación de etiquetas personalizadas para describir el significado de los datos de forma precisa y organizada.

## Importancia de XML

XML se ha convertido en un estándar fundamental en el mundo de la tecnología debido a su flexibilidad, legibilidad y compatibilidad con diversos sistemas y plataformas. Su independencia de plataforma y capacidad de ser interpretado en distintos lenguajes de programación facilita su adopción en aplicaciones web, servicios de API y bases de datos. XML permite que los datos sean compartidos entre diferentes sistemas sin la necesidad de realizar conversiones o transformaciones complejas, lo cual optimiza la integración y comunicación entre plataformas heterogéneas.

## Relación con otros lenguajes de marcado

Aunque XML no reemplaza otros lenguajes de marcado, se utiliza comúnmente en combinación con ellos. Algunas de las principales relaciones incluyen:

- **HTML:** Ambos comparten similitudes en la estructura basada en etiquetas. Mientras HTML se orienta a la presentación y formato de datos, XML se centra en la organización y descripción de los datos.
- **XHTML:** Es una reformulación de HTML que combina la flexibilidad de XML con la estructura de HTML, lo que permite un mayor rigor en la validación de documentos web.
- **JSON:** XML y JSON (JavaScript Object Notation) son formatos ampliamente utilizados para el intercambio de datos. Aunque JSON es preferido en entornos web modernos por su simplicidad, XML sigue siendo relevante en sistemas heredados y aplicaciones donde la validación de datos es fundamental.
- **SOAP y REST:** XML es utilizado en servicios web, especialmente en protocolos como SOAP, para estructurar y transmitir datos de manera estandarizada. En servicios REST, aunque XML es soportado, JSON ha ganado mayor popularidad en años recientes.

XML se mantiene como un lenguaje de marcado esencial en tecnología, especialmente en sistemas donde la integridad y validación de datos son críticos.

# Ejemplo de XML en el Dominio de la Informática

Este ejemplo de XML ilustra cómo se puede definir un documento simple usando únicamente elementos, sin atributos, en el contexto de los campos de estudio de la informática. La estructura contiene un catálogo de cursos de informática con información sobre las asignaturas y su descripción.

[Ejemplo xml 1](./ejemplos/0401.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cursosInformaticos>
    <curso>
        <nombre>Introducción a la Programación</nombre>
        <campo>Desarrollo de Software</campo>
        <descripcion>Curso básico sobre fundamentos de programación utilizando Python.</descripcion>
    </curso>
    <curso>
        <nombre>Redes de Computadoras</nombre>
        <campo>Redes y Comunicaciones</campo>
        <descripcion>Estudio de los conceptos fundamentales de redes de computadoras y protocolos de comunicación.</descripcion>
    </curso>
    <curso>
        <nombre>Base de Datos</nombre>
        <campo>Administración de Datos</campo>
        <descripcion>Introducción a los sistemas de gestión de bases de datos relacionales.</descripcion>
    </curso>
    <curso>
        <nombre>Sistemas Operativos</nombre>
        <campo>Infraestructura y Sistemas</campo>
        <descripcion>Estudio de los sistemas operativos, incluyendo procesos, memoria y sistemas de archivos.</descripcion>
    </curso>
</cursosInformaticos>
```
> Puedes pegarlo en un archivo .xml y visualizarlo en el navegador web
> 
## Explicación del Ejemplo

- **Elemento Raíz**: `<cursosInformaticos>` es el elemento raíz que contiene todos los cursos.
- **Elemento `<curso>`**: Cada curso se define con un elemento `<curso>`, que contiene otros elementos que describen sus características.
- **Elementos Hijos**:
  - `<nombre>`: Indica el nombre del curso.
  - `<campo>`: Describe el campo específico dentro de la informática al que pertenece el curso.
  - `<descripcion>`: Proporciona una breve descripción del curso.

Este ejemplo es un buen punto de partida para entender cómo se puede estructurar un documento XML que contiene información jerárquica sin utilizar atributos. Cada curso está claramente definido, y la estructura es fácil de leer y extender. Esto hace que sea adecuado para representar datos relacionados con estudios en informática de manera organizada y lógica.



[Volver al índice principal](./LM0400_indice.md)

[Más info](https://www.mclibre.org/consultar/xml/lecciones/xml-quees.html)