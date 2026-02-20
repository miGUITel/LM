Perfecto. Te dejo la **guía definitiva de corrección de LM0401 (DTD → XML)**, en el mismo formato estructurado que acabamos de fijar para LM0402, para que la guardes como referencia interna.

---

# 📘 GUÍA DE CORRECCIÓN – LM0401

## (DTD → XML)

---

## 🎯 Objetivo de la tarea

El alumno recibe una **DTD** y debe:

1. Crear un **XML válido** respecto a esa DTD.
2. Entregar:

   * El XML.
   * (Si procede) la DTD.
   * Captura de validación en XMLCopyEditor.
3. Respetar orden, cardinalidades y atributos.
4. Cuidar la organización y extensión de los archivos.

En esta tarea evaluamos:

* Comprensión de restricciones estructurales.
* Uso correcto de cardinalidades.
* Uso correcto de atributos.
* Rigor formal en la entrega.

---

# 🟢 10 – Excelente (dominio + explotación consciente de la DTD)

### Debe cumplir:

* XML perfectamente válido.
* Respeta estrictamente orden y cardinalidades.
* Usa correctamente atributos obligatorios y enumerados.
* Prueba el valor por defecto cuando existe.
* Entrega formal correcta (extensión `.xml`, archivos bien organizados).
* Captura de validación incluida.

### Y además:

* No se limita a lo mínimo.
* Explora distintas posibilidades de la DTD:

  * Elementos opcionales usados y omitidos.
  * Cardinalidades variadas.
  * Diferentes valores enumerados.
  * Casos límite (por ejemplo, etiquetas vacías cuando `*` lo permite).

### Significado del 10:

No solo valida; demuestra comprensión profunda de las sutilezas de la DTD.

### Comentario tipo:

> Excelente trabajo. Has construido un XML completo y coherente, utilizando correctamente cardinalidades, atributos y valores por defecto. Se aprecia que comprendes las sutilezas de la DTD y no te has limitado a lo mínimo imprescindible.

---

# 🟢 9 – Correcto y completo

### Debe cumplir:

* XML completamente válido.
* Respeta estructura y restricciones.
* Usa correctamente los atributos.
* Entrega formal correcta.

### Pero:

* Se limita a un ejemplo funcional.
* No explora otras posibilidades del modelo.
* No demuestra intención de probar distintos casos.

### Significado del 9:

Trabajo técnicamente impecable.

### Comentario tipo:

> Documento correctamente estructurado y válido respecto a la DTD. Has respetado la estructura y las restricciones exigidas. El resultado cumple completamente con lo solicitado.

---

# 🟡 6 – Aceptable (válido pero con carencias relevantes)

### Casos típicos:

* XML válido, pero:

  * No explota correctamente las cardinalidades.
  * Uso muy básico del modelo.
  * Error formal de entrega (extensión incorrecta, archivo mal nombrado).
  * Mezcla XML y DTD cuando no procede.
  * Falta captura de validación.

### Significado del 6:

Comprende la validación, pero no trabaja con suficiente rigor o profundidad.

### Comentario tipo:

> El documento valida correctamente y demuestra comprensión básica de la estructura definida en la DTD. Sin embargo, existen aspectos formales o de planteamiento que deben revisarse. En el segundo intento, corrige estos detalles y asegúrate de entregar los archivos en el formato adecuado.

---

# 🔴 3 – No superado (error estructural o conceptual)

### Casos típicos:

* No valida.
* Orden incorrecto de elementos.
* Cardinalidades incumplidas (`+`, `?`, `*` mal interpretados).
* Falta atributo obligatorio.
* Uso de valores no permitidos en enumeraciones.
* Entrega incompleta.
* No incluye captura de validación.

### Significado del 3:

No demuestra comprensión de la DTD ni de las restricciones estructurales.

### Comentario tipo:

> El documento no cumple correctamente las restricciones definidas en la DTD y presenta errores estructurales relevantes. Es necesario revisar el orden de los elementos, las cardinalidades y el uso de atributos antes de realizar una nueva entrega.

---

# 📊 Filosofía de evaluación – LM0401

| Nota | Qué demuestra el alumno             |
| ---- | ----------------------------------- |
| 10   | Comprende y explota el modelo       |
| 9    | Comprende y ejecuta correctamente   |
| 6    | Ejecuta pero con carencias de rigor |
| 3    | No comprende las restricciones      |

---

# 🧠 Qué estamos evaluando realmente

* Interpretación de cardinalidades (`+`, `?`, `*`).
* Respeto del orden estructural.
* Uso correcto de atributos.
* Comprensión de valores enumerados y por defecto.
* Rigor formal en la entrega.

No solo que el XML valide, sino que el alumno entienda **por qué valida**.

