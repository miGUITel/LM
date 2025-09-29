## Guía práctica y segura (para que la puedas pasar a tus alumnos)

Incluyo instrucciones para dos situaciones: (A) *si saben la contraseña del keyring* y quieren **sincronizarla** con su contraseña de usuario; (B) *si no saben la contraseña del keyring* y hay que **restablecerlo** (borrarlo recreándolo).

> Pide a los alumnos que copien/peguen los comandos en la terminal o sigan la parte gráfica. Estas acciones **no** requieren sudo.

### B — Si no conocen la contraseña del keyring (restablecer / recrear)

> **Advertencia:** esto borra las contraseñas guardadas. Haz copia si hay algo crítico.

1. **Respaldar (muy importante)**
   En la terminal:

   ```bash
   mkdir -p ~/keyring-backup
   cp ~/.local/share/keyrings/* ~/keyring-backup/ 2>/dev/null || true
   ls -la ~/.local/share/keyrings
   ```

   * Con esto guardan una copia en `~/keyring-backup` por si necesitan recuperar algo.

2. **Eliminar los archivos del keyring**

   ```bash
   rm ~/.local/share/keyrings/* 2>/dev/null || true
   ```

   (Si no existe la carpeta, el comando no hace nada.)

3. **Cerrar sesión y volver a iniciar sesión** (o reiniciar).

   * Cuando una aplicación necesite guardar una contraseña (p. ej. conectarse al Wi-Fi), el sistema les pedirá crear un nuevo keyring **y** una contraseña para él. Recomienda poner **la misma contraseña que usan para iniciar sesión**.

4. **Probar**: conectar al Wi-Fi, abrir VS Code y usar Git con credenciales; al guardar credenciales, se creará el nuevo keyring.

---

### Comprobaciones rápidas (comandos útiles)

* Ver qué hay en el keyring:

  ```bash
  ls -la ~/.local/share/keyrings
  ```
* Comprobar que han hecho la copia:

  ```bash
  ls -la ~/keyring-backup
  ```
