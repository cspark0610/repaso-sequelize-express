# Práctica Sequelize - Express - React

## Iniciando

- 1 Ejecutar comando npm i posicionado en la carpeta front.

- 2 Ejecutar comando npm i posicionado en la carpeta back.

- 3 Crear la base de datos correspondiente. Leer en el archivo index.js de la db el nombre de la base de datos.

- 4 Ejecutar comando npm run build para correr el webpack en el front. Recuerden que webpack va a estar escuchando y compilando los cambios realizados en el front.

- 5 Ejecutar comando npm start para levantar el servidor en el back.

**_Listo! El servidor debería estar funcionando y deberías poder ver el render en http://localhost:3000/_**

## Ejercicio

El objetivo es crear un programa que nos permita cargar datos de usuarios y, luego, cargar los datos de los autos **pertenecientes** a cada usuario.
Para crear un usuario en la base de datos deberemos realizar un POST, desde el front hacia el back, con los datos correspondientes, utilizando la librería axios.
Lo mismo sucederá con la creación del auto en nuestra base de datos.

La parte correspondiente al modelo, rutas y renderización de usuarios ya está realizada. Ustedes deberán completar el funcionamiento del programa, realizando la parte de los autos.

NO DEBERAN REALIZAR NADA DE ESTILOS.
RECUERDEN QUE LA PRACTICA ES DE SQUELIZE-EXPRESS-REACT

## Entender la estructura del código existente

Les recomendamos hacer una lectura comprensiva de los archivos existentes. Comenzando desde el componete Main, ubicado en la carpeta components, y continuando por los componentes hijos.
Del mismo modo, deberán ir al back para comprender cómo está realizado el modelo de usuario y cuáles son las rutas para interactuar con el servidor y la base de datos.

## Paso a paso

1. Testear que la creación de usuarios funcione correctamente.
2. Crear el modelo de sequelize para la creación de autos, el modelo puede llamarse Car o Auto, lo que prefieran. Deberá contener:
   a. Marca
   b. Modelo
   c. Año
   d. Precio
   Tener en cuenta que cada vez que carguemos un auto, deberemos elegir quién será su dueño. Por lo tanto, al guardarse en la base de datos, debemos declarar cuál es la relación entre el modelo Car o Auto y el modelo User.
   **¿Quién pertenece a quién?**
   **Investigar sobre los metodos de asociación:**
   https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9
3. Crear en el **back** la ruta correspondiente para poder crear un auto en la base de datos. Realizar un pedido POST a través de Postman para chequear que esté funcionando correctamente. Nos debería devolver el auto creado en la database.
   Pueden observar cómo está realizada la ruta para crear usuarios.
   PISTA: aquí deberemos asignar al usuario que es dueño del auto. Pueden encontrar el método necesario para hacerlo en el link que pasamos anteriormente.
4. Crear en el **back** la ruta correspondiente para buscar todos los autos.
5. Crear en el **front** un container que realice una solicitud al servidor para traer todos los autos y renderizarlos en un componente hijo. Así mismo, deberán crear la ruta necesaria para poder ver este nuevo componente.
   Pueden observar cómo está realizado el de usuarios.
6. Crear en el **back** la ruta correspondiente para buscar un auto en particular.
7. Crear en el **front** un container que realice la solicitud por un auto en particular y que tenga un componente hijo que renderice los datos del auto. Tener en cuenta que, entre los datos del auto, deberá mostrarse quién es el dueño.
   Deben investigar sobre el método **include de squelize** que deben utilizar del lado del servidor para poder enviar esta información.
   Asi mismo, deberán crear la ruta necesaria para poder ver este nuevo componente.
8. En la vista de todos los autos, al hacer click en un auto debería redirigir a la vista de ese auto en particular.
9. Crear en el **front** un container para poder realizar la creación de un auto. Este deberá tener un componente con el formulario adecuado. El formulario deberá tener una lista desplegable que permita seleccionar el usuario que es dueño del auto que estamos cargando.
   **Prestar atención especialmente a qué dato debemos enviar al back para hacer la relación entre auto y usuario**
10. En el componente SingleUser deberán renderizar los autos pertenecientes al usuario que se está viendo en pantalla. Esta parte la realizarán sin tanta guía. Tengan en cuenta de dónde traerán los datos para pasarselos a SingleUser.
11. Desde la vista de SingleUser al hacer click en alguno de los autos pertenecientes al usuario, deberá redireccionar hacia la vista de ese auto en particular.
12. Desde la vista de un auto en particular, al hacer click en el dueño del auto, deberá redireccionar hacia la vista de ese usuario.
