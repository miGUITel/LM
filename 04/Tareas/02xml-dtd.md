# 🧪 BLOQUE DE PRÁCTICAS — XML → DTD

## 📘 Instrucciones generales para el alumnado

En cada ejercicio se te proporciona un **documento XML**.
Debes crear una **DTD** que permita validar correctamente ese XML.

La DTD debe:

* Ajustarse exactamente a la estructura del XML.
* Definir correctamente el orden, cardinalidades y atributos.
* No usar `ANY`.

Utiliza **xmlcopyeditor** para comprobar que el XML es válido respecto a tu DTD.

---

## 🟢 EJERCICIO 1 — Un elemento simple

### XML

```xml
<mensaje>Hola mundo</mensaje>
```

### Tarea

Crea una DTD que valide este documento.

---

## 🟢 EJERCICIO 2 — Elementos hijos obligatorios

### XML

```xml
<persona>
  <nombre>Ana</nombre>
  <edad>20</edad>
</persona>
```

### Tarea

Crea la DTD correspondiente.

---

## 🟡 EJERCICIO 3 — Orden fijo

### XML

```xml
<libro>
  <titulo>XML Básico</titulo>
  <autor>Juan Pérez</autor>
</libro>
```

### Tarea

Define una DTD que obligue a respetar este orden.

---

## 🟡 EJERCICIO 4 — Elementos repetidos

### XML

```xml
<curso>
  <nombre>Lenguajes de marcas</nombre>
  <alumno>Lucía</alumno>
  <alumno>Carlos</alumno>
</curso>
```

### Tarea

Crea una DTD que permita uno o más alumnos.

---

## 🟡 EJERCICIO 5 — Elemento opcional

### XML

```xml
<pelicula>
  <titulo>Matrix</titulo>
  <director>Wachowski</director>
</pelicula>
```

### Tarea

Crea una DTD que permita que la película tenga o no resumen.

---

## 🟡 EJERCICIO 6 — Lista vacía o con elementos

### XML

```xml
<lista>
  <item>Uno</item>
  <item>Dos</item>
</lista>
```

### Tarea

Define una DTD que permita listas vacías o con elementos.

---

## 🟠 EJERCICIO 7 — Atributo obligatorio

### XML

```xml
<producto codigo="p1">
  <nombre>Ratón</nombre>
  <precio>15</precio>
</producto>
```

### Tarea

Crea la DTD correspondiente, incluyendo el atributo.

---

## 🟠 EJERCICIO 8 — Atributo enumerado

### XML

```xml
<usuario tipo="admin">
  <nombre>Pedro</nombre>
</usuario>
```

### Tarea

Define una DTD que limite los valores posibles del atributo.

---

## 🟠 EJERCICIO 9 — Identificador único

### XML

```xml
<alumnos>
  <alumno id="a1">
    <nombre>Ana</nombre>
  </alumno>
  <alumno id="a2">
    <nombre>Luis</nombre>
  </alumno>
</alumnos>
```

### Tarea

Crea una DTD que garantice la unicidad del identificador.

---

## 🟠 EJERCICIO 10 — Estructura completa

### XML

```xml
<biblioteca>
  <libro id="l1" categoria="novela">
    <titulo>1984</titulo>
    <autor>George Orwell</autor>
    <anio>1949</anio>
  </libro>

  <libro id="l2">
    <titulo>XML Avanzado</titulo>
    <autor>Ana López</autor>
    <autor>Carlos Ruiz</autor>
    <anio>2023</anio>
  </libro>
</biblioteca>
```

### Tarea

Define una DTD que valide correctamente este documento.


