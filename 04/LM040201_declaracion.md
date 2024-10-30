[índice](./LM0400_indice.md)

# Declaración de un Documento XML RA1g

Todo documento XML comienza con una declaración que establece ciertos parámetros esenciales para su correcta interpretación. Esta declaración, llamada *prolog*, especifica la versión del lenguaje, la codificación de caracteres y si el documento es independiente (*standalone*) o depende de recursos externos. Esta información se declara en la primera línea del archivo XML y permite que los procesadores de XML interpreten y validen el contenido correctamente.

## Componentes de la Declaración XML

La declaración XML se define comúnmente como sigue:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
```

### Versión (`version`)

El atributo `version` es obligatorio y especifica la versión de XML que el documento sigue. La versión más utilizada es `1.0`, aunque en algunos casos puede usarse `1.1` para mayor compatibilidad con caracteres especiales. Esta versión asegura que el documento XML sea interpretado según las reglas definidas por el estándar específico de XML.

Ejemplo:
```xml
<?xml version="1.0"?>
```

### Codificación (`encoding`)

El atributo `encoding` define la codificación de caracteres utilizada en el documento XML, siendo `UTF-8` la opción predeterminada y más utilizada. Esto garantiza que el documento sea interpretado correctamente, especialmente si contiene caracteres especiales o distintos alfabetos. En caso de no especificarse, se asume `UTF-8` por defecto.

Ejemplo:
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
```

### Standalone (`standalone`)

El atributo `standalone` indica si el documento es independiente o requiere referencias externas para ser interpretado completamente. Cuando se establece en `"yes"`, el documento no necesita archivos externos como definiciones de entidades o *DTDs* (Document Type Definitions). Si se indica `"no"`, significa que el archivo depende de recursos adicionales para ser procesado adecuadamente.

Ejemplo:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
```

Cada uno de estos elementos de la declaración XML proporciona información esencial que permite a los procesadores leer e interpretar el archivo de manera correcta y sin ambigüedades, facilitando así la interoperabilidad y confiabilidad de los documentos XML en distintos sistemas.

[Volver al índice principal](./LM0400_indice.md)