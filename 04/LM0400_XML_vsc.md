[índice](./LM0400_indice.md)

## XML con VSC

# Guía para Configurar Visual Studio Code para Trabajar con XML

Para configurar Visual Studio Code (VSC) y trabajar con archivos XML, incluyendo su creación, edición y validación, sigue estos pasos:

## 1. Instalación de Extensión para XML

Para trabajar con XML de manera efectiva, puedes instalar la siguiente extensión:

- **XML Language Support by Red Hat**:
  - Abre VSC y ve a la pestaña de extensiones (icono de cubo en la barra lateral izquierda).
  - Busca **XML Language Support**.
  - Instala la extensión de Red Hat.
  - **Funciones**: XML Language Support proporciona herramientas avanzadas para la edición y validación de XML, incluyendo validación en tiempo real, autocompletado de etiquetas y atributos, validación contra XSD y DTD, y una mejor integración con XPath y XSLT.

## 2. Configuración de Validación con DTD o XSD

Para validar un archivo XML contra una DTD o un esquema (XSD), sigue las instrucciones a continuación:

### Validación con DTD

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

### Validación con XSD

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

## 3. Creación y Edición de Archivos XML

Para crear y editar archivos XML:

1. Abre VSC.
2. Ve a **Archivo > Nuevo archivo** y guarda el archivo con la extensión `.xml` (por ejemplo, `archivo.xml`).
3. Comienza a escribir tu contenido XML. Con la extensión instalada, deberías ver resaltado de sintaxis, autocompletado de etiquetas y validación en tiempo real.

## 4. Validación de Archivos XML

- Una vez escrito el archivo XML, VSC marcará errores de sintaxis y validación automáticamente en el editor.
- Para validar un archivo XML contra su esquema XSD o DTD:
  - Asegúrate de que el archivo XML contiene una referencia al esquema o DTD.
  - Los errores de validación se mostrarán directamente en el archivo y en la barra de problemas (ícono de una hoja con una señal de advertencia en la parte inferior).

## 5. Ejemplo Básico de XML en VSC

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

### Contenido de la DTD (`libro.dtd`)

```dtd
<!ELEMENT libro (titulo, autor, editorial)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
<!ELEMENT editorial (#PCDATA)>
```

Este archivo se validará automáticamente en VSC con la configuración anterior, y cualquier error en la estructura se mostrará en el editor.

[índice](./LM0400_indice.md)
