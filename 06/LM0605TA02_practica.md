# **Práctica de XQuery: Expresiones Básicas**

**Datos de partida:** Utiliza el siguiente XML llamado `productos.xml` para resolver los ejercicios.

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

## **Ejercicios**

### **1. Expresiones Aritméticas**
1️⃣ Calcula el precio total de todos los productos.  

2️⃣ Aumenta el precio de cada producto en un 10% y muestra el resultado.  

---

### **2. Comparadores y Expresiones Lógicas**
3️⃣ Muestra los productos que cuestan más de **50€**.  

4️⃣ Muestra los productos de la categoría **"Electronica"** que cuesten menos de **100€**.  

---

### **3. Manipulación de Cadenas de Texto**
5️⃣ Muestra todos los productos cuyo nombre **contenga la palabra "24"**.  

6️⃣ Convierte todos los nombres de los productos a **mayúsculas**.  

---

### **4. Funciones Agregadas**
7️⃣ Encuentra el precio **más alto** de los productos.  

8️⃣ Calcula el **precio promedio** de todos los productos.  

---

### **5. Condicionales (`if-then-else`)**
9️⃣ Muestra los productos con etiquetas `<caro>` si su precio es mayor a **100€** y `<barato>` si es menor o igual a **100€**.  

---

### **6. Ordenación (`order by`)**
🔟 Ordena los productos por **precio ascendente**.  

1️⃣1️⃣ Ordena los productos por **nombre en orden alfabético inverso**.  

---

### **7. Creación de nuevos elementos XML**
1️⃣2️⃣ Genera una lista en formato XML donde cada producto esté dentro de un `<item>` con su nombre y precio.  

---

### **8. Uso de Variables (`let`)**
1️⃣3️⃣ Almacena el precio promedio en una variable `$promedio` y luego muestra los productos que cuestan más que el promedio.  

---

### **9. Operaciones de Conjunto (Unión e Intersección)**
1️⃣4️⃣ Une los productos de las categorías **"Electronica"** y **"Hogar"** en una sola lista.  

1️⃣5️⃣ Encuentra productos que pertenezcan a **"Electronica"** y cuyo precio sea mayor a **50€**.  

---

🎯 **Objetivos de la práctica:**  
✅ Comprender cómo hacer consultas avanzadas en XQuery.  
✅ Aplicar operadores aritméticos, lógicos y de comparación.  
✅ Manipular cadenas de texto y ordenar resultados.  
✅ Usar funciones agregadas y condicionales.  
✅ Generar nuevas estructuras XML con XQuery.  

---

**Instrucciones:**  
- Usa **BaseX** para ejecutar las consultas.
- Haz una captura de cada consulta y su resultado.
- Puedes incrustarla en este mismos `.md`.  
- Guarda cada consulta en un archivo `.xq` para facilitar tu trabajo.  
- Si tienes dudas, prueba la consulta en partes más pequeñas antes de ejecutarla completa.

**Entrega:**
- Entrega una memoria en pdf con los recortes
