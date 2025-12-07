### 🔹 Cierre de etiquetas en HTML5 y XML

En **HTML5** distinguimos dos tipos de elementos:

1. **Elementos con contenido** → necesitan **etiqueta de apertura y de cierre**

   ```html
   <p>Este es un párrafo.</p>
   <div>
     <h2>Subtítulo</h2>
     <p>Texto dentro del div.</p>
   </div>
   ```

   🔸 La barra en la etiqueta de cierre (`</p>`, `</div>`, etc.) **es obligatoria**.

2. **Elementos vacíos o autocontenidos** → **no tienen contenido**

   ```html
   <img src="foto.jpg" alt="Descripción">
   <hr>
   <meta charset="UTF-8">
   ```

   🔸 En **HTML5** se **recomienda escribirlos sin la barra final** (`>`).
   🔸 En **XML**, en cambio, **es obligatorio cerrarlos con barra**:

   ```xml
   <imagen src="foto.jpg" alt="Descripción" />
   ```

---

📘 **En resumen:**

* En **HTML5**, cierra siempre los elementos con contenido (`</etiqueta>`).
* En los **elementos vacíos**, basta con `>`, sin la barra.
* En **XML**, todas las etiquetas deben cerrarse (`</etiqueta>` o `/>`).
