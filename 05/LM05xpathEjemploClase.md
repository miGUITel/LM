## Lista de expresiones **XPath** categorizadas según su funcionalidad. 

---

### **XML de ejemplo: Concesionario de coches**
```xml
<concesionario nombre="AutoWorld" ciudad="Madrid">
    <coche matricula="1234ABC" marca="Toyota" modelo="Corolla">
        <precio moneda="EUR">18000</precio>
        <stock unidades="5"/>
        <color>Rojo</color>
        <cilindrada>1800</cilindrada>
    </coche>
    <coche matricula="5678DEF" marca="Honda" modelo="Civic">
        <precio moneda="EUR">22000</precio>
        <stock unidades="3"/>
        <color>Azul</color>
        <cilindrada>2000</cilindrada>
    </coche>
    <coche matricula="9101GHI" marca="Ford" modelo="Focus">
        <precio moneda="USD">20000</precio>
        <stock unidades="8"/>
        <color>Blanco</color>
        <cilindrada>1500</cilindrada>
    </coche>
</concesionario>
```

---

### **Lista de expresiones XPath**

#### **1. Localización de nodos básicos**:
- **Seleccionar el nodo raíz**:
  ```xpath
  /
  ```
- **Seleccionar todos los coches (elementos)**:
  ```xpath
  /concesionario/coche o /concesionario//coche 
  <!-- coches hijos o coches descendientes -->
  ```
- **Seleccionar el primer o segundo coche**:
    ```xpath
    /coche[1]
    /coche[2]
    ```

- **Seleccionar el precio del primer coche**:
  ```xpath
  /concesionario/coche[1]/precio
  ```
- **Seleccionar todas las matrículas (atributos)**:
  ```xpath
  /concesionario/coche/@matricula
  ```
---

#### **2. Filtrado**:
- **Seleccionar coches de la marca "Toyota" (filtrado por atributo)**:
  ```xpath
  /concesionario/coche[@marca='Toyota']
  ```
- **Seleccionar coches con cilindrada mayor a 1500 (filtrado por elemento)**:
  ```xpath
  /concesionario/coche[cilindrada > 1500]
  ```
- **Seleccionar precios en moneda "EUR"**:
  ```xpath
  //precio[@moneda='EUR']
  ```

---

#### **3. Funciones sobre cadenas**:
- **Convertir el color del primer cohce a minúsculas**:
  ```xpath
  lower-case(//coche[1]/color)
  ```
- **Convertir el color del segundo cohce a mayúsculas**:
  ```xpath
  upper-case(//coche[2]/color)
  ```
- **Filtrar coches cuyo modelo (atributo) contiene la palabra "Civ"**:
  ```xpath
  /concesionario/coche[contains(@modelo, 'Civ')]
  ```
- **Filtrar coches cuyo color (elemento) contiene la palabra "Bla"**:
  ```xpath
  /concesionario/coche[contains(color, 'Bla')]
  ```
- **Comparar si dos marcas son iguales**:
  ```xpath
  compare(//coche[1]/@marca, //coche[2]/@marca)
  ```
- **Obtener una subcadena del modelo del segundo coche**:
  ```xpath
  substring(//coche[2]/@modelo, 1, 3)
  ```
- **Concatenar cadenas**:
  ```xpath
  //coche/concat("marca: ", @marca, ", precio: " , precio, " ", precio/@moneda)
  ```

---

#### **4. Funciones de contexto**:
- **Seleccionar el segundo coche**:
  ```xpath
  /concesionario/coche[2]
  ```
- **Seleccionar el último coche**:
  ```xpath
  /concesionario/coche[last()]
  ```
- **Seleccionar todos los coches excepto el primero**:
  ```xpath
  /concesionario/coche[position() > 1]
  ```

---

#### **5. Funciones agregadas**:
- **Contar el número de coches**:
  ```xpath
  count(//coche)
  ```
- **Obtener el precio máximo**:
  ```xpath
  max(//precio)
  ```
- **Calcular el promedio de precios**:
  ```xpath
  avg(//precio)
  ```
- **Sumar el stock de todos los coches**:
  ```xpath
  sum(//stock/@unidades)
  ```

---

#### **6. Operadores (+, -, =)**:
- **Filtrar coches cuyo precio sea igual a 20000**:
  ```xpath
  //coche[precio = 20000]
  ```
- **Filtrar coches cuya cilindrada sea mayor o igual a 1800**:
  ```xpath
  //coche[cilindrada >= 1800]
  ```
- **Sumar el precio de los dos primeros coches**:
  ```xpath
  sum(//coche[1]/precio + //coche[2]/precio)
  ```
