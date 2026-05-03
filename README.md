Hola profe, aqui le dejo par de tips para que pueda correr el servidor y hacer las pruebas:

- Para descargar las dependencias recuerde ir a la carpeta del proyecto (NICOLA SIGILLO) y ahi ejecutar el comando npm install

Cuando haga las pruebas en postman recuerde que a la hora de agregar o editar con Post y Put:
- acquiredDate debes ser una fecha en formato YYYY-MM-DD.
- minPlayers  un int > 0.
-  maxPlayers un int > 0 y >= minPlayers.
-  averageDuration un int > 0 en minutos.
-  name debe ser un string cualquiera
-  status debe ser uno de los siguientes: 'En perfectas condiciones', 'Ligeramente usado', 'Deteriorado' o 'Dañado'. Este es muy importante escribirlo tal cual porque sino puede dar errores ya que hice una validación que solo permita esos strings.
