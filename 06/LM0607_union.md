### **🔹 ¿Para qué sirve `union` en XQuery?**
En XQuery, la función `union` se usa para combinar los resultados de **dos o más consultas** en una sola sin repetir elementos duplicados.

📌 **Reglas importantes:**
- **Elimina duplicados** automáticamente.
- **Los elementos deben ser del mismo tipo** o tener una estructura compatible.
- **Se puede usar en XPath y XQuery**.

---

## **📌 Ejemplo 1: Unir dos conjuntos de nodos**
Supongamos que tenemos el siguiente XML (`productos.xml`):

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

Si queremos **unir los productos de la categoría "Electronica" y "Hogar"** en una sola consulta, podemos usar:

```xquery
(//producto[categoria = "Electronica"]) union (//producto[categoria = "Hogar"])
```

🔹 **Salida esperada**:
```xml
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
    <nombre>Monitor 24 pulgadas</nombre>
    <precio>189.99</precio>
    <categoria>Electronica</categoria>
</producto>
<producto>
    <nombre>Batidora de mano</nombre>
    <precio>22.49</precio>
    <categoria>Hogar</categoria>
</producto>
```

📌 **Observaciones:**
- **Los productos de "Electronica" y "Hogar" se combinaron en un solo resultado.**
- **Si hay productos repetidos, `union` los elimina automáticamente.**

---

## **📌 Ejemplo 2: Unir nodos específicos**
Si solo queremos unir los **nombres de los productos de dos categorías**, podemos hacer:

```xquery
(//producto[categoria = "Electronica"]/nombre) union (//producto[categoria = "Hogar"]/nombre)
```

🔹 **Salida esperada**:
```xml
<nombre>Teclado mecánico</nombre>
<nombre>Ratón inalámbrico</nombre>
<nombre>Monitor 24 pulgadas</nombre>
<nombre>Batidora de mano</nombre>
```

---

## **📌 Diferencia entre `union`, `except` e `intersect`**

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| **`union`** | Combina dos conjuntos y **elimina duplicados** | `(//producto[categoria="Electronica"]) union (//producto[categoria="Hogar"])` |
| **`except`** | Devuelve los elementos que están en el primer conjunto **pero no en el segundo** | `(//producto) except (//producto[categoria="Hogar"])` |
| **`intersect`** | Devuelve los elementos que están en **ambos conjuntos** | `(//producto) intersect (//producto[precio > 50])` |

---

### **📌 Ejemplo con `except`**
Si queremos obtener **todos los productos excepto los de "Hogar"**, usamos:

```xquery
(//producto) except (//producto[categoria = "Hogar"])
```

🔹 **Salida esperada** _(Todos los productos menos los de la categoría "Hogar")_.

---

### **📌 Ejemplo con `intersect`**
Si queremos obtener **productos electrónicos que cuesten más de 50€**, usamos:

```xquery
(//producto[categoria = "Electronica"]) intersect (//producto[precio > 50])
```

🔹 **Salida esperada** _(Solo los productos electrónicos que cuestan más de 50€)_.

---

## **📌 Resumen**
✅ **`union`** permite **combinar** nodos sin duplicados.  
✅ **Se usa para unir conjuntos de nodos** en XQuery.  
✅ Se puede combinar con **XPath** para consultas más avanzadas.  
