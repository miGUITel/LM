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
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
