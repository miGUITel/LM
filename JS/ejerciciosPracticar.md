[JS](./indice.md)

# =====================================================

# **CONJUNTO 1 – Hasta Entrada/Salida (E/S)**

*(Variables, sintaxis, tipos de datos, tipado dinámico, prompt/console.log)*

---

## ⭐ **Prueba guiada (copiar y ejecutar)**

Pide a los alumnos que creen `index.html` y `app.js`, y copien este código para entender el flujo entrada → procesamiento → salida:

```javascript
let nombre = prompt("¿Cómo te llamas?");
let edad = prompt("¿Cuántos años tienes?");

console.log("Hola, " + nombre);
console.log("Tienes " + edad + " años");
console.log("Tipo de dato de edad:", typeof edad);

edad = Number(edad);
console.log("Edad convertida a número:", edad, "→ tipo:", typeof edad);
```

**Objetivos guiados:**

* Ver que `prompt()` devuelve texto.
* Usar `Number()` para convertir.
* Observar el resultado en la consola.

---

## 📝 **Ejercicios**

### **1. Mostrar datos personales**

Pide un nombre, un apellido y una ciudad. Muestra un mensaje como:

```
Te llamas Ana Pérez y vives en Murcia.
```

---

### **2. Sumar dos números**

Solicita dos números al usuario y muestra la suma, la resta y el producto.

---

### **3. Conversor de temperatura**

Pide grados Celsius y muestra la conversión a Fahrenheit.
(Fórmula: `F = C * 1.8 + 32`)

---

### **4. Plantilla de presentación**

Pide tres datos: nombre, edad y afición. Luego muestra un párrafo en consola describiendo al usuario.

---

### **5. Calcular un precio con IVA**

Pide un precio. Muestra el precio con IVA del 21%.

---

### **6. Reutilizar variables**

Prueba a asignar distintos tipos a la misma variable (número, texto, booleano). Muestra su tipo con `typeof`.

---

---

# =====================================================

# **CONJUNTO 2 – Con condicionales, operadores y bucles**

*(Ya dominan E/S y pueden decidir y repetir)*

---

## ⭐ **Prueba guiada (copiar y ejecutar)**

```javascript
let nota = Number(prompt("Introduce tu nota (0-10):"));

if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}

for (let i = 1; i <= nota; i++) {
    console.log("Repetición número:", i);
}
```

**Objetivos guiados:**

* Practicar decisiones con `if…else`.
* Usar un bucle según el valor introducido.
* Entender la ejecución secuencial.

---

## 📝 **Ejercicios**

### **1. Clasificación por edad**

Pide una edad y muestra:

* 0–12 → Niño
* 13–17 → Adolescente
* 18–64 → Adulto
* 65+ → Jubilado

---

### **2. Número par o impar**

Pide un número y muestra si es par o impar utilizando el operador **módulo `%`**.

---

### **3. Contador ascendente o descendente**

Pide un número.

* Si es positivo → cuenta desde 1 hasta ese número.
* Si es negativo → cuenta desde 0 hasta ese número.

---

### **4. Tabla de multiplicar**

Solicita un número y muestra su tabla del 1 al 10.

---

### **5. Suma acumulada**

Pide cuántos números se van a introducir.
Luego usa un bucle para pedir cada número y calcular la suma total.

---

### **6. Contraseña sencilla**

Pide al usuario que introduzca una contraseña.
Si coincide con `"1234"`, muestra “Acceso permitido”; si no, “Acceso denegado”.

---

### **7. Menú simple**

Solicita al usuario una opción:
1 → Rojo
2 → Verde
3 → Azul
Muestra el color elegido o un mensaje de error si introduce otra cosa.

---

---

# =====================================================

# **CONJUNTO 3 – Tras introducir funciones**

*(Funciones simples, con parámetros, funciones anónimas)*

---

## ⭐ **Prueba guiada (copiar y ejecutar)**

```javascript
function saludar(nombre) {
    console.log("Hola, " + nombre);
}

let nombreUsuario = prompt("Tu nombre:");
saludar(nombreUsuario);

// Función anónima con función flecha
let cuadrado = (n) => n * n;
console.log("El cuadrado de 5 es:", cuadrado(5));
```

**Objetivos guiados:**

* Entender funciones con parámetros.
* LLamar funciones desde valores introducidos por el usuario.
* Usar una función anónima o flecha como herramienta más compacta.

---

## 📝 **Ejercicios**

### **1. Función saludo personalizado**

Crea una función `presentar(nombre, edad)` que muestre un mensaje con esos datos.

---

### **2. Función para sumar dos números**

Solicita dos números y pásalos a una función `sumar(a, b)` que devuelve la suma.

---

### **3. Función para calcular un descuento**

Define una función que reciba un precio y un porcentaje de descuento y devuelva el precio final. Usa `prompt()` para obtener los valores.

---

### **4. Convertir una temperatura**

Crea funciones:

* `celsiusAFahrenheit(c)`
* `fahrenheitACelsius(f)`

Pregunta al usuario qué conversión quiere y llama a la función correspondiente.

---

### **5. Función que clasifica una nota**

Con una función `clasificarNota(nota)` devuelve:

* “Suspenso”
* “Aprobado”
* “Notable”
* “Sobresaliente”

---

### **6. Repetidor con función**

Crea una función `repetir(mensaje, veces)` que haga un `console.log(mensaje)` tantas veces como indique el parámetro.

---

### **7. Función anónima para elevar al cubo**

Crea una función flecha que reciba un número y devuelva su cubo. Pide al usuario un número y muestra el resultado.

---

### **8. Encadenar funciones**

Crea dos funciones:

```javascript
calcularIVA(precio)
calcularTotal(precioSinIVA)
```

Solicita un precio base, aplica IVA y luego suma un coste de envío fijo.

