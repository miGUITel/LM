[JS](../indice.md)

En JavaScript, el **hoisting** significa que durante la fase de compilación, el intérprete **reserva en memoria el espacio necesario** para las funciones y variables **antes de ejecutar el código**.

En el caso de las **funciones declaradas**, su definición completa se guarda en memoria desde el inicio, por lo que pueden utilizarse incluso antes de aparecer en el código fuente.

Por ejemplo:

```javascript
mostrarMensaje();

function mostrarMensaje() {
  console.log("Bienvenido al programa");
}
```

Aunque `mostrarMensaje()` se llama antes de su declaración, el motor de JavaScript ya conoce su existencia porque la función se registró en memoria al iniciar el programa.

Este comportamiento **solo ocurre con las declaraciones de funciones** (`function nombre() { ... }`), no con las expresiones o funciones asignadas a variables (`const`, `let`, `var`), que se crean más tarde durante la ejecución.

> La manera de evitar el error provocado es **NO** llamar a la función antes de su declaración.