[índice](./LM0400_indice.md)

# Comentarios en XML RA1g

Los comentarios en XML permiten documentar el contenido del archivo, agregar notas explicativas y deshabilitar temporalmente partes del código sin afectar su funcionalidad. No son procesados por los parsers XML, lo cual los hace útiles para añadir información sin modificar la estructura.

## Sintaxis de los Comentarios en XML

Los comentarios comienzan con `<!--` y terminan con `-->`. No pueden incluir `--` en su contenido, y es recomendable dejar espacios en blanco para mejorar la legibilidad.

**Ejemplo válido:**

```xml
<!-- Este es un comentario válido en XML -->
<libro>
    <titulo>Introducción a XML</titulo>
    <autor>Juan Pérez</autor>
    <año>2023</año>
</libro>
```

## Usos de los Comentarios en XML

1. **Documentación del archivo:** Describir la finalidad del documento o su estructura.
2. **Notas temporales:** Añadir recordatorios o cambios futuros.
3. **Deshabilitar código:** Ocultar partes del contenido XML temporalmente.

**Ejemplo de deshabilitar código:**

```xml
<libro>
    <titulo>Introducción a XML</titulo>
    <!-- <editorial>Editorial Ejemplo</editorial> -->
    <autor>Juan Pérez</autor>
    <año>2023</año>
</libro>
```

Los comentarios ayudan a mantener el documento XML más claro y comprensible para otros desarrolladores.

[índice](./LM0400_indice.md)
