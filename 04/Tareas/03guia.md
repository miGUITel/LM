## 🔹 EJERCICIO 6 (reto un poco mayor)

Aquí ya mezclamos **orden de elementos**, **opcionalidad**, **ID/IDREF**, y **valores enumerados** en atributos. Hay **varios fallos** repartidos entre XML y DTD (o en uno solo), y el objetivo es que al final **valide**.

### DTD

```dtd
<!ELEMENT parte (incidencia+, tecnico)>
<!ELEMENT incidencia (equipo, descripcion, fecha?)>
<!ELEMENT equipo EMPTY>
<!ELEMENT descripcion (#PCDATA)>
<!ELEMENT fecha (#PCDATA)>
<!ELEMENT tecnico (nombre, contacto?)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT contacto (#PCDATA)>

<!ATTLIST equipo
          id ID #REQUIRED
          tipo (pc|portatil|switch|ap|impresora|proyector) #REQUIRED>

<!ATTLIST incidencia
          refEquipo IDREF #REQUIRED
          prioridad (baja|media|alta) "media">
```

### XML

```xml
<parte>

  <incidencia refEquipo="e99" prioridad="alta">
    <descripcion>Cortes de Wi-Fi intermitentes</descripcion>
    <equipo id="e10" tipo="ap"/>
  </incidencia>

  <incidencia refEquipo="e2" prioridad="urgente">
    <equipo id="e2" tipo="pc"/>
    <descripcion>No arranca</descripcion>
    <fecha>2026-02-19</fecha>
  </incidencia>

  <tecnico>
    <contacto>ext. 214</contacto>
    <nombre>Laura Gómez</nombre>
  </tecnico>

</parte>
```

**Pistas (sin decir la solución):**

* Revisa la coherencia **ID / IDREF**: ¿a qué debe apuntar `refEquipo`?
* Revisa el **orden** declarado en el modelo de contenido (en DTD, el orden importa).
* Revisa los **valores permitidos** por la enumeración de `prioridad`.
* Revisa si `contacto` puede ir antes que `nombre` según la DTD.
