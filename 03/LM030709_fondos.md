### LM030709-background-border-outline.md

[Back to Index](../index.md)

En CSS, las propiedades de **background**, **border** y **outline** son fundamentales para definir el estilo visual de los elementos, ya que permiten controlar el fondo, los bordes y los contornos externos de los mismos.

#### **Background**

La propiedad `background` se refiere a todo lo relacionado con el fondo de un elemento. Esto incluye el color de fondo, las imágenes de fondo, y cómo estas imágenes se posicionan o repiten dentro del elemento. Las propiedades de fondo permiten definir si un elemento tendrá un color sólido, una imagen o una combinación de ambos, así como ajustar la manera en que estos fondos se comportan en relación con el tamaño y desplazamiento del elemento.

#### **Border**

La propiedad `border` define el borde que rodea el contenido de un elemento. Esto incluye el grosor, el estilo y el color de dicho borde. Los bordes pueden aplicarse de manera uniforme alrededor de todo el elemento o ajustarse de forma independiente en cada lado. Además, los bordes pueden tener esquinas redondeadas, lo que permite estilizar elementos para que tengan un aspecto más suave y visualmente atractivo.

#### **Outline**

La propiedad `outline` es similar a `border`, pero a diferencia de los bordes, los contornos no afectan el tamaño ni la disposición del elemento en el flujo del documento. Un contorno rodea el borde del elemento y es útil para destacar elementos cuando reciben el foco o la interacción del usuario (por ejemplo, al usar tabulador en formularios). A través de `outline`, es posible ajustar el color, el grosor y el estilo de este contorno externo, además de definir la distancia entre el contorno y el borde del elemento.

Las propiedades de CSS relacionadas con fondos, bordes y contornos permiten definir y estilizar los límites visuales de los elementos, así como controlar su fondo. Estas propiedades se utilizan para mejorar la apariencia de cajas, bloques y otros elementos en la página web.

#### Propiedades más importantes de fondos, bordes y contornos

### **Propiedades de Fondo (`background`)**

1. **background-color**: Define el color de fondo de un elemento.
   - Ejemplo: `background-color: #f0f0f0;`

2. **background-image**: Permite aplicar una imagen de fondo.
   - Ejemplo: `background-image: url('ruta-imagen.jpg');`

3. **background-repeat**: Controla si la imagen de fondo se repite o no.
   - Valores: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.

4. **background-position**: Especifica la posición inicial de la imagen de fondo.
   - Ejemplo: `background-position: center center;`

5. **background-size**: Controla el tamaño de la imagen de fondo.
   - Valores: `cover`, `contain`, o dimensiones específicas (`100px`, `50%`).

6. **background-attachment**: Establece si la imagen de fondo se desplaza con el contenido o permanece fija.
   - Valores: `scroll`, `fixed`, `local`.

7. **background**: Propiedad abreviada que puede incluir `background-color`, `background-image`, `background-repeat`, `background-position`, y `background-attachment` en una sola línea.

### **Propiedades de Borde (`border`)**

1. **border-width**: Define el grosor del borde alrededor de un elemento.
   - Ejemplo: `border-width: 2px;`

2. **border-style**: Establece el estilo del borde.
   - Valores: `solid`, `dashed`, `dotted`, `double`, `none`, entre otros.

3. **border-color**: Define el color del borde.
   - Ejemplo: `border-color: #000;`

4. **border-radius**: Añade esquinas redondeadas al borde de un elemento.
   - Ejemplo: `border-radius: 10px;`

5. **border**: Propiedad abreviada que puede incluir `border-width`, `border-style` y `border-color` en una sola línea.
   - Ejemplo: `border: 2px solid #000;`

6. **border-top**, **border-right**, **border-bottom**, **border-left**: Propiedades individuales que permiten definir los bordes de cada lado de forma independiente.

### **Propiedades de Contorno (`outline`)**

1. **outline-width**: Define el grosor del contorno de un elemento.
   - Ejemplo: `outline-width: 2px;`

2. **outline-style**: Establece el estilo del contorno.
   - Valores: `solid`, `dashed`, `dotted`, `none`, etc.

3. **outline-color**: Define el color del contorno.
   - Ejemplo: `outline-color: red;`

4. **outline-offset**: Añade un espacio entre el contorno y el borde del elemento.
   - Ejemplo: `outline-offset: 5px;`

5. **outline**: Propiedad abreviada que puede incluir `outline-width`, `outline-style`, y `outline-color` en una sola línea.
   - Ejemplo: `outline: 2px dashed red;`

#### Ejemplo de uso de `background`, `border` y `outline`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Fondos, Bordes y Contornos en CSS</title>
    <style>
        .background-example {
            background-color: lightblue;
            background-image: url('https://via.placeholder.com/100');
            background-repeat: no-repeat;
            background-position: top right;
            background-size: 50px 50px;
            padding: 20px;
        }

        .border-example {
            border: 5px solid green;
            border-radius: 15px;
            padding: 20px;
        }

        .outline-example {
            outline: 3px dashed red;
            outline-offset: 10px;
            padding: 20px;
        }
    </style>
</head>
<body>

    <h2>Ejemplo de Fondo (background)</h2>
    <div class="background-example">
        Este elemento tiene un color de fondo azul claro y una imagen de fondo en la esquina superior derecha.
    </div>

    <h2>Ejemplo de Borde (border)</h2>
    <div class="border-example">
        Este elemento tiene un borde verde de 5px con esquinas redondeadas de 15px.
    </div>

    <h2>Ejemplo de Contorno (outline)</h2>
    <div class="outline-example">
        Este elemento tiene un contorno rojo de 3px estilo dashed, con un desplazamiento de 10px desde el borde.
    </div>

</body>
</html>
```

En este ejemplo:

- **background**: Se aplica un color de fondo y una imagen de fondo que no se repite, se posiciona en la esquina superior derecha y tiene un tamaño específico.
- **border**: Se define un borde sólido de 5px de grosor con esquinas redondeadas de 15px.
- **outline**: El elemento tiene un contorno externo de 3px estilo dashed en color rojo, separado del borde por 10px gracias a `outline-offset`.

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propiedades de Fondos, Bordes y Contornos en CSS</title>
    <style>
        .background-example {
            background-color: lightblue;
            background-image: url('https://via.placeholder.com/100');
            background-repeat: no-repeat;
            background-position: top right;
            background-size: 50px 50px;
            padding: 20px;
        }

        .border-example {
            border: 5px solid green;
            border-radius: 15px;
            padding: 20px;
        }

        .outline-example {
            outline: 3px dashed red;
            outline-offset: 10px;
            padding: 20px;
        }
    </style>
</head>
<body>

    <h2>Ejemplo de Fondo (background)</h2>
    <div class="background-example">
        Este elemento tiene un color de fondo azul claro y una imagen de fondo en la esquina superior derecha.
    </div>

    <h2>Ejemplo de Borde (border)</h2>
    <div class="border-example">
        Este elemento tiene un borde verde de 5px con esquinas redondeadas de 15px.
    </div>

    <h2>Ejemplo de Contorno (outline)</h2>
    <div class="outline-example">
        Este elemento tiene un contorno rojo de 3px estilo dashed, con un desplazamiento de 10px desde el borde.
    </div>

</body>
</html>

[Back to Index](../index.md)