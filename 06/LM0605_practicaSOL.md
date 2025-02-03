Aquí tienes una serie de **ejercicios prácticos** para que tus alumnos practiquen **expresiones XQuery básicas**, basados en una lista de productos.

---

## **Ejercicios de XQuery: Expresiones Básicas**

📌 **Datos de partida:** Supongamos que tienes un archivo XML llamado `productos.xml` con la siguiente estructura:

```xml
<productos>
    <producto>
        <nombre>Teclado mecánico</nombre>
        <precio>49.99</precio>
        <categoria>Electronica</categoria>
    </producto>
    <producto>
        <nombre>Ratón inalámbrico</nombre>
        <precio>25.75</precio>
        <categoria>Electronica</categoria>
    </producto>
    <producto>
        <nombre>Silla ergonómica</nombre>
        <precio>129.99</precio>
        <categoria>Oficina</categoria>
    </producto>
    <producto>
        <nombre>Monitor 24 pulgadas</nombre>
        <precio>189.99</precio>
        <categoria>Electronica</categoria>
    </producto>
    <producto>
        <nombre>Batidora de mano</nombre>
        <precio>22.49</precio>
        <categoria>Hogar</categoria>
    </producto>
</productos>
```

---

### **🔹 1. Expresiones Aritméticas**
✍ **Ejercicio 1:** Calcula el precio total de todos los productos.

💡 **Pista:** Usa `sum()`

```xquery
sum(//producto/precio)
```

✍ **Ejercicio 2:** Aumenta el precio de cada producto en un 10% y muestra el resultado.

💡 **Pista:** Multiplica el precio por `1.10`

```xquery
for $p in //producto
return <nuevo-precio>{ $p/precio * 1.10 }</nuevo-precio>
```

---

### **🔹 2. Comparadores y Expresiones Lógicas**
✍ **Ejercicio 3:** Muestra los productos que cuestan más de **50€**.

💡 **Pista:** Usa `where` y `>`

```xquery
for $p in //producto
where $p/precio > 50
return $p
```

✍ **Ejercicio 4:** Muestra los productos de la categoría **"Electronica"** que cuesten menos de **100€**.

💡 **Pista:** Usa `and` en la condición.

```xquery
for $p in //producto
where $p/categoria = "Electronica" and $p/precio < 100
return $p
```

---

### **🔹 3. Manipulación de Cadenas de Texto**
✍ **Ejercicio 5:** Muestra todos los productos cuyo nombre **contenga la palabra "24"**.

💡 **Pista:** Usa `contains()`

```xquery
for $p in //producto
where contains($p/nombre, "24")
return $p
```

✍ **Ejercicio 6:** Convierte todos los nombres de los productos a **mayúsculas**.

💡 **Pista:** Usa `upper-case()`

```xquery
for $p in //producto
return upper-case($p/nombre)
```

---

### **🔹 4. Funciones Agregadas**
✍ **Ejercicio 7:** Encuentra el precio **más alto** de los productos.

💡 **Pista:** Usa `max()`

```xquery
max(//producto/precio)
```

✍ **Ejercicio 8:** Calcula el **precio promedio** de todos los productos.

💡 **Pista:** Usa `avg()`

```xquery
avg(//producto/precio)
```

---

### **🔹 5. Condicionales (`if-then-else`)**
✍ **Ejercicio 9:** Muestra los productos con etiquetas `<caro>` si su precio es mayor a **100€** y `<barato>` si es menor o igual a **100€**.

💡 **Pista:** Usa `if-then-else`

```xquery
for $p in //producto
return if ($p/precio > 100) 
       then <caro>{$p/nombre}</caro> 
       else <barato>{$p/nombre}</barato>
```

---

### **🔹 6. Ordenación (`order by`)**
✍ **Ejercicio 10:** Ordena los productos por **precio ascendente**.

💡 **Pista:** Usa `order by`

```xquery
for $p in //producto
order by $p/precio ascending
return $p
```

✍ **Ejercicio 11:** Ordena los productos por **nombre en orden alfabético inverso**.

```xquery
for $p in //producto
order by $p/nombre descending
return $p
```

---

### **🔹 7. Creación de nuevos elementos XML**
✍ **Ejercicio 12:** Genera una lista en formato XML donde cada producto esté dentro de un `<item>` con su nombre y precio.

💡 **Pista:** Usa `{}` para incrustar valores dentro de etiquetas XML.

```xquery
for $p in //producto
return <item>{$p/nombre} - {$p/precio}€</item>
```

---

### **🔹 8. Uso de Variables (`let`)**
✍ **Ejercicio 13:** Almacena el precio promedio en una variable `$promedio` y luego muestra los productos que cuestan más que el promedio.

💡 **Pista:** Usa `let`

```xquery
let $promedio := avg(//producto/precio)
for $p in //producto
where $p/precio > $promedio
return $p
```

---

### **🔹 9. Operaciones de Conjunto (Unión e Intersección)**
✍ **Ejercicio 14:** Une los productos de las categorías **"Electronica"** y **"Hogar"** en una sola lista.

💡 **Pista:** Usa `union`

```xquery
(//producto[categoria="Electronica"]) union (//producto[categoria="Hogar"])
```

✍ **Ejercicio 15:** Encuentra productos que pertenezcan a **"Electronica"** y cuyo precio sea mayor a **50€**.

💡 **Pista:** Usa `intersect`

```xquery
(//producto[categoria="Electronica"]) intersect (//producto[precio > 50])
```

---

🎯 **Objetivos de los ejercicios:**
✅ Comprender cómo hacer consultas avanzadas en XQuery.  
✅ Aplicar operadores aritméticos, lógicos y de comparación.  
✅ Manipular cadenas de texto y ordenar resultados.  
✅ Usar funciones agregadas y condicionales.  
✅ Generar nuevas estructuras XML con XQuery.  
