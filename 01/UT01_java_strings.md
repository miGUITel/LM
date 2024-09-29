En Java, la clase `String` ofrece una variedad de métodos para manipular y analizar cadenas de texto. Aquí te resumo algunas de las funciones básicas que puedes usar para analizar `Strings`:

### 1. **`charAt(int index)`** 
   - **Descripción**: Devuelve el carácter en la posición especificada.
   - **Ejemplo**:
     ```java
     String str = "Hola";
     char c = str.charAt(2);  // 'l'
     ```

### 2. **`substring(int beginIndex)` y `substring(int beginIndex, int endIndex)`**
   - **Descripción**: Extrae una subcadena desde el índice inicial hasta el final o hasta el índice final (no inclusivo).
   - **Ejemplo**:
     ```java
     String str = "Hola Mundo";
     String subStr1 = str.substring(5);      // "Mundo"
     String subStr2 = str.substring(0, 4);   // "Hola"
     ```

### 3. **`indexOf(String str)`** y **`indexOf(char ch)`**
   - **Descripción**: Devuelve el índice de la primera aparición de una subcadena o carácter en la cadena. Devuelve `-1` si no se encuentra.
   - **Ejemplo**:
     ```java
     String str = "Hola Mundo";
     int index = str.indexOf('M');    // 5
     ```

### 4. **`lastIndexOf(String str)`** y **`lastIndexOf(char ch)`**
   - **Descripción**: Similar a `indexOf`, pero devuelve la última aparición de una subcadena o carácter.
   - **Ejemplo**:
     ```java
     String str = "Hola Mundo Hola";
     int lastIndex = str.lastIndexOf("Hola");  // 10
     ```

### 5. **`length()`**
   - **Descripción**: Devuelve la longitud de la cadena (número de caracteres).
   - **Ejemplo**:
     ```java
     String str = "Hola";
     int length = str.length();  // 4
     ```

### 6. **`split(String regex)`**
   - **Descripción**: Divide la cadena en un array de subcadenas usando un separador (expresión regular).
   - **Ejemplo**:
     ```java
     String str = "uno,dos,tres";
     String[] partes = str.split(",");  // ["uno", "dos", "tres"]
     ```

### 7. **`equals(String anotherString)`** y **`equalsIgnoreCase(String anotherString)`**
   - **Descripción**: Compara dos cadenas para verificar si son iguales (`equals`) o si son iguales ignorando mayúsculas/minúsculas (`equalsIgnoreCase`).
   - **Ejemplo**:
     ```java
     String str1 = "Hola";
     String str2 = "hola";
     boolean iguales = str1.equals(str2);             // false
     boolean igualesIgnoreCase = str1.equalsIgnoreCase(str2);  // true
     ```

### 8. **`contains(CharSequence s)`**
   - **Descripción**: Verifica si una cadena contiene una subcadena específica.
   - **Ejemplo**:
     ```java
     String str = "Hola Mundo";
     boolean contiene = str.contains("Mundo");  // true
     ```

### 9. **`startsWith(String prefix)`** y **`endsWith(String suffix)`**
   - **Descripción**: Verifica si una cadena comienza o termina con una subcadena específica.
   - **Ejemplo**:
     ```java
     String str = "Hola Mundo";
     boolean empiezaCon = str.startsWith("Hola");  // true
     boolean terminaCon = str.endsWith("Mundo");   // true
     ```

### 10. **`replace(char oldChar, char newChar)`** y **`replace(String oldStr, String newStr)`**
   - **Descripción**: Reemplaza todas las ocurrencias de un carácter o una subcadena por otra.
   - **Ejemplo**:
     ```java
     String str = "Hola Mundo";
     String nuevoStr = str.replace("Mundo", "Amigo");  // "Hola Amigo"
     ```

### 11. **`toUpperCase()` y `toLowerCase()`**
   - **Descripción**: Convierte todos los caracteres de una cadena a mayúsculas (`toUpperCase`) o minúsculas (`toLowerCase`).
   - **Ejemplo**:
     ```java
     String str = "Hola";
     String mayusculas = str.toUpperCase();  // "HOLA"
     String minusculas = str.toLowerCase();  // "hola"
     ```

### 12. **`trim()`**
   - **Descripción**: Elimina los espacios en blanco al principio y al final de la cadena.
   - **Ejemplo**:
     ```java
     String str = "   Hola Mundo   ";
     String limpio = str.trim();  // "Hola Mundo"
     ```

### 13. **`isEmpty()` y `isBlank()`** (disponible desde Java 11)
   - **Descripción**: Verifica si una cadena está vacía (`isEmpty`) o si está vacía o contiene solo espacios en blanco (`isBlank`).
   - **Ejemplo**:
     ```java
     String str1 = "";
     String str2 = "   ";
     boolean estaVacia = str1.isEmpty();  // true
     boolean estaBlanca = str2.isBlank(); // true
     ```

