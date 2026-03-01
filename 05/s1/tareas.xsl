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