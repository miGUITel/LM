[JS](../indice.md)

## Parámetros y argumentos en funciones

Un parámetro es un valor externo que se recibe como argumento al invocar una función.

Pueden ser de cualquier tipo y se indican al declarar la función separados por comas dentro de los paréntesis.


```javascript
function getTitle(name, year) {
  let title = name + " - " + year;
  return title;
}
```

> Esta función recibe dos parámetros (`name` y `year`) y devuelve una cadena con el formato `"nombre - año"`.
Por ejemplo:

```javascript
console.log(getTitle("La isla del tesoro", 2025));
// Salida: La isla del tesoro - 2025
```

Es posible inicializar los parámetros con un valor por defecto para evitar que sean undefined al no recibir un valor en la invocación.

En esta nueva versión de la función, los parámetros tienen **valores por defecto**.

```javascript
function getTitle(name = "JavaScript DAM", year = 2023) {
  let title = name + " - " + year;
  return title;
}
```

👉 Esto significa que si llamas a la función sin pasarle argumentos, usará esos valores por defecto:

```javascript
console.log(getTitle());             
// Salida: JavaScript DAM - 2023
```

Y si le pasas otros valores, los sustituirá:

```javascript
console.log(getTitle("La isla del tesoro", 2025));
// Salida: La isla del tesoro - 2025
```


**El orden de los parámetros es importante**, ya que al invocar la función, se deben pasar los argumentos en el mismo orden en que se declararon los parámetros.

Los argumentos son los valores que se pasan en la invocación de la función y deben coincidir en orden con los parámetros.