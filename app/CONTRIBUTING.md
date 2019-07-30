## Contribuciones
Para editar un fichero, primero entra en la pestaña "Pull requests" para comprobar que no está siendo traducido por otra persona.

Para mejor organización, sólo debe traducirse un fichero por Pull request.

### Qué traducir
Este documento pretende ser una versión en español de la documentación original, de modo que lo que se escriba aquí debe ser un reflejo de lo que haya en la versión en inglés. Esto quiere decir que si crees que falta algo por documentar o puedes mejorar la documentación (que no traducción), el proceso que debes seguir es proponerlo primero en la versión en inglés y, una vez aceptado allí, reflejar aquí la versión en español.

Los documentos que se deben traducir son los **documentos .rst**. Dentro de estos, se debe traducir **el texto y los comentarios del código**. Los nombres de los contratos, variables y demás no deben ser traducidos.


### Estilo
Algunas cosas a tener en cuenta cuando se traduzca un documento:
* El código, nombres de funciones y variables no se traducen (los comentarios sí).
* Palabras que pese a estar en inglés sean de uso común en español no se traducen (ej: blockchain, timestamp, etc.)
* Los asteriscos (\*), signos de igual (=), almohadillas (#), guiones (-), etc.  que acompañen a títulos, deberán extender su longitud a la longitud del título. Ejemplo:
~~~
************
Título corto
************

Títular más largo
=================
~~~
* En inglés, existe la norma de empezar la primera letra de cada palabra "importante" de un título en mayúscula. En español esta norma no existe, así que mejor empezar con mayúscula sólo la primera letra (y nombres propios y demás).
* Las rutas de enlaces del siguiente estilo no se traducen:
~~~
-.. _structure-state-variables:
~~~
* En los enlaces a las rutas del apartado anterior, se traduce el nombre del enlace, no la ruta. Ejemplo:
~~~
:ref:`variables de estado <structure-state-variables>`