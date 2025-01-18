[1.Introduccion a XQuery con Basex](./LM0601_introBaseX.md)    
[2.Consultas FLWOR](LM0602_FLWOR.md)  
[3.Operaciones CRUD](LM0603_CRUD.md)

## 2. Consultas FLWOR

Las consultas **FLWOR** (por sus siglas en inglés: **For, Let, Where, Order by, Return**) son una de las herramientas más potentes de XQuery para trabajar con datos XML. Permiten iterar, filtrar, ordenar y construir resultados de manera estructurada.

En esta sección aprenderás los conceptos básicos y verás ejemplos prácticos de cómo usar FLWOR en BaseX.

---

### **Breve explicación de la sintaxis FLWOR**
Una consulta FLWOR se estructura como sigue:

```xquery
for $variable in expresión
let $otraVariable := expresiónOpcional
where condición
order by criterio
return resultado
```

- **For**: Itera sobre una colección de elementos XML.
- **Let**: Define variables auxiliares para simplificar la consulta.
- **Where**: Filtra los resultados según una condición.
- **Order by**: Ordena los resultados según un criterio.
- **Return**: Define el formato de los datos devueltos.

No todos los elementos de FLWOR son obligatorios. Por ejemplo, una consulta puede no incluir `where` u `order by`.

---

### **XML de ejemplo**
Usaremos el siguiente archivo XML llamado `productos.xml` para los ejemplos:

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

### **Ejemplos de consultas FLWOR**

#### **Ejemplo 1: Iterar sobre los productos**
Listar todos los productos con su precio:

```xquery
for $producto in doc("productos.xml")/productos/producto
return <li>{ $producto/nombre/text() } - { $producto/precio/text() } €</li>
```

**Salida:**
```html
<li>Producto A - 10.99 €</li>
<li>Producto B - 15.50 €</li>
<li>Producto C - 7.25 €</li>
```

---

#### **Ejemplo 2: Filtrar productos por categoría**
Mostrar solo los productos de la categoría "Electronica":

```xquery
for $producto in doc("productos.xml")/productos/producto
where $producto/categoria = "Electronica"
return <li>{ $producto/nombre/text() }</li>
```

**Salida:**
```html
<li>Producto A</li>
<li>Producto C</li>
```

---

#### **Ejemplo 3: Ordenar productos por precio**
Listar los productos ordenados de menor a mayor precio:

```xquery
for $producto in doc("productos.xml")/productos/producto
order by $producto/precio
return <li>{ $producto/nombre/text() } - { $producto/precio/text() } €</li>
```

**Salida:**
```html
<li>Producto C - 7.25 €</li>
<li>Producto A - 10.99 €</li>
<li>Producto B - 15.50 €</li>
```

---

#### **Ejemplo 4: Usar `let` para calcular valores**
Calcular un precio con descuento del 10% para cada producto:

```xquery
for $producto in doc("productos.xml")/productos/producto
let $precioConDescuento := $producto/precio * 0.9
return <li>{ $producto/nombre/text() } - { format-number($precioConDescuento, '#.00') } €</li>
```

**Salida:**
```html
<li>Producto A - 9.89 €</li>
<li>Producto B - 13.95 €</li>
<li>Producto C - 6.53 €</li>
```

---

### **Resumen**
- Las consultas FLWOR son esenciales para manejar y transformar datos XML.
- Puedes iterar, filtrar, ordenar y transformar datos de manera sencilla.
- Combina varias expresiones para crear consultas más complejas y útiles.

En la siguiente sección aprenderás cómo insertar, modificar y eliminar datos en una base de datos XML utilizando BaseX.

[1.Introduccion a XQuery con Basex](./LM0601_introBaseX.md)    
[2.Consultas FLWOR](LM0602_FLWOR.md)  
[3.Operaciones CRUD](LM0603_CRUD.md)