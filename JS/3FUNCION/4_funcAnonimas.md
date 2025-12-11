[JS](../indice.md)

**Las funciones anónimas cambian el comportamiento de una función principal**

---

### 💡 Explicación

Las **funciones anónimas** no tienen nombre propio y pueden pasarse como **argumentos** a otra función.
Esto permite que la **función principal** modifique su comportamiento según la función que reciba.

---

### 🧩 Ejemplo

```javascript
function saludar(nombre, tipoDeSaludo) {
  // 'tipoDeSaludo' es una función que decide cómo se formará el mensaje
  let mensaje = tipoDeSaludo(nombre);
  console.log(mensaje);
}

// Función anónima para un saludo formal
let saludoFormal = function(nombre) {
  return "Buenos días, estimado/a " + nombre + ".";
};

// Función anónima para un saludo informal
let saludoInformal = function(nombre) {
  return "¡Hola " + nombre + "! ¿Qué tal?";
};

// Uso de la función principal con distintos comportamientos
saludar("Laura", saludoFormal);
saludar("Carlos", saludoInformal);
```

---

### 🎯 Resultado en consola

```
Buenos días, estimado/a Laura.
¡Hola Carlos! ¿Qué tal?
```

---

### 🧠 En resumen

* `saludar()` es la **función principal**.
* `saludoFormal` y `saludoInformal` son **funciones anónimas** pasadas como argumentos.
* El **mismo código base** (`saludar`) produce resultados distintos gracias a las funciones anónimas, demostrando cómo pueden **modular el comportamiento** de otra función sin modificarla.
