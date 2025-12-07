let isActive = "1";
console.log(typeof isActive); // string

isActive = true;
console.log(typeof isActive); // boolean

isActive = 1;
console.log(typeof isActive); // number

let currentYear = "2023";
// A número
currentYear = Number(currentYear);   // 2023 → number
// A booleano
currentYear = Boolean(currentYear);  // true → boolean
// A cadena
currentYear = String(currentYear);   // "true" → string
// A null
currentYear = null;                  // null → object (por diseño histórico)
// A undefined
currentYear = undefined;             // undefined → undefined
console.log(typeof currentYear);
