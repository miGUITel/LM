<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html>
            <head>
                <title>Detalles del Concesionario</title>
            </head>
            <body>
                <h1>
                    <xsl:value-of select="concesionario/detalles/nombre" />
                </h1>
                <h3>
                    Dirección: <xsl:value-of select="concesionario/detalles/direccion" />
                </h3>
                <h3>
                    Teléfono: <xsl:value-of select="concesionario/detalles/telefono" />
                </h3>
                <xsl:for-each select="concesionario/coches/coche">
                    <xsl:sort select="marca" order="ascending" />
                    <!-- Para ordenar por año: -->
                    <!-- <xsl:sort select="año" order="ascending" /> -->
                    <!-- Para ordenar por precio: -->
                    <!-- <xsl:sort select="precio" order="ascending" /> -->
                    <h2>
                        <xsl:value-of select="marca" /> - <xsl:value-of select="marca/@modelo" />
                    </h2>
                    <p>
                        Año: <xsl:value-of select="año" />, 
                        Precio: <xsl:value-of select="precio" /> €, 
                        Combustible: <xsl:value-of select="combustible" />
                    </p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
