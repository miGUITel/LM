# sesión 1: demos xpath y xslt y bases conceptuales

Material mínimo (solo 2 archivos)

## `tareas.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="tareas.xsl"?>
<tareas curso="DAM1" grupo="A">
  <tarea id="T1" prioridad="1">
    <titulo>Instalar BaseX</titulo>
    <fecha>2026-03-02</fecha>
  </tarea>

  <tarea id="T2" prioridad="3">
    <titulo>Repasar consultas XPath</titulo>
    <fecha>2026-03-03</fecha>
  </tarea>

  <tarea id="T3" prioridad="2">
    <titulo>Primera transformación XSLT</titulo>
    <fecha>2026-03-04</fecha>
  </tarea>
</tareas>
```

## `tareas.xsl` (lista ordenada, 2 niveles)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <body>
        <h1>Lista de tareas</h1>
        <!-- En el siguiente <p> mezclamos texto puro con info extraída del xml -->
        <p>
          Curso: <strong><xsl:value-of select="/tareas/@curso"/></strong>
          --- Grupo: <strong><xsl:value-of select="/tareas/@grupo"/></strong>
        </p>
        <ol>
          <xsl:apply-templates select="/tareas/tarea">
<!-- DEMO XSLT: cambia ascending ↔ descending -->
            <xsl:sort select="fecha" order="ascending"/>
          </xsl:apply-templates>
        </ol>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="/tareas/tarea">
    <li>
      <strong><xsl:value-of select="titulo"/></strong>
      <ol>
        <li>
<!-- DEMO XPath: cambia fecha ↔ @prioridad (solo tocando el select) -->
          Fecha: <xsl:value-of select="fecha"/>
        </li>
      </ol>
    </li>
  </xsl:template>
</xsl:stylesheet>
```

---

# Guion de demostración (55 min) con tus dos cambios

## 1) Arranque (5–8 min)

* Abres la carpeta en VS Code.
* Arrancas Live Server sobre `tareas.xml`.
* Mensaje: “XML guarda datos; XSLT decide cómo se ven”.

## 2) Leer el resultado (2 min)

* Se ve una lista ordenada con tareas y debajo la fecha.
* Señalas: “Esto lo genera la hoja XSL”.

## 2 BIS explicar plantillas

* match /
* 

## 3) Mostrar dónde está el “selector” (XPath) (5 min)

* En el XSL, enseñas **solo**:

  * `<xsl:for-each select="/tareas/tarea">`
  * `<xsl:value-of select="titulo"/>`
  * `<xsl:value-of select="fecha"/>`

Frase guía:

> “Lo importante hoy no es memorizar etiquetas, sino ver que aquí hay expresiones que *apuntan* a nodos del XML.”

## 4) Cambio 1: DEMO XPath (8–10 min)

Solo cambias el `select` de la línea de la fecha:

De:

```xml
<xsl:value-of select="fecha"/>
```

A:

```xml
<xsl:value-of select="@prioridad"/>
```

Y (opcionalmente) cambias el texto “Fecha:” por “Prioridad:”.

Refrescas y se ve el cambio.

Mensaje:

> “No he tocado el XML ni la estructura HTML: solo he cambiado la ruta de selección. Eso es XPath.”

*(Si quieres remarcar atributos: “@prioridad es un atributo, por eso lleva @”.)*

## 5) Cambio 2: DEMO XSLT (sort) (5 min)

Cambias:

```xml
<xsl:sort select="fecha" order="ascending"/>
```

por:

```xml
<xsl:sort select="fecha" order="descending"/>
```

Refrescas y se invierte el orden.

Mensaje:

> “Ahora no solo saco datos: también controlo el orden de salida.”

## 6) Cierre conceptual (10–12 min)

En 3 ideas (CE a,b,c comprimidos):

* a) “Necesidad: no consumimos XML así; lo convertimos a un formato útil.”
* b) “Aplicaciones: web, informes, integración.”
* c) “Tecnologías: XML + XPath (selección) + XSLT (transformación) + procesador.”

## 7) Puente a la sesión 2 (últimos 2–3 min)

> “Mañana empezamos con XPath en serio, porque todo XSLT se apoya en saber seleccionar bien.”

---

# Por qué este planteamiento es muy robusto

* El alumnado ve **dos efectos claros** con **dos cambios mínimos**.
* No introduces condicionales, plantillas múltiples, CSS ni tablas.
* Les queda un modelo mental limpio: *selección* vs *transformación*.

