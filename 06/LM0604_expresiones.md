### ** Tipos de expresiones útiles en XQuery para comenzar**
#### **1. Expresiones aritméticas**  
   - Suma (`+`), resta (`-`), multiplicación (`*`), división (`div`), módulo (`mod`)  
   - Ejemplo: `let $precioTotal := 10.5 + 5.25 return $precioTotal`

#### **2. Comparadores**  
   - Comparación numérica: `=`, `!=`, `<`, `>`, `<=`, `>=`  
   - Comparación general (`=`, `!=`) vs. comparación exacta (`eq`, `ne`, `lt`, `gt`, `le`, `ge`)  
   - Ejemplo: `for $p in //producto where $p/precio > 20 return $p/nombre`

#### **3. Expresiones lógicas**  
   - Operadores `and`, `or`, `not()`  
   - Ejemplo: `for $p in //producto where $p/precio > 10 and $p/categoria = "Electronica" return $p`

#### **4. Manipulación de cadenas de texto**  
   - `concat()`, `string-length()`, `substring()`, `upper-case()`, `lower-case()`, `contains()`  
   - Ejemplo: `for $p in //producto where contains($p/nombre, "Monitor") return $p`

#### **5. Funciones agregadas**  
   - `count()`, `sum()`, `avg()`, `min()`, `max()`  
   - Ejemplo: `sum(//producto/precio)`

#### **6. Expresiones condicionales (`if-then-else`)**  
   - Ejemplo:  
     ```xquery
     for $p in //producto 
     return if ($p/precio > 50) 
            then <caro>{$p/nombre}</caro> 
            else <barato>{$p/nombre}</barato>
     ```

#### **7. Expresiones de ordenación (`order by`)**  
   - Ordenar resultados  
   - Ejemplo:  
     ```xquery
     for $p in //producto
     order by $p/precio descending
     return $p
     ```

#### **8. Creación de nuevos elementos XML dinámicamente**  
   - Uso de `{}` en expresiones dentro de XML  
   - Ejemplo:  
     ```xquery
     for $p in //producto
     return <item>{$p/nombre} - {$p/precio}€</item>
     ```

#### **9. Expresiones con variables (`let`)**  
   - Uso de variables para almacenar valores intermedios  
   - Ejemplo:  
     ```xquery
     let $precioPromedio := avg(//producto/precio)
     return $precioPromedio
     ```

#### **10. Expresiones de unión y diferencia** [+](./LM0607_union.md) 
   - `union`, `except`, `intersect`  
   - Ejemplo:  
     ```xquery
     (//producto[categoria="Electronica"]) union (//producto[categoria="Hogar"])
     ```

---

