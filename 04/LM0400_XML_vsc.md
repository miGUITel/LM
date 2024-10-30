[índice](./LM0400_indice.md)

## XML con VSC

Para configurar Visual Studio Code (VSC) para trabajar con archivos XML, incluyendo creación, edición y validación, sigue estos pasos:

### 1. Instalación de Extensiones para XML
Para trabajar con XML de manera efectiva, puedes instalar las siguientes extensiones:

- **XML Tools**:
  - Abre VSC.
  - Ve a la pestaña de extensiones (icono de cubo en la barra lateral izquierda) y busca **XML Tools**.
  - Instala la extensión de "DotJoshJohnson XML Tools".
  - **Funciones**: XML Tools proporciona herramientas básicas para formatear XML, validar archivos, y realizar comprobaciones con esquemas XML (XSD).

### 2. Configuración de Validación con DTD o XSD
Para validar XML contra una DTD o un esquema (XSD):

- **Validación con DTD**:
  - Debes incluir una referencia a la DTD en la parte superior del archivo XML utilizando `DOCTYPE`.
  - Si la DTD es externa, debes proporcionar la ruta correcta para que VSC pueda localizarla y realizar la validación.

  Ejemplo:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE libro SYSTEM "libro.dtd">
  <libro>
    <titulo>Aprendiendo XML</titulo>
    <autor>Juan Pérez</autor>
    <editorial>Editorial Tech</editorial>
  </libro>
  ```

- **Validación con XSD**:
  - Asegúrate de que tu archivo XML tenga una referencia al XSD con un atributo `xsi:schemaLocation`.
  - Si tienes el XSD en un archivo local, coloca el XSD en la misma carpeta que tu XML o proporciona la ruta en `schemaLocation`.

  Ejemplo:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <nota xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.example.com nota.xsd">
    <!-- Contenido XML aquí -->
  </nota>
  ```

### 3. Creación y Edición de Archivos XML
Para crear y editar archivos XML:
1. Abre VSC.
2. Ve a **Archivo > Nuevo archivo** y cambia el nombre a `archivo.xml`.
3. Comienza a escribir tu contenido XML. Con las extensiones instaladas, deberías ver resaltado de sintaxis, autocompletado de etiquetas y validación en tiempo real.

### 4. Validación de XML
- Una vez escrito el archivo XML, VSC marcará errores de sintaxis y validación automáticamente en el editor.
- Para validar un archivo XML contra su esquema XSD o DTD:
  - Asegúrate de que el archivo XML contiene una referencia al esquema o DTD.
  - Los errores de validación se mostrarán directamente en el archivo y en la barra de problemas (ícono de una hoja con una señal de advertencia en la parte inferior).

### 5. Ejecución de Validación Manual con XML Tools
Para formatear o validar manualmente:
1. Haz clic derecho dentro del archivo XML.
2. Selecciona **XML Tools: Validate against Schema** o **Format Document** para corregir la indentación.

### Ejemplo Básico de XML en VSC
Para crear y validar un archivo XML simple con una DTD:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE libro SYSTEM "libro.dtd">
<libro>
  <titulo>Aprendiendo XML</titulo>
  <autor>Juan Pérez</autor>
  <editorial>Editorial Tech</editorial>
</libro>
```

Contenido de la DTD (`libro.dtd`):

```dtd
<!ELEMENT libro (titulo, autor, editorial)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
<!ELEMENT editorial (#PCDATA)>
```

Este archivo se validará automáticamente en VSC con la configuración anterior, y cualquier error en la estructura se mostrará en el editor.



### Anexo: Instalación de XML Language Support by Red Hat para Avanzar en XSLT y XQuery
Cuando los alumnos estén preparados para avanzar hacia el uso de XSLT y XQuery, se recomienda instalar la extensión **XML Language Support by Red Hat**. Esta extensión proporciona características avanzadas como:
- Validación en tiempo real.
- Autocompletado y validación con XSD.
- Mejor integración con XPath y soporte para trabajar con transformaciones XSLT.

#### Instrucciones para Instalar XML Language Support by Red Hat:
1. Abre VSC.
2. Ve a la pestaña de extensiones (icono de cubo en la barra lateral izquierda) y busca **XML Language Support**.
3. Instala la extensión de Red Hat.

Esta herramienta permitirá a los estudiantes profundizar en transformaciones de datos y consultas complejas, facilitando el aprendizaje de tecnologías avanzadas relacionadas con XML.

[índice](./LM0400_indice.md)
