![alt text](799c4105-d4bb-46fa-963e-22aa089fab21.webp)

# **Introducción a XSLT**

### **Transformación de datos XML en HTML utilizando elementos XSLT**
En esta sesión aprenderemos a usar los elementos básicos de XSLT para transformar un archivo XML con información sobre coches en un concesionario. Empezaremos con conceptos simples y progresivamente avanzaremos hacia transformaciones más complejas.

---

## **1. `value-of`**

### **Descripción**
El elemento `value-of` se utiliza para extraer el valor de un nodo específico en el XML y mostrarlo en el documento transformado.

- **Enlace XML:** [1-value-of.xml](./ejemplosXslt/1-value-of.xml)
- **Enlace XSL:** [1-value-of.xsl](./ejemplosXslt/1-value-of.xsl)

---

## **2. `for-each`**

### **Descripción**
Permite iterar sobre un conjunto de nodos seleccionados en el XML y aplicar una acción o transformación a cada uno de ellos.

En el ejemplo también se muestra cómo se extraería el valor de un atributo, en lugar de un elemento. Solo hay que cambiar la expresión xpath correspondiente.

- **Enlace XML:** [2-for-each.xml](./ejemplosXslt/2-for-each.xml)
- **Enlace XSL:** [2-for-each.xsl](./ejemplosXslt/2-for-each.xsl)

---

## **3. `sort`**

### **Descripción**
Ordena los nodos seleccionados en un `for-each` o similar, en función de un criterio especificado.

- **Enlace XML:** [3-sort.xml](./ejemplosXslt/3-sort.xml)
- **Enlace XSL:** [3-sort.xsl](./ejemplosXslt/3-sort.xsl)

---

## **4. `if`**

### **Descripción**
Permite aplicar condiciones simples para mostrar o no un fragmento en el documento transformado.

- **Enlace XML:** [4-if.xml](./ejemplosXslt/4-if.xml)
- **Enlace XSL:** [4-if.xsl](./ejemplosXslt/4-if.xsl)

---

## **5. `choose`**

### **Descripción**
Funciona como una estructura condicional más compleja, similar a `if-else` en otros lenguajes, utilizando las etiquetas `when` y `otherwise`.

- **Enlace XML:** [5-choose.xml](./ejemplosXslt/5-choose.xml)
- **Enlace XSL:** [5-choose.xsl](./ejemplosXslt/5-choose.xsl)

---

## **6. `key`**

### **Descripción**
Define claves para realizar búsquedas rápidas en el XML, mejorando la eficiencia en ciertas transformaciones. Genera un índice por lo que es más eficiente, reutilizable y semánticamente claro.

- **Enlace XML:** [6-key.xml](./ejemplosXslt/6-key.xml)
- **Enlace XSL:** [6-key.xsl](./ejemplosXslt/6-key.xsl)

---

## **7. `message`**

### **Descripción**
Permite enviar mensajes al procesador XSLT, útil para depuración o mostrar información durante la transformación.
El mensaje se muestra en la consola de los programas procesadores xslt específicos.
Chrome no procesa estas instrucciones.

- **Enlace XML:** [7-message.xml](./ejemplosXslt/7-message.xml)
- **Enlace XSL:** [7-message.xsl](./ejemplosXslt/7-message.xsl)

---

## **8. Templates**

### **Descripción**
Los templates en XSLT permiten definir bloques reutilizables de transformaciones. Se aplican a nodos específicos del XML mediante el atributo `match`.

- **Enlace XML:** [8-templates.xml](./ejemplosXslt/8-templates.xml)
- **Enlace XSL:** [8-templates.xsl](./ejemplosXslt/8-templates.xsl)

---


