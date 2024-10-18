## Paso 4: Instrucciones para Tus Alumnos
1. **Clonar el Repositorio**:
   - Cada alumno debe clonar el repositorio en su computadora usando la terminal:
     ```bash
     git clone https://github.com/tu-usuario/proyecto-colaborativo.git
     cd proyecto-colaborativo
     ```

2. **Configurar Acceso para Subir Cambios**:
   - Después de clonar el repositorio, los alumnos deben configurar su acceso para poder hacer `push` de manera sencilla:
     ```bash
     git remote set-url origin https://github.com/tu-usuario/proyecto-colaborativo.git
     git config --global user.name "Nombre del Alumno"
     git config --global user.email "correo@ejemplo.com"
     ```

3. **Autenticarse en GitHub para Subir Cambios**:
   - Los alumnos necesitarán autenticarse para poder enviar (`push`) cambios al repositorio. Existen dos formas comunes de autenticarse:
     
     **Opción 1: Usar Token de Acceso Personal**
     - Ve a [https://github.com/settings/tokens](https://github.com/settings/tokens) para crear un token de acceso personal.
     - Guarda el token en un lugar seguro.
     - Al ejecutar `git push` por primera vez, Git les pedirá las credenciales. Deben usar su nombre de usuario de GitHub y el token como contraseña.

     **Opción 2: Usar Llaves SSH**
     - Generar una llave SSH en su computadora (si no tienen una ya):
       ```bash
       ssh-keygen -t ed25519 -C "correo@ejemplo.com"
       ```
     - Copiar la llave pública generada:
       ```bash
       cat ~/.ssh/id_ed25519.pub
       ```
     - Añadir la llave pública en GitHub: ir a [https://github.com/settings/keys](https://github.com/settings/keys) y añadir la clave SSH.

4. **Hacer Cambios y Subirlos**:
   - Realizan cambios en los archivos del proyecto.
   - Guardan los cambios y los suben al repositorio:
     ```bash
     git add .
     git commit -m "Descripción de los cambios realizados"
     git push
     ```
   - **Alternativa con Visual Studio Code**: También pueden realizar estos pasos desde la interfaz de Visual Studio Code. En VSC, pueden ver los cambios, añadir los archivos al área de preparación (`staging`), realizar el commit y hacer `push` de los cambios de manera visual.

## Paso 5: Usar Visual Studio Code (VSC) para Facilitar el Trabajo
1. **Abrir el Proyecto en VSC**:
   - Los alumnos pueden abrir la carpeta del proyecto clonado en Visual Studio Code:
     ```
     code .
     ```
   - VSC tiene integración con Git, lo que les permitirá hacer commits, crear ramas y subir (`push`) cambios de manera visual y sencilla.

2. **Autenticarse en GitHub desde VSC**:
   - Cuando intenten hacer `push` por primera vez desde VSC, este les pedirá autenticarse.
   - Pueden usar su **nombre de usuario y token de acceso personal** generado previamente, o bien, si han configurado una **llave SSH**, VSC la usará automáticamente para autenticarse.

3. **Hacer Cambios y Subirlos con VSC**:
   - Los alumnos pueden usar la interfaz de Git que proporciona VSC para:
     - Ver qué archivos han cambiado.
     - Añadir los archivos al área de preparación (`staging area`).
     - Realizar el commit de los cambios con un mensaje descriptivo.
     - Subir (`push`) los cambios al repositorio remoto.