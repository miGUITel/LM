# 🧪 PRÁCTICAS — Detección y corrección

## 📘 Instrucciones para el alumnado

En cada ejercicio se te proporciona un **XML** y su **DTD asociada**.
El documento **no valida correctamente**.

Tu tarea es:

* detectar el error o errores,
* corregir **el XML, la DTD o ambos**, según corresponda,
* comprobar con **xmlcopyeditor** que el resultado final es válido.

---

## 🔹 EJERCICIO 1

### DTD

```dtd
<!ELEMENT libro (titulo, autor)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
```

### XML

```xml
<libro>
  <autor>Juan Pérez</autor>
  <titulo>XML Básico</titulo>
</libro>
```

---

## 🔹 EJERCICIO 2

### DTD

```dtd
<!ELEMENT curso (nombre, alumno+)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT alumno (#PCDATA)>
```

### XML

```xml
<curso>
  <nombre>Lenguajes de marcas</nombre>
</curso>
```

---

## 🔹 EJERCICIO 3

### DTD

```dtd
<!ELEMENT alumnos (alumno+)>
<!ELEMENT alumno (nombre)>
<!ELEMENT nombre (#PCDATA)>
<!ATTLIST alumno
          id ID #REQUIRED>
```

### XML

```xml
<alumnos>
  <alumno id="a1">
    <nombre>Ana</nombre>
  </alumno>
  <alumno id="a1">
    <nombre>Luis</nombre>
  </alumno>
</alumnos>
```

---

## 🔹 EJERCICIO 4

### DTD

```dtd
<!ELEMENT prestamos (prestamo+)>
<!ELEMENT prestamo (libro)>
<!ELEMENT libro EMPTY>
<!ATTLIST libro
          ref IDREF #REQUIRED>
```

### XML

```xml
<prestamos>
  <prestamo>
    <libro ref="l3"/>
  </prestamo>
</prestamos>
```

---

## 🔹 EJERCICIO 5

### DTD

```dtd
<!ELEMENT articulo (titulo, parrafo)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT parrafo (#PCDATA, enfasis)>
<!ELEMENT enfasis (#PCDATA)>
```

### XML

```xml
<articulo>
  <titulo>Introducción</titulo>
  <parrafo>Este texto tiene <enfasis>énfasis</enfasis> dentro.</parrafo>
</articulo>
```
