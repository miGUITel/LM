# Arranque guiado: de una carpeta a un proyecto compartido

[Volver a los talleres](README.md)

Seguid la demostración del profesor. Cada integrante debe realizar las operaciones en su equipo y con su cuenta. Parad en cada comprobación antes de continuar.

## 1. Reconocer las herramientas

- **VS Code:** escribe y guarda los archivos.
- **Explorador de archivos:** permite encontrarlos y organizarlos.
- **Navegador:** muestra el resultado del HTML guardado.
- **Git:** conserva versiones en vuestro equipo.
- **GitHub:** aloja el repositorio privado que comparte la pareja.

Abrid VS Code y **Terminal → Nuevo terminal**. Escribid `git --version`. Debe aparecer una versión. Si no aparece, avisad al profesor para revisar la instalación de Git; puede ser necesario cerrar y abrir VS Code después de instalarlo. No necesitáis extensiones para estos talleres.

## 2. Crear, guardar y abrir un archivo

1. Fuera del repositorio del profesor, cread una carpeta `mis-proyectos` y dentro otra llamada `prueba-html`.
2. En VS Code, elegid **Archivo → Abrir carpeta** y seleccionad `prueba-html`. Comprobad el nombre en la barra lateral.
3. Cread `index.html`. Comprobad que su extensión es `.html`, no `.html.txt`.
4. Escribid este punto de partida y guardad con **Ctrl+S**:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi primera ficha</title>
  </head>
  <body>
    <h1>Ficha de un alumno</h1>
    <p>Este sitio está empezando.</p>
  </body>
</html>
```

5. Localizad el archivo con el explorador y abridlo en el navegador. Si se abre en el editor, usad **Abrir con** y elegid el navegador.
6. Cambiad el párrafo, guardad y actualizad el navegador. Cambiad también `title` y observad la pestaña.

**Comprobación:** cada integrante localiza el archivo, distingue título y encabezado visible y repite editar → guardar → actualizar.

## 3. Crear el repositorio privado de la pareja

Solo un integrante crea el repositorio en GitHub: **New repository**, nombre `ficha-alumno`, visibilidad **Private** y opción de añadir un `README`. No copiéis el repositorio del profesor ni creéis dos repositorios para la pareja.

El propietario abre **Settings → Collaborators → Add people** e invita al compañero y al usuario que indique el profesor. El compañero acepta. Pedid al profesor que acepte y compruebe el acceso: enviarle un enlace no le da permiso por sí solo.

Ambos copian la dirección HTTPS del repositorio desde **Code**. En VS Code, abrid la paleta con **Ctrl+Mayús+P**, buscad **Git: Clone**, pegad la dirección y elegid `mis-proyectos` como carpeta contenedora. Iniciad sesión con vuestra propia cuenta si se solicita y abrid la carpeta clonada `ficha-alumno`.

**Comprobación:** ambos abren el mismo repositorio en GitHub y ven **Private**. En VS Code está abierta su propia copia de `ficha-alumno`, no `prueba-html` ni la carpeta del profesor.

## 4. Identificar las aportaciones y guardar una versión

En el terminal, dentro de `ficha-alumno`, cada integrante configura su identidad para este repositorio. Sustituid los ejemplos por vuestro nombre y el correo verificado de vuestra cuenta, o el correo privado `noreply` que os muestre GitHub:

```text
git config user.name "Tu nombre"
git config user.email "Tu correo de GitHub"
git config user.name
git config user.email
```

Los dos últimos comandos comprueban la identidad. No escribáis la contraseña en estos comandos.

El primer integrante copia el `index.html` de la prueba dentro de `ficha-alumno`. Desde ahora trabaja sobre esta copia. Abre **Control de código fuente**, revisa el cambio, pulsa **+** para prepararlo, escribe `Crea la primera ficha HTML` y pulsa **Commit**. Después usa **Push / Enviar** en el menú de esa vista.

El segundo integrante, sin cambios locales pendientes, ejecuta `git pull --ff-only`. Comprueba que aparece `index.html`, añade al `README.md` su aportación inicial y guarda, prepara, confirma y envía el cambio. El primero lo recibe también con `git pull --ff-only`.

| Operación | Qué hace |
|---|---|
| Guardar | Escribe el archivo en el disco. |
| Preparar, botón + | Selecciona cambios para el commit. |
| Commit | Registra una versión local con un mensaje. |
| Push / Enviar | Envía los commits a GitHub. |
| Pull | Recibe e integra lo enviado por el compañero. |

**Comprobación:** GitHub muestra una aportación de cada integrante. Ambos explican por qué guardar no envía el archivo al compañero.

## 5. Organizar archivos y entender las rutas

Cread dentro del proyecto `recursos/imagenes`, `recursos/audio` y `recursos/video`. Git no guarda carpetas vacías: aparecerán en la copia del compañero cuando contengan archivos confirmados.

La ruta se interpreta desde el HTML que la utiliza. Desde `index.html`, en la raíz:

| Ruta | Dónde busca |
|---|---|
| `intereses.html` | Un archivo en la misma carpeta. |
| `recursos/imagenes/favicon.svg` | Un archivo dentro de esas subcarpetas. |
| `#presentacion` | Un elemento de esta página con `id="presentacion"`. |

Usad `/` en las rutas HTML y nombres en minúsculas, escritos exactamente como en el archivo. Una ruta como `C:\Users\...` solo describe vuestro equipo y no sirve para entregar. `../` sube una carpeta; no lo necesitáis para enlazar las tres páginas, que estarán juntas en la raíz.

Copiad el [favicon de práctica](recursos/favicon.svg) a `recursos/imagenes/favicon.svg`: descargad el archivo, no la página de GitHub que lo muestra. No creéis todavía archivos vacíos para las otras páginas: cada taller indicará cuándo añadirlas.

**Comprobación:** ambos localizan el favicon en su copia después de confirmar, enviar y recibir. Explican qué indican los nombres de carpeta de su ruta.

## 6. Rutina de pareja

Antes de editar, acordad quién trabaja en cada archivo y ejecutad `git status`. Si no hay cambios pendientes, recibid las novedades con `git pull --ff-only`. Trabajad por turnos sobre un mismo archivo y alternad quién escribe y quién revisa.

Al terminar: guardad, probad en el navegador, revisad el cambio, preparadlo, haced commit con un mensaje concreto y enviadlo. Comprobad el resultado en GitHub. Si el envío se rechaza, el pull falla o aparece un conflicto, revisadlo con el profesor; no borréis la carpeta ni forcéis el envío.

| Si sucede esto… | Comprobad primero… |
|---|---|
| No veo mi cambio | Archivo guardado, navegador actualizado y misma copia del archivo. |
| Mi compañero no ve mi trabajo | Commit enviado y después pull en su equipo. |
| No puedo clonar | Cuenta correcta, invitación aceptada y dirección del repositorio. |
| No carga un recurso | Archivo existente, extensión, mayúsculas y ruta desde el HTML. |

Completad ahora el análisis del [miniproyecto](0200_miniproyecto_ficha_alumno.md) y empezad el [taller 1](0201head.md). La prueba inicial es un ensayo; entregáis desde `ficha-alumno`.

Referencias: [Git en VS Code](https://code.visualstudio.com/docs/sourcecontrol/quickstart), [repositorios y remotos](https://code.visualstudio.com/docs/sourcecontrol/repos-remotes), [crear un repositorio](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository), [invitar colaboradores](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository), [identidad en Git](https://git-scm.com/docs/git-config) y [git pull](https://git-scm.com/docs/git-pull).
