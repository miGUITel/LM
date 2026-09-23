Aquí tienes la guía completa combinando las instrucciones detalladas sobre el reparto de temas y los pasos para trabajar con **Git y GitHub en Visual Studio Code (VSC)**.

---

# **📌 Práctica con Git, GitHub y XQuery en VSC**
**Objetivo:** Cada alumno documentará una categoría de expresiones en XQuery en un archivo `.md` y lo subirá a un repositorio compartido en GitHub. Aprenderán a usar Git y GitHub en **Visual Studio Code (VSC)** para clonar, hacer commits y subir cambios.

---

## **1️⃣ Creación del Repositorio**
Antes de comenzar, el profesor debe:
1. **Crear un repositorio en GitHub** llamado `XQuery-Practica`.
2. **Configurar permisos**:
   - Agregar a los alumnos como colaboradores en "Settings → Collaborators".
3. **Inicializar el repositorio con un `README.md`** explicando la tarea.

---

## **2️⃣ Asignación de Categorías a los Alumnos**
Cada alumno documentará una categoría de expresiones en XQuery.

| **Alumno** | **Categoría de Expresiones XQuery** |
|-----------|---------------------------------|
| Alumno 1  | Expresiones Aritméticas |
| Alumno 2  | Comparadores |
| Alumno 3  | Expresiones Lógicas (`and`, `or`, `not()`) |
| Alumno 4  | Manipulación de Cadenas |
| Alumno 5  | Funciones Agregadas (`count()`, `sum()`, etc.) |
| Alumno 6  | Expresiones Condicionales (`if-then-else`) |
| Alumno 7  | Ordenación (`order by`) |
| Alumno 8  | Creación de Nuevos Elementos XML |
| Alumno 9  | Uso de Variables (`let`) |
| Alumno 10 | Operaciones de Conjunto (`union`, `except`, `intersect`) |


### **Cada alumno debe incluir en su documento `.md`**:
✅ **Explicación teórica** de su categoría.  
✅ **Ejemplo práctico** con código XQuery.  
✅ **Captura de pantalla** de BaseX mostrando la ejecución.  

---

## **3️⃣ Instalación y Configuración en VSC**
### **🔹 Instalar Git**
1. Descargar e instalar **Git**:  
   🔗 [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Verificar la instalación:
   ```sh
   git --version
   ```
3. Configurar el usuario y correo en Git:
   ```sh
   git config --global user.name "Tu Nombre"
   git config --global user.email "tuemail@example.com"
   ```

### **🔹 Instalar Extensión de GitHub en VSC (Opcional)**
- Abrir **Visual Studio Code**.
- Ir a **Extensiones (`Ctrl + Shift + X`)**.
- Buscar **GitHub Pull Requests and Issues** e instalarla.

---

## **4️⃣ Clonar el Repositorio en VSC**
### **🔹 Opción 1: Desde la Terminal de VSC**
1. Abrir VSC.
2. Abrir la terminal (`Ctrl + ñ`).
3. Ejecutar:
   ```sh
   git clone https://github.com/tuusuario/XQuery-Practica.git
   ```
4. Acceder a la carpeta clonada:
   ```sh
   cd XQuery-Practica
   ```
5. Abrir la carpeta en VSC:
   ```sh
   code .
   ```

### **🔹 Opción 2: Desde la Interfaz de VSC**
1. Ir a **"Ver → Control de Código Fuente"** (`Ctrl + Shift + G`).
2. Hacer clic en **"Clonar Repositorio"**.
3. Introducir la URL del repositorio:
   ```
   https://github.com/tuusuario/XQuery-Practica.git
   ```
4. Seleccionar una ubicación en el equipo y abrir la carpeta en VSC.

---

## **5️⃣ Creación del Archivo `.md`**
1. En la carpeta `docs/`, cada alumno creará un archivo con su nombre y categoría.  
   📂 **Ejemplo:** `docs/expresiones-aritmeticas-JuanPerez.md`

2. **Estructura del archivo:**
   ```md
   # Expresiones Aritméticas en XQuery

   ## 📌 ¿Qué son las expresiones aritméticas?
   En XQuery, las expresiones aritméticas permiten realizar cálculos matemáticos como suma, resta, multiplicación y división.

   ## 📌 Ejemplo de código XQuery
   ```xquery
   let $suma := 10 + 5
   return $suma
   ```

   ## 📌 Captura de Pantalla
   ![Ejecución en BaseX](img/aritmeticas-ejecucion.png)
   ```

---

## **6️⃣ Hacer `commit` y subir cambios a GitHub**
### **🔹 Opción 1: Desde la Terminal de VSC**
1. Agregar los archivos al repositorio:
   ```sh
   git add docs/expresiones-aritmeticas-JuanPerez.md
   ```
2. Confirmar los cambios con un mensaje:
   ```sh
   git commit -m "Añadida documentación sobre expresiones aritméticas"
   ```
3. Subir los cambios al repositorio:
   ```sh
   git push origin main
   ```

### **🔹 Opción 2: Desde la Interfaz de VSC**
1. Ir a **"Control de Código Fuente"** (`Ctrl + Shift + G`).
2. Escribir un mensaje de commit (Ejemplo: `"Añadida documentación sobre expresiones aritméticas"`).
3. Hacer clic en **✓ Commit**.
4. Hacer clic en **"Sincronizar cambios"** para subirlo a GitHub.

---

## **7️⃣ Creación del Índice**
Uno de los alumnos (o entre todos) debe crear un archivo `indice.md` con los enlaces a cada documento.

📂 **Ejemplo `indice.md`**
```md
# 📌 Índice de Expresiones en XQuery

📂 **Expresiones documentadas por el grupo:**

1️⃣ [Expresiones Aritméticas](docs/expresiones-aritmeticas-JuanPerez.md)  
2️⃣ [Comparadores](docs/comparadores-MariaGomez.md)  
3️⃣ [Expresiones Lógicas](docs/expresiones-logicas-CarlosRuiz.md)  
...
```

📌 **Subirlo a GitHub** siguiendo los pasos anteriores.

---

## **8️⃣ Solución de Problemas**
🔹 **Error de autenticación (`git push`)**  
   - Generar un token de acceso en: [https://github.com/settings/tokens](https://github.com/settings/tokens).  
   - Usarlo en lugar de la contraseña.  

🔹 **No aparecen los cambios en GitHub**  
   - Comprobar que se hizo `commit` y `push` correctamente.  
   - Verificar que están en la rama correcta (`git branch`).  

---

## **📌 Resumen de Pasos**
1️⃣ Clonar el repositorio en VSC (`git clone`).  
2️⃣ Crear un archivo `.md` en `/docs/`.  
3️⃣ Agregar contenido con teoría, código XQuery y capturas de pantalla.  
4️⃣ Hacer `commit` y `push` para subir cambios a GitHub.  
5️⃣ Actualizar el índice (`indice.md`).  