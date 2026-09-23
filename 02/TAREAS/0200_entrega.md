# Comprobar y entregar cada avance

[Volver a los talleres](README.md)

Cada taller se entrega con el **proyecto acumulado**, el **enlace al repositorio privado** y un **ZIP de la misma versión**. No se exige completar antes de tiempo los talleres siguientes.

## Antes de generar el ZIP

1. Revisad la lista del taller y abrid en el navegador las páginas que ya existan.
2. Revisad el HTML con el [validador de W3C](https://validator.w3.org/nu/), cargando el archivo o pegando el código. Corregid los errores y leed los avisos. Usad datos ficticios. El validador no comprueba por vosotros que funcionen enlaces y recursos locales.
3. Actualizad el `README.md`: comprobaciones, aportaciones, recursos, ayuda de IA si la hubo y partes pendientes. No marquéis como probado algo que todavía no existe.
4. Guardad, revisad los cambios, haced commit y enviadlo. Comprobad la versión en GitHub y el acceso del profesor.

## Crear el ZIP de la versión confirmada

En el terminal de VS Code, dentro de `ficha-alumno`, ejecutad:

```text
git status
git rev-parse --short HEAD
git archive --format=zip --prefix=ficha-alumno/ --output=../ficha-alumno-t01.zip HEAD
```

`git status` debe indicar que no quedan cambios pendientes; si los hay, revisadlos y confirmadlos antes. Copiad el identificador del segundo comando. En el tercero, cambiad `t01` por el taller que entregáis (`t02`, `t03`…). El ZIP se crea en la carpeta contenedora, fuera del proyecto, y contiene los archivos confirmados, sin `.git`. Los archivos sin confirmar no entran en el ZIP.

Extraedlo en otra carpeta y abrid el `index.html` extraído. Probad los enlaces y los recursos de este avance. No basta con abrirlos dentro del comprimido. Si corregís algo, repetid commit, envío y generación del ZIP.

## Entrega en Aula Virtual

Adjuntad el ZIP y escribid:

```text
Taller:
Integrantes:
Enlace al repositorio privado:
Commit incluido en el ZIP:
Comprobación del ZIP extraído:
Partes pendientes, si las hay:
Uso de IA y revisión realizada, si lo hubo:
```

Seguid la indicación del profesor sobre quién registra la entrega de la pareja. Ambos deben poder explicar el conjunto y reproducir una modificación sencilla. Las ampliaciones se señalan aparte y se muestran al profesor para solicitar su valoración.

Referencia: [git archive](https://git-scm.com/docs/git-archive).
