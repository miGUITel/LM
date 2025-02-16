Aquí tienes **todas las respuestas de los ejercicios del 1 al 15** asegurando que se usen **consultas XQuery FLWOR** y aplicando `number()` cuando sea necesario.

---

## **🔹 Ejercicios de XQuery con FLWOR**

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
✍ **Ejercicio 1:** Calcula el **precio total** de todos los productos.

```xquery
let $total := sum(for $p in //producto return number($p/precio))
return <precio-total>{$total}</precio-total>
```

---

✍ **Ejercicio 2:** Aumenta el **precio de cada producto** en un 10% y muestra el resultado.

```xquery
for $p in //producto
return <producto>
    <nombre>{$p/nombre/text()}</nombre>
    <nuevo-precio>{number($p/precio) * 1.10}</nuevo-precio>
</producto>
```

---

### **🔹 2. Comparadores y Expresiones Lógicas**
✍ **Ejercicio 3:** Muestra los productos que **cuestan más de 50€**.

```xquery
for $p in //producto
where number($p/precio) > 50
return $p
```

---

✍ **Ejercicio 4:** Muestra los productos de la categoría **"Electronica"** que cuesten **menos de 100€**.

```xquery
for $p in //producto
where $p/categoria = "Electronica" and number($p/precio) < 100
return $p
```

---

### **🔹 3. Manipulación de Cadenas de Texto**
✍ **Ejercicio 5:** Muestra todos los productos cuyo **nombre contenga la palabra "24"**.

```xquery
for $p in //producto
where contains($p/nombre, "24")
return $p
```

---

✍ **Ejercicio 6:** Convierte **todos los nombres de los productos a mayúsculas**.

```xquery
for $p in //producto
return <producto>
    <nombre>{upper-case($p/nombre)}</nombre>
</producto>
```

---

### **🔹 4. Funciones Agregadas**
✍ **Ejercicio 7:** Encuentra el **precio más alto** de los productos.

```xquery
let $maxPrecio := max(for $p in //producto return number($p/precio))
for $p in //producto
where number($p/precio) = $maxPrecio
return $p
```

---

✍ **Ejercicio 8:** Calcula el **precio promedio** de todos los productos.

```xquery
let $promedio := avg(for $p in //producto return number($p/precio))
return <precio-promedio>{$promedio}</precio-promedio>
```

---

### **🔹 5. Condicionales (`if-then-else`)**
✍ **Ejercicio 9:** Muestra los productos con etiquetas `<caro>` si su precio es mayor a **100€** y `<barato>` si es menor o igual a **100€**.

```xquery
for $p in //producto
return if (number($p/precio) > 100) 
       then <caro>{$p/nombre}</caro> 
       else <barato>{$p/nombre}</barato>
```

---

### **🔹 6. Ordenación (`order by`)**
✍ **Ejercicio 10:** Ordena los productos por **precio ascendente**.

```xquery
for $p in //producto
order by number($p/precio) ascending
return $p
```

---

✍ **Ejercicio 11:** Ordena los productos por **nombre en orden alfabético inverso**.

```xquery
for $p in //producto
order by $p/nombre descending
return $p
```

---

### **🔹 7. Creación de nuevos elementos XML**
✍ **Ejercicio 12:** Genera una lista en formato XML donde cada producto esté dentro de un `<item>` con su **nombre y precio**.

```xquery
for $p in //producto
return <item>
    <nombre>{$p/nombre/text()}</nombre>
    <precio>{$p/precio/text()}€</precio>
</item>
```

---

### **🔹 8. Uso de Variables (`let`)**
✍ **Ejercicio 13:** Almacena el **precio promedio** en una variable `$promedio` y luego muestra los productos que **cuestan más que el promedio**.

```xquery
let $promedio := avg(for $p in //producto return number($p/precio))
for $p in //producto
where number($p/precio) > $promedio
return $p
```

---

### **🔹 9. Operaciones de Conjunto (Unión e Intersección)**
✍ **Ejercicio 14:** Une los productos de las categorías **"Electronica"** y **"Hogar"** en una sola lista.

```xquery
(for $p in //producto where $p/categoria = "Electronica" return $p)
union
(for $p in //producto where $p/categoria = "Hogar" return $p)
```

---

✍ **Ejercicio 15:** Encuentra productos que **pertenezcan a "Electronica"** y cuyo **precio sea mayor a 50€**.

```xquery
(for $p in //producto where $p/categoria = "Electronica" return $p)
intersect
(for $p in //producto where number($p/precio) > 50 return $p)
```

---

## **✅ Resumen**
📌 **Se ha corregido** cada ejercicio para asegurar que:
- Se utilice **FLWOR** en todos los casos.
- Se emplee `number()` cuando sea necesario para evitar problemas con valores de texto en precios.
- Se mantenga una **estructura clara y organizada** en las respuestas.
