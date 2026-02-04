# 🧪 BLOQUE DE PRÁCTICAS — DTD → XML

## 📘 Instrucciones generales para el alumnado

En cada ejercicio se te proporciona una **DTD**.
Debes crear un **documento XML bien formado y válido** que cumpla **estrictamente** las reglas definidas en la DTD.

Utiliza **xmlcopyeditor** para comprobar la validez del documento.

---

## 🟢 EJERCICIO 1 — Un único elemento simple

### DTD

```dtd
<!ELEMENT mensaje (#PCDATA)>
```

### Tarea

Crea un documento XML válido que represente un mensaje de texto.

---

## 🟢 EJERCICIO 2 — Elementos hijos obligatorios

### DTD

```dtd
<!ELEMENT persona (nombre, edad)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT edad (#PCDATA)>
```

### Tarea

Crea un XML que represente una persona con su nombre y edad.

---

## 🟡 EJERCICIO 3 — Orden obligatorio

### DTD

```dtd
<!ELEMENT libro (titulo, autor)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
```

### Tarea

Crea un XML válido respetando el orden definido en la DTD.

---

## 🟡 EJERCICIO 4 — Elemento repetible (`+`)

### DTD

```dtd
<!ELEMENT curso (nombre, alumno+)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT alumno (#PCDATA)>
```

### Tarea

Crea un XML con un curso y varios alumnos matriculados.

---

## 🟡 EJERCICIO 5 — Elemento opcional (`?`)

### DTD

```dtd
<!ELEMENT pelicula (titulo, director, resumen?)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT director (#PCDATA)>
<!ELEMENT resumen (#PCDATA)>
```

### Tarea

Crea un XML válido **con** resumen y otro **sin** resumen.

---

## 🟡 EJERCICIO 6 — Cardinalidad (`*`)

### DTD

```dtd
<!ELEMENT lista (item*)>
<!ELEMENT item (#PCDATA)>
```

### Tarea

Crea un XML válido con:

* una lista vacía
* otra lista con varios elementos

---

## 🟠 EJERCICIO 7 — Atributos obligatorios

### DTD

```dtd
<!ELEMENT producto (nombre, precio)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT precio (#PCDATA)>
<!ATTLIST producto
          codigo CDATA #REQUIRED>
```

### Tarea

Crea un XML válido que incluya el atributo obligatorio.

---

## 🟠 EJERCICIO 8 — Atributos enumerados

### DTD

```dtd
<!ELEMENT usuario (nombre)>
<!ELEMENT nombre (#PCDATA)>
<!ATTLIST usuario
          tipo (admin | normal | invitado) "normal">
```

### Tarea

Crea:

* un usuario sin indicar el tipo
* otro usuario indicando un tipo distinto

---

## 🟠 EJERCICIO 9 — ID único

### DTD

```dtd
<!ELEMENT alumno (nombre)>
<!ELEMENT nombre (#PCDATA)>
<!ATTLIST alumno
          id ID #REQUIRED>
```

### Tarea

Crea un XML con varios alumnos, asegurando que todos los identificadores sean únicos.

---

## 🟠 EJERCICIO 10 — Combinación de todo lo anterior

### DTD

```dtd
<!ELEMENT biblioteca (libro+)>
<!ELEMENT libro (titulo, autor+, anio)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
<!ELEMENT anio (#PCDATA)>
<!ATTLIST libro
          id ID #REQUIRED
          categoria (novela | ensayo | tecnico) "tecnico">
```

### Tarea

Crea un XML válido con varios libros, autores múltiples y distintos valores de categoría.

