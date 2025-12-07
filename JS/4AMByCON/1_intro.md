[JS](../indice.md)

Los condicionales en JavaScript permiten que un programa tome decisiones en función de si una expresión es verdadera o falsa. Son una herramienta esencial para que tus alumnos entiendan cómo cambia el flujo de ejecución según las circunstancias, igual que ellos toman decisiones en su día a día (si llueve, cojo paraguas; si además hace frío, llevo abrigo…).

---

## **1. Condicional simple (`if`)**

Se ejecuta **solo cuando la condición es verdadera**.

### **Ejemplo**

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Puedes entrar.");
}
```

Si `edad` es 18 o más, el mensaje aparece; si no, simplemente se continúa el programa sin hacer nada especial.

---

## **2. Condicional doble (`if…else`)**

Permite tomar **dos caminos**: uno cuando la condición es verdadera y otro cuando es falsa.

### **Ejemplo**

```javascript
let nota = 4;

if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
```

Aquí siempre se ejecuta uno de los dos bloques, igual que cuando decides: *“Si llego a tiempo cojo el bus; si no, voy andando.”*

---

## **3. Condicionales anidados**

Son **condicionales dentro de otros condicionales**, útiles cuando hay más de dos posibilidades.

### **Ejemplo**

```javascript
let temperatura = 12;

if (temperatura > 25) {
    console.log("Hace calor");
} else {
    if (temperatura >= 15) {
        console.log("Clima suave");
    } else {
        console.log("Hace frío");
    }
}
```

Este tipo ayuda a clasificar casos según distintos rangos. Se parecen a las decisiones encadenadas que toman tus alumnos cuando organizan un proyecto: *si está todo hecho, entregamos; si no, si falta poco, lo terminamos; si falta mucho, pedimos ayuda…*

---

### 📝 **Nota sobre legibilidad**

El siguiente código **no es una buena práctica** porque encadena varios condicionales innecesarios:

```javascript
if (hasPizza != true) {
    if (hasPizza != false) {
        if (hasPizza == undefined) {
            openFridge();
        }
    } else {
        orderPizza();
    }
} else {
    cook();
}

eat();
```

Este tipo de estructura hace que **cueste mucho entender qué está pasando**, tanto para uno mismo como para cualquier compañero que tenga que mantener el código más adelante. La idea en programación es que el flujo de decisiones sea lo más **claro y directo** posible.

---

### ✔️ **Versión más simple y legible**

Podemos expresar exactamente lo mismo de una forma más sencilla:

```javascript
if (hasPizza === true) {
    cook();
} else if (hasPizza === false) {
    orderPizza();
} else {
    // hasPizza es undefined u otro valor no esperado
    openFridge();
}

eat();
```

### ¿Por qué es mejor?

* Cada caso está **bien delimitado**.
* No hay condicionales redundantes del tipo `!= true` o `!= false`.
* Es más fácil detectar valores inesperados.
* El código **cuenta una historia lógica y comprensible**, algo fundamental cuando trabajas en equipo.

