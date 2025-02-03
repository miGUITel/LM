[1.Introduccion a XQuery con Basex](./LM0601_introBaseX.md)    
[2.Consultas FLWOR](LM0602_FLWOR.md)  
[3.Operaciones CRUD](LM0603_CRUD.md)

## 3. Insertar, modificar y eliminar datos

En esta sección aprenderás a realizar operaciones de inserción, modificación y eliminación de datos XML en **BaseX**. Estas operaciones son posibles gracias a **XQuery Update Facility**, una extensión del lenguaje que permite realizar cambios en los datos almacenados en una base de datos XML.

### **Puntos clave**

- Las operaciones de actualización afectan a los datos dentro de la base de datos, no al archivo XML original.
- Para reflejar los cambios en un archivo externo, debes exportar la base de datos actualizada.

Usaremos el siguiente archivo XML, llamado `productos.xml`, como referencia:

```xml
<productos>
  <producto>
    <nombre>Producto A</nombre>
    <precio>10.99</precio>
    <categoria>Electronica</categoria>
  </producto>
  <producto>
    <nombre>Producto B</nombre>
    <precio>15.50</precio>
    <categoria>Hogar</categoria>
  </producto>
</productos>
```

---

### **1. Insertar nuevos datos**

Puedes agregar nuevos nodos a cualquier parte del documento XML con la instrucción `insert node`.

#### **Ejemplo: Agregar un nuevo producto**

Agregaremos un nuevo producto al final de la lista de productos:

```xquery
insert node <producto>
  <nombre>Producto C</nombre>
  <precio>7.25</precio>
  <categoria>Electronica</categoria>
</producto>
into /productos
```

**Resultado:**

```xml
<productos>
  <producto>
    <nombre>Producto A</nombre>
    <precio>10.99</precio>
    <categoria>Electronica</categoria>
  </producto>
  <producto>
    <nombre>Producto B</nombre>
    <precio>15.50</precio>
    <categoria>Hogar</categoria>
  </producto>
  <producto>
    <nombre>Producto C</nombre>
    <precio>7.25</precio>
    <categoria>Electronica</categoria>
  </producto>
</productos>
```

---

### **2. Modificar datos existentes**

Para cambiar el valor de un nodo o atributo, utiliza `replace value of node`.

#### **Ejemplo: Cambiar el precio de un producto**

Actualizaremos el precio del "Producto A":

```xquery
replace value of node /productos/producto[nombre="Producto A"]/precio
with "12.99"
```

**Resultado:**

```xml
<productos>
  <producto>
    <nombre>Producto A</nombre>
    <precio>12.99</precio>
    <categoria>Electronica</categoria>
  </producto>
  <producto>
    <nombre>Producto B</nombre>
    <precio>15.50</precio>
    <categoria>Hogar</categoria>
  </producto>
</productos>
```

---

### **3. Eliminar datos**

Para eliminar nodos o elementos, usa `delete node`.

#### **Ejemplo: Eliminar un producto**

Eliminaremos el "Producto B":

```xquery
delete node productos/producto[nombre="Producto C"]
```

**Resultado:**

```xml
<productos>
  <producto>
    <nombre>Producto A</nombre>
    <precio>12.99</precio>
    <categoria>Electronica</categoria>
  </producto>
</productos>
```

---

### **4. Exportar los datos actualizados**

Los cambios realizados en BaseX afectan solo a la base de datos. Si deseas guardar los cambios en un archivo XML externo, debes exportar la base de datos:

#### **Exportar desde BaseX GUI**

1. Ve a `Database > Export`.
2. Selecciona una ubicación para guardar los datos actualizados.

#### **Exportar con XQuery**

Puedes usar el siguiente comando para exportar la base de datos a un archivo:

```xquery
db:export("nombre_de_tu_base", "/ruta/deseada/productos_actualizados.xml")
```

---

### **Resumen**

- Puedes insertar, modificar y eliminar nodos XML en BaseX utilizando las funciones de **XQuery Update Facility**.
- Los cambios se realizan en la base de datos y deben exportarse para reflejarse en un archivo externo.
- Estas herramientas permiten gestionar datos XML de forma flexible y eficiente.

Con esto, tienes los conocimientos fundamentales para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en documentos XML utilizando BaseX. ¡Sigue practicando para dominar XQuery!

[1.Introduccion a XQuery con Basex](./LM0601_introBaseX.md)    
[2.Consultas FLWOR](LM0602_FLWOR.md)  
[3.Operaciones CRUD](LM0603_CRUD.md)