# Lista de expresiones **XPath 1.0** categorizadas según su funcionalidad

> Para probar XPath, crea un documento XML con la información siguiente y cárgalo en BaseX.
> 
> En el selector superior, introduce la expresión XPath que quieres evaluar y pulsa `Enter`.

---

## **XML de ejemplo: Concesionario de coches** *(NO CAMBIAR)*

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

## **Lista de expresiones XPath**

### **1. Localización de nodos básicos**

* **Seleccionar el nodo raíz**:

  ```xpath
  /
  ```

* **Seleccionar todos los coches (elementos)**:

  ```xpath
  /concesionario/coche
  /concesionario//coche
  //coche
  ```

* **Seleccionar el primer o segundo coche**:

  ```xpath
  /concesionario/coche[1]
  /concesionario/coche[2]
  ```

* **Seleccionar el precio del primer coche**:

  ```xpath
  /concesionario/coche[1]/precio
  ```

* **Seleccionar todas las matrículas (atributos)**:

  ```xpath
  /concesionario/coche/@matricula
  ```

---

### **2. Filtrado**

* **Seleccionar coches de la marca "Toyota" (filtrado por atributo)**:

  ```xpath
  /concesionario/coche[@marca='Toyota']
  ```

* **Seleccionar coches con cilindrada mayor a 1500 (filtrado por elemento)**:

  ```xpath
  /concesionario/coche[cilindrada > 1500]
  ```

* **Seleccionar precios en moneda "EUR"**:

  ```xpath
  //precio[@moneda='EUR']
  ```

---

### **3. Funciones sobre cadenas (XPath 1.0)**

* **Obtener el valor de un elemento (sin las etiquetas)**:

  ```xpath
  /concesionario/coche/precio/text()
  ```

* **Filtrar coches cuyo modelo (atributo) contiene la palabra "Civ"**:

  ```xpath
  /concesionario/coche[contains(@modelo, 'Civ')]
  ```

* **Filtrar coches cuyo color (elemento) contiene la palabra "Bla"**:

  ```xpath
  /concesionario/coche[contains(color, 'Bla')]
  ```

* **Comprobar si dos marcas son iguales**:

  ```xpath
  /concesionario/coche[1]/@marca = /concesionario/coche[2]/@marca
  ```

* **Obtener una subcadena del modelo del segundo coche**:

  ```xpath
  substring(/concesionario/coche[2]/@modelo, 1, 3)
  ```

* **Concatenar cadenas (ejemplo sobre el primer coche)**:

  ```xpath
  concat(
    "marca: ", /concesionario/coche[1]/@marca,
    ", precio: ", /concesionario/coche[1]/precio,
    " ", /concesionario/coche[1]/precio/@moneda
  )
  ```

> Nota didáctica importante: en XPath “a pelo” no puedes generar fácilmente **una cadena por cada coche** (eso ya es terreno de XSLT/XQuery). Por eso el ejemplo de `concat` lo dejo aplicado a un coche concreto.

---

### **4. Funciones de contexto**

* **Seleccionar el segundo coche**:

  ```xpath
  /concesionario/coche[2]
  ```

* **Seleccionar el último coche**:

  ```xpath
  /concesionario/coche[last()]
  ```

* **Seleccionar todos los coches excepto el primero**:

  ```xpath
  /concesionario/coche[position() > 1]
  ```

---

### **5. Funciones agregadas (XPath 1.0)**

* **Contar el número de coches**:

  ```xpath
  count(/concesionario/coche)
  ```

* **Sumar el stock de todos los coches**:

  ```xpath
  sum(/concesionario/coche/stock/@unidades)
  ```

---

### **6. Operadores (+, -, =, etc.)**

* **Filtrar coches cuyo precio sea igual a 20000**:

  ```xpath
  /concesionario/coche[precio = 20000]
  ```

* **Filtrar coches cuya cilindrada sea mayor o igual a 1800**:

  ```xpath
  /concesionario/coche[cilindrada >= 1800]
  ```

* **Sumar el precio de los dos primeros coches** *:

  ```xpath
  /concesionario/coche[1]/precio + /concesionario/coche[2]/precio
  ```

---
