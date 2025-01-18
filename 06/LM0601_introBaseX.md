[1.Introduccion a XQuery con Basex](./LM0601_introBaseX.md)    
[2.Consultas FLWOR](LM0602_FLWOR.md)  
[3.Operaciones CRUD](LM0603_CRUD.md)


# Introducción a XQuery con BaseX

## 1. Gestión de archivos XML como base de datos en BaseX

BaseX es una herramienta poderosa para trabajar con datos XML, ya que permite almacenar y consultar archivos XML como si fueran bases de datos. A continuación, explicaremos cómo gestionar archivos XML dentro de BaseX, incluyendo la creación de bases de datos, la apertura de archivos, el trabajo con directorios y la exportación de datos.

### **Abrir un archivo XML como base de datos**
Cuando importas un archivo XML en BaseX, este no modifica el archivo original. En su lugar, crea una copia dentro de la base de datos. Esto garantiza que los datos originales permanezcan intactos.

#### **Pasos para abrir un archivo XML en BaseX**
1. Abre BaseX GUI.
2. Ve al menú: `Database > New`.
3. En la ventana que aparece:
   - En "Database Name", escribe un nombre para tu base de datos.
   - En "Input Path", selecciona el archivo XML que deseas importar.
4. Haz clic en **Create** para crear la base de datos.

Ahora puedes explorar y consultar los datos dentro de BaseX sin afectar el archivo original.

### **Trabajar con un directorio de archivos XML**
BaseX permite importar múltiples archivos XML almacenados en un directorio. Esto es útil para trabajar con grandes colecciones de datos.

#### **Pasos para importar un directorio**
1. Sigue los mismos pasos que para abrir un archivo XML.
2. En "Input Path", selecciona un directorio en lugar de un archivo.
3. BaseX importará todos los archivos XML del directorio en una sola base de datos.

#### **Nota importante**
- BaseX solo importará archivos con extensión `.xml`. Otros tipos de archivos serán ignorados.
- Si hay subdirectorios, también se procesarán de forma recursiva.

### **Exploración de los datos importados**
Una vez creada la base de datos, puedes explorar los datos:
- Usa el panel izquierdo de BaseX para navegar por la estructura del XML.
- Ejecuta consultas XQuery para extraer información específica.

### **Exportar los datos**
Si deseas guardar las modificaciones realizadas en BaseX o simplemente exportar una copia de los datos, sigue estos pasos:

#### **Exportar desde BaseX GUI**
1. Ve a `Database > Export`.
2. Selecciona un directorio donde deseas guardar los archivos.
3. BaseX guardará los datos como archivos XML en el directorio seleccionado.

#### **Exportar mediante XQuery**
También puedes usar la función `db:export()` en una consulta XQuery:

```xquery
db:export("nombre_de_tu_base", "/ruta/al/directorio/exportado")
```

Esto exportará los datos almacenados en la base de datos a la ruta especificada.

### **Resumen**
- BaseX trabaja con copias de los archivos XML originales, asegurando que estos no se modifiquen directamente.
- Puedes importar archivos individuales o directorios completos.
- La función de exportación permite guardar los datos en archivos XML externos.

Con estas herramientas básicas, puedes comenzar a gestionar tus datos XML en BaseX de manera eficiente y segura.

[1.Introduccion a XQuery con Basex](./LM0601_introBaseX.md)    
[2.Consultas FLWOR](LM0602_FLWOR.md)  
[3.Operaciones CRUD](LM0603_CRUD.md)