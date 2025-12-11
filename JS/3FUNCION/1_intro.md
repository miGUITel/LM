[JS](../indice.md)

- [¿Qué es una función?](#qué-es-una-función)
- [Declarar e invocar](#declarar-e-invocar)
  - [Ejemplo 1](#ejemplo-1)
- [Parámetros y valores de retorno](#parámetros-y-valores-de-retorno)
- [Ámbito (scope) y efectos secundarios](#ámbito-scope-y-efectos-secundarios)
- [Buenas prácticas](#buenas-prácticas)
- [Ventajas de usar funciones](#ventajas-de-usar-funciones)
- [Expresiones y arrow functions](#expresiones-y-arrow-functions)

## ¿Qué es una función?

Una función es un bloque de código nombrado que agrupa instrucciones relacionadas para realizar una tarea concreta. Las funciones permiten reutilizar código, organizar la lógica y separar responsabilidades.

## Declarar e invocar

- Declaración clásica:

```js
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
```

- Invocación:

```js
const mensaje = saludar("Ana");
console.log(mensaje); // Hola, Ana!
```
### Ejemplo 1
[código](./1_funciones.js)

## Parámetros y valores de retorno

- Parámetros son los datos que la función recibe.
- Una función puede devolver un valor con `return`. Si no devuelve nada, devuelve `undefined`.

```js
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 3)); // 5
```

## Ámbito (scope) y efectos secundarios

- Las variables declaradas dentro de una función tienen ámbito local.
- Evita modificar variables externas desde una función (efectos secundarios) cuando busques funciones puras y fáciles de probar.

```js
let contador = 0;
function incrementar() {
    contador++; // efecto secundario: modifica variable externa
}
```

## Buenas prácticas

- Dar nombres descriptivos a las funciones (ej. calcularTotal).
- Mantener funciones pequeñas y con una única responsabilidad.
- Preferir parámetros explícitos y valores de retorno claros.
- Documentar la función (qué hace, parámetros, valor devuelto).

## Ventajas de usar funciones

- Reutilización de código.
- Mejor organización y legibilidad.
- Facilitan las pruebas unitarias y el mantenimiento.

## Expresiones y arrow functions

- Expresión de función:

```js
const multiplicar = function(a, b) {
    return a * b;
};
```

- Arrow function (más concisa):

```js
const dividir = (a, b) => a / b;
```