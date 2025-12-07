- [**1. JavaScript necesita una página HTML para funcionar en la web**](#1-javascript-necesita-una-página-html-para-funcionar-en-la-web)
- [**2. Qué es una Web API**](#2-qué-es-una-web-api)
- [**3. Qué es el DOM**](#3-qué-es-el-dom)
- [**4. La consola del navegador**](#4-la-consola-del-navegador)
- [**5. Pasos para ver cómo se ejecuta nuestro JavaScript en el navegador**](#5-pasos-para-ver-cómo-se-ejecuta-nuestro-javascript-en-el-navegador)
### **1. JavaScript necesita una página HTML para funcionar en la web**

En el entorno del navegador, JavaScript no trabaja de forma aislada: necesita una **página HTML** como soporte para ejecutarse. El HTML define la estructura del contenido, y JavaScript se encarga de aportar comportamiento.
El código puede incorporarse de dos maneras:

* **Interna**, escribiendo instrucciones dentro de la etiqueta `<script>` en el propio archivo HTML.
* **Externa**, enlazando un archivo `.js` mediante `<script src="archivo.js"></script>`, lo que facilita la organización del proyecto.
  En ambos casos el navegador carga el HTML, detecta el script y ejecuta el JavaScript asociado.

---

### **2. Qué es una Web API**

Las **Web APIs** son conjuntos de funciones y objetos que el navegador ofrece a JavaScript para que pueda **interactuar con el propio navegador y con la página**.
JavaScript, por sí solo, es un lenguaje muy pequeño. Para mostrar alertas, gestionar eventos del teclado o ratón, trabajar con elementos del documento, acceder al almacenamiento local o realizar peticiones de red, necesita un intermediario. Ese intermediario es la Web API.
El navegador recibe la petición (por ejemplo, “espera un clic”, “cambia el texto de este párrafo”, “descarga estos datos”) y ejecuta la acción correspondiente, devolviendo el resultado a JavaScript.

---

### **3. Qué es el DOM**

El **DOM (Document Object Model)** es la representación interna que el navegador crea a partir del HTML. Convierte cada etiqueta —un `<h1>`, un `<p>`, un `<img>`— en un objeto con propiedades y métodos.
Gracias al DOM, JavaScript puede:

* Leer y modificar el contenido de la página.
* Cambiar estilos, clases o atributos.
* Crear, eliminar o mover elementos.
* Escuchar y gestionar eventos del usuario, como clics o teclas pulsadas.
  En esencia, el DOM es el puente que permite a JavaScript transformar una página estática en una interfaz dinámica.

---

### **4. La consola del navegador**

Los navegadores incluyen herramientas de desarrollo que permiten inspeccionar la página y ejecutar código JavaScript en tiempo real. La **consola**, accesible con **F12** o clic derecho → *Inspeccionar*, es un espacio donde:

* Puedes escribir instrucciones JS y ver el resultado al instante.
* Se muestran mensajes de depuración enviados con `console.log()`.
* Aparecen errores y advertencias útiles para corregir el código.
  Es un recurso esencial para que los alumnos experimenten, prueben rápidamente pequeñas funciones y comprendan cómo responde el navegador a sus instrucciones.

### **5. Pasos para ver cómo se ejecuta nuestro JavaScript en el navegador**

Para que el alumnado visualice de forma clara cómo se interpreta su código, basta con seguir una secuencia sencilla:

1. **Crear una página HTML** básica y un archivo `.js` con alguna instrucción visible, por ejemplo un `console.log("Hola desde JS");`.
2. **Enlazar el archivo JavaScript** desde el HTML mediante una etiqueta `<script src="script.js"></script>`, preferiblemente colocada antes del cierre de `</body>`.
3. **Abrir el archivo HTML en el navegador**, haciendo doble clic o arrastrándolo a la ventana del navegador.
4. **Abrir las herramientas de desarrollo** pulsando **F12** o clic derecho → *Inspeccionar* y seleccionar la pestaña “Consola”.
5. **Recargar la página** para que el navegador ejecute el script, tras lo cual aparecerá en la consola el contenido del `console.log` u otras salidas del programa.

Este proceso les permite comprobar rápidamente el funcionamiento de su código y entender cómo interactúan HTML, JavaScript y las herramientas del navegador.
