A continuación tienes **una tarea breve por sesión (S2–S5)**, con **enunciado corto**, **alcance muy acotado** y **alineadas exactamente con lo trabajado en cada sesión**. No incluyo soluciones ni pistas técnicas adicionales más allá de lo imprescindible, para no anticipar el razonamiento.

---

## **Tarea S2 — Modificación de contenido y atributos**

**Tiempo estimado:** 20–25 minutos
**Sesión asociada:** Selección y modificación de elementos

### Enunciado

Partiendo del ejemplo del **visor de refranes**, modifica la página para que:

* En lugar de cambiar un texto, se muestre **una imagen**.
* Al pulsar el botón, debe **cambiar la imagen mostrada**.
* El cambio debe realizarse **modificando el atributo `src`** de la imagen mediante JavaScript.

### Condiciones

* Debes usar `querySelector`.
* No se permite recargar la página.
* Las imágenes pueden repetirse en bucle.

**Qué se evalúa:**
Selección correcta del elemento imagen y modificación de atributos (`src`).

---

## **Tarea S3 — Creación y eliminación de elementos**

**Tiempo estimado:** 25–30 minutos
**Sesión asociada:** Creación y eliminación de elementos del DOM

### Enunciado

Partiendo del ejemplo de **lista dinámica**, modifica la página para que:

* En lugar de avisos, se **creen cuadrados** en pantalla.
* Cada pulsación del botón debe **añadir un nuevo cuadrado**.
* Debe existir un botón para **eliminar el último cuadrado creado**.

### Condiciones

* Los cuadrados deben crearse dinámicamente con `createElement`.
* Los cuadrados deben ser elementos `<div>` estilizados con CSS.
* No se permite escribir los cuadrados directamente en el HTML.

**Qué se evalúa:**
Creación, inserción y eliminación correcta de elementos del DOM.

---

## **Tarea S4 — Modificación de estilos con JavaScript**

**Sesión asociada:** Estados visuales y estilos dinámicos

### **Parte 1**

**Tiempo estimado:** 15–20 minutos

#### Enunciado

Partiendo del ejemplo de **avisos con estados visuales**, modifica la página para que:

* Cada botón siga cambiando el estilo del aviso.
* Además, **el panel que contiene los botones** cambie su color de fondo de forma coherente con el estado:

  * Normal
  * Destacado
  * Error

### Condiciones

* El cambio debe realizarse mediante **clases CSS**.
* No se permite duplicar código CSS innecesario.

**Qué se evalúa:**
Uso correcto de `classList` y coherencia visual entre elementos.

---

### **Parte 2**

**Tiempo estimado:** 20–25 minutos

#### Enunciado

Crea una página nueva que contenga:

* Un panel.
* Un botón que permita **cambiar el color de fondo del panel**.
* Al pulsar el botón, se debe **pedir al usuario un color en formato RGB**.
* El color introducido debe aplicarse al panel mediante JavaScript.

### Condiciones

* El cambio de color debe hacerse usando **estilos en línea desde JavaScript**.
* El formato esperado es `rgb(r, g, b)`.

**Qué se evalúa:**
Aplicación directa de estilos con JavaScript y uso de entrada de datos del usuario.

---

## **Tarea S5 — Eventos y navegación interactiva**

**Tiempo estimado:** resto de la UT
**Sesión asociada:** Eventos (`click`) y control del flujo

### Enunciado

Desarrolla un **visor interactivo tipo Google Maps simplificado**:

* Se mostrará una imagen que representa una ubicación.
* El usuario podrá moverse usando botones:

  * Adelante
  * Detrás
  * Izquierda
  * Derecha
* Cada botón cambiará la imagen mostrada según la dirección elegida.

El tema es libre:

* pueblos,
* plazas de Jumilla,
* calles,
* mapas ficticios.

### Condiciones obligatorias

* **No se permite programación orientada a objetos**.
* La lógica debe basarse en:

  * Arrays.
  * Índices.
* Cada punto del mapa debe definir:

  * imagen actual (`src`)
  * índice del punto al que se va al mover:

    * izquierda
    * derecha
    * delante
    * detrás

Ejemplo conceptual de estructura (no código obligatorio):

```
punto = [imagen, izq, der, delante, detras]
```

* La navegación debe realizarse exclusivamente mediante **eventos `click`**.
* No se permite recargar la página.

**Qué se evalúa:**
Gestión de eventos, control de estado mediante índices y modificación del DOM en función de la interacción del usuario.

---

## Observación final para el alumnado

Cada tarea es **independiente**, breve y centrada en **una idea clave**.
El objetivo no es hacer una web compleja, sino **demostrar que sabes seleccionar, modificar y reaccionar a eventos en el DOM**.

Si quieres, en el siguiente paso puedo:

* Convertir estos enunciados en **Markdown listo para repositorio**.
* Ajustar tiempos o dificultad para grupos concretos.
* Preparar **rúbrica mínima por tarea** alineada con CE3.c–f.
