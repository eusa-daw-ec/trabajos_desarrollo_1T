# Problemas de desarrollo del T1. Desarrollo con vanilla JS

## Asignatura: Desarrollo web en entorno cliente - curso: 2023/24



### Problema 1. Tablero del juego “buscaminas”

Escribe un código que simule el juego del "buscaminas". Se trata de dibujar un tablero de NxN casillas en el que se introducen al azar un número de minas.

**Requerimientos**:

1. El script pide al usuario el número de casillas del tablero y el número de minas. El número de casillas tiene que ser un cuadrado perfecto y e número de minas no puede superar un tercio del total de las casillas
2. Usa el carácter "0" para simular una casilla vacía y un carácter "*" que simule una mina
3. Controlar el flujo del script. Si el usuario introduce cantidades inadecuadas (número de casillas o de minas) el script tiene que finalizar
4. Usar métodos de entrada y salida básicos (prompt y alert)

Desarrolla la actividad con una estructura de carpetas correspondiente a un proyecto básico de JS tal y como se detalla a continuación

```tex
buscaminas
├─ index.html
├─ JS
│	└─ main.js
└─ CSS
	└─ styles.css
```

### Problema 2. Reserva de salas

Se trata de crear la estructura de objetos necesaria para programar una aplicación básica de reserva de salas.

El caso de uso es el siguiente:

Disponemos de un centro cívico que tiene varias salas. Los usuarios pueden reservar dichas salas por tramos de una hora a lo largo de la jornada. Se trata de almacenar objetos que representen a los usuarios y las salas y diseñar los mismos para que puedan interactuar entre ellos de manera adecuada.

A tener en cuenta:

1. La aplicación ha de permitir dar de alta nuevas salas disponibles. Cada sala consta de un nombre y un listado determinado de horas libres (números enteros comprendidos entre 8 y 20)
2. Cada sala ha de disponer de una serie de funcionalidades a la hora de gestionar las reservas. Debe llevar un registro de las reservas pendientes de confirmar, las reservas confirmadas y las reservas rechazadas.
3. La aplicación ha de permitir también el alta de nuevas solicitudes de reserva de sala. Cada solicitud consta de un identificador numérico, un nombre de solicitante, un nombre de sala y una hora de reserva
4. Para probar la aplicación hemos de ser capaces de dar de alta un par de salas y dar de alta varias solicitudes de uso en distintas horas a distintas salas. Dichas solicitudes podrán ser aprobadas o canceladas. Tiene que ser posible ver el estado de nuestra solicitud

Se pide:

1. Escribir el código de la aplicación.
2. Detallar los constructores necesarios y sus atributos (puedes hacerlo mediante comentarios en el código)

Importante:

- No es necesario programar HTML, basta con programar el código JS y usar la consola para los procesos de entrada y salida.
- La solución al problema sería conseguir un script `app.js` con el código que cumpla con los requerimientos

Recomendaciones:

- Piensa primero detenidamente cuántos tipos de objetos vas a necesitar y cuáles tienen que ser sus atributos y métodos
- Piensa bien el tipo de datos necesario para cada atributo
- Utiliza getters y setters cada vez que sea necesario.
- Repasa en consola el funcionamiento de los distintos métodos

### Problema 3. Manipulación del DOM

Esta práctica consiste en la confección de un componente JavaScript que permite seleccionar un objeto mediante una lista desplegable y presentar sus características en pantalla. Para ello utilizaremos Bootstrap para dar estilo al componente.

Vamos a ir desarrollando poco a poco la aplicación

Primero accede al siguiente enlace para ver un vídeo demostrativo de lo que se quiere conseguir

https://drive.google.com/file/d/1ueGplLXmhFRY5ngAEVey0YLcwMADzk8H/view

Una vez que tenemos clara la idea vamos a ir desarrollando la aplicación

Lo primero es establecer la estructura del proyecto: Sería algo como esto (idea orientativa)

```javascript
compraCoche
    ├─ index.html
    ├─ js
    │	└─ main.js
    ├─ img
    │	└─ img1.jpg
    │	└─ img2.jpg
    │	└─ img3.jpg
    └─ css
        └─ styles.css
```

La parte HTML de la aplicación consta de un componente Bootstrap que se llama "card". Nos permite presentar la información tal y como has visto en el vídeo de demostración.

Recuerda que para integrar Bootstrap en nuestro proyecto podemos llamar a su CDN desde el *head* del archivo `index.html` insertando el siguiente código

```html
<!-- Bootstrap CSS v5.2.1 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
```

A continuación te dejo el código de una plantilla que podrás usar. Puedes insertarla dentro del *body* de `index.html`

```html
<main>
    <div class="row justify-content-evenly">
        <div class="col-md-3 mb-4 p-5">
            <div class="card mb-4 p-5" style="max-width: 540px;">
                <img src="____" class="img-fluid rounded-start" alt="_____">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title" >_______</h5>
                    <p class="card-text">______</p>
                    <p class="card-text"><small class="text-muted">______</small></p>
                    <select class="form-select form-select-md mb-3">
                        <option selected>______</option>
                        <option value="__" >_____</option>
                        <option value="__" >_____</option>
                        <option value="__" >_____</option>
                    </select>
                    <a href="#" class="btn btn-primary">_____</a>
                </div>
            </div>
        </div>
    </div>
</main>
```

Con este código tendrás prácticamente resuelto el html del proyecto a falta de algunos detalles

Para desarrollar el componente necesitarás de una "base de datos" para poder presentar la información de los objetos en pantalla. Para ello tendrás que diseñar **una estructura de objetos** que pueda ser leída por la aplicación. Integraremos los datos directamente en el código JavaScript que es lo más sencillo. Elige bien las propiedades de los objetos para que te encajen en lo que se pide en el proyecto.
(Orientación: al principio del archivo `main.js` puedes insertar algo parecido a lo siguiente:)

```javascript
const modelosDeCoche = [
    {
        id: "---",
        nombre: "---",
        descripción: "---",
        observaciones: "---",
        fotoURL: "img/img__.jpg",
        mensajeCompra: "---",
        claseBotonCompra: "--clase del tipo de btn en Bootstrap--",
    },
    ...
    // un objeto como el anterior por cada coche que se quiera presentar
];
```

Por último, y lo más importante, usa tus conocimientos sobre manipulación del DOM para conectar HTML y JavaScript de modo que cuando se selecciones un modelo de coche, toda la información se presente en la tarjeta (foto, descripción, etc...). Recuerda que el botón de compra tiene un comportamiento personalizado en cada caso.

Una orientación sobre la estructura del script `main.js`

```html
main.js
├─ Definición de los objetos de la "base de datos"
├─ Declaración de todas las variables que conectan DOM con JS
├─ Manejador del evento del cambio del desplegable
│	└─ capturar valores que interesen
│	└─ cambiar elementos del DOM que sean necesarios
└─ Manejador del evento del botón de compra
	└─ capturar valores que interesen
	└─ cambiar elementos del DOM que sean necesarios
```

Una práctica interesante es envolver todo el código JS en un manejador de evento `window` tal y como ya se ha visto en otras prácticas:

```html
// Definición de los objetos de la "base de datos"

window.addEventListener("DOMContentLoaded", (e) => {
    
//  ... Todo el código de la aplicación
    
}
```

### Problema 3. Programación asíncrona en JS y AJAX

Se trata de desarrollar una página web que presente en forma de cuadrícula un listado de películas más populares del momento. Para ello usaremos la web de The Movie DB (https://www.themoviedb.org/). Investigaremos su API y veremos de qué manera podemos usarlas para nuestros propósitos.

Empezamos pues:

1. Conéctate a la web de The Movie DB (https://www.themoviedb.org/) y busca información sobre su API. Tendrás que tratar de conseguir una API Key, para lo que tendrás que registrarte como usuario de la web
2. Busca en la API Reference cual es la URL para conseguir las **Favorite Movies**.
3. Una vez que tengas la API Key y la URL que necesitas para conseguir un listado de películas favoritas puedes comenzar con el desarrollo de la aplicación

**Para desarrollar la aplicación** planteamos la estructura de siempre:

```html
apiPeliculas
├─ index.html
├─ JS
│	└─ main.js
└─ CSS
	└─ styles.css
```

El fichero `index.html` tendrá que tener en su cabecera (head) estas líneas (a parte de todo aquello que sea necesario). Con ello conseguimos traernos las fuentes tipográficas necesarias para usar en nuestro proyecto.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">
```

Copia el siguiente contenido en el fichero de hoja de estilos. No tendrás que hacer nada más en este sentido, pero intenta entender cómo influye cada selector y sus estilos en el resto del proyecto.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: #e0e0e0;
    color: #1d1d1d;
}

.contenedor {
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 100px auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}

.contenedor .pelicula {
    text-align: center;
}

.contenedor .pelicula .titulo {
    font-size: 16px;
    font-weight: 600;
}

.contenedor .pelicula .poster {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 15px;
}

.paginacion {
    position: fixed;
    bottom: 0;
    background: #100a1f;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
}

.paginacion button {
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 50px;
    width: 200px;
    background: #241744;
    color: #fff;
    border-radius: 100px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transition: .3s ease all;
}

.paginacion button:hover {
    background: #137c32;
}
```

#### Desarrollo de la aplicación

Una vez preparados los archivos ya puedes empezar con el archivo index.html y con el fichero app.js. Se pide:

- Presentar una página con una cuadrícula de 4 x 5 (20 carátulas) donde se listen las películas favoritas según tmdb.com (carátula + título)
- Al final de la página montar un sistema de paginación (botones "anterior" y "siguiente") que permita navegar entre las distintas páginas hasta llegar a un máximo de 100 películas. Después de la última página el botón "siguiente" ha de devolverte a la primera página

**Claves:**

- **Lo mejor será que utilices Fetch API para conectarte a la API de The Movie DB** y traerte los datos. Además, si utilizas una estructura async/await aun te será más intuitivo
- Usa JSON como formato de intercambio
- Fíjate bien en la hoja de estilos para asegurarte como denominar los distintos elementos HTML
- Con lo que sabes de manejo del DOM y de eventos no deberías tener problemas en resolver este desarrollo

### Problema 4. Gestor de tareas

Se trata de desarrollar un proyecto de lista de tareas con varias funcionalidades. Podrás ayudarte del material auxiliar que estimes oportuno, pero recuerda. Lo importante es tener las ideas claras antes de nada. Identifica las partes de la aplicación, su estructura y cómo han de encajar las piezas entre sí.

Vamos con ello:

- La lista de tareas ha de permitir **añadir y borrar** tareas.
- Las tareas se han de introducir desde el formulario correspondiente y presentarse en un listado debajo del mismo.
- Además de esa funcionalidad básica, la aplicación debe tener la **funcionalidad de búsqueda de tareas**, de modo que sea capaz de filtrar las tareas según se vayan introduciendo los caracteres en el recuadro de input correspondiente.
- Por último, la aplicación ha de posibilitar la carga de tareas de forma masiva desde un fichero externo, en formato JSON

El proyecto puede dividirse así en varias subtareas. Vamos con ellas:

#### Preparación de los ficheros del proyecto

Para desarrollar la aplicación planteamos la estructura de siempre: Un fichero index.html, una carpeta "css", y una carpeta "js". En la carpeta "css" tendrás que tener un fichero que guarde la hoja de estilos css y en la carpeta "js" un script main.js que sea llamado desde el fichero index.html

```html
gestorTareas
├─ index.html
├─ JS
│	└─ main.js
└─ CSS
	└─ styles.css
```



El fichero index.html tendrá que tener en sus cabecera (head) estas líneas (a parte de todo aquello que sea necesario). Con ello integraremos Bootstrap en el proyecto a través de su CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
```



Copia el siguiente contenido en el fichero de hoja de estilos. No tendrás que hacer nada más en este sentido, aunque es muy recomendable estudiar cómo influyen los estilos de cada selector

```css
body {
    height: 90vh;
    background-color: #dddfe6;
}

.container {
    max-width: 400px;
}

.textoFiltrado {
    /* Para mostrar como funciona los pintamos de color rojo */
    /* color: #F71E35;   */
    /* A los que no coinciden con la busqueda los ocultamos */
    display: none !important;
    /* alternativa a display none */
    /* visibility: hidden; */
}

#buscar {
    width: 35%;
}

/* Para iconos */

.fa-minus-circle {
    padding-top: 5px;
    color: #F71E35;
    font-size: 20px;
}

.fa-plus {
    color: bisque;
    font-size: large;
}

.fa-download {
    color: bisque;
    font-size: large;
}
```

#### Código HTML

Primero se abordará el diseño del código HTML

**Claves:**

- Vamos a utilizar BootStrap 5 para mejorar el diseño. Recuerda, por si te hace falta, que el modelo de rejilla (los componentes se dividen en filas de 12 columnas...)
- Usa un formulario (form) para cada funcionalidad (entrada y búsqueda). Para todo lo demás organiza el código con "div"
- Para los formularios utiliza esta clase css BS5: `class="shadow-lg p-3 mb-5 bg-body rounded"`
- Para las filas de la rejilla BS5 usa esta clase BS5: `class="row justify-content-center align-items-center g-2"`
- Usaremos la librería Font-Awesome (de Google). Para introducirlas en HTML usa el siguiente código: <i class="fas [[nombre_fuente]]">. Puedes consultar las font-awesome [aquí](https://fontawesome.com/v4/icons/)
- En los formularios es mejor que uses el elemento "button" para los botones de acción (mejor no uses el "enviar" clásico). Si usas un botón `submit` recuerda tenerlo en cuenta en el manejador del evento correspondiente para prevenir el comportamiento por defecto.
- Cuida la definición de los distintos elementos HTML para poder conectarlos con el código JS

Al final de esta fase deberías tener un código HTML preparado para implementar las funcionalidades que se piden

#### Programación de la entrada de tareas

En esta fase debes abordar la funcionalidad básica de entrada de tareas y listado de la mismas. Desarrolla el código de forma modular y comenta adecuadamente para facilitar la lectura posterior

Después de esta fase la lista de tareas tiene que poder añadir y borrar tareas

**Requerimiento PLUS:**

- Para añadir tareas haz que sea posible tanto haciendo click en el icono correspondiente como pulsando la tecla ENTER

**Claves:**

- Para facilitar el funcionamiento de la aplicación una muy buena costumbre es **envolver todo el código** en un manejador de evento "window". Usa esta estructura:

```javascript
window.addEventListener("DOMContentLoaded", (e) => {
    
//  ... Todo el código de la aplicación
    
}
```

- Recuerda que tenemos que identificar y definir ("arriba del todo") las conexiones entre elementos del DOM y las variables JS
- Identifica bien los eventos y cómo manejarlos
- Intenta modular el código todo lo que puedas.
- Ten cuidado cuando tengas que inyectar código desde JS a HTML...

#### Programación de la descarga de tareas simulando un origen remoto

Esta funcionalidad requiere que sea posible la descarga desde un origen "remoto" una lista de tareas ya rellena. Para simular el origen remoto crearemos en nuestra estructura una nueva carpeta a la que podemos llamar "data" y dentro de la misma crear un fichero "tareas.json" que contenga una listas de tareas prefijadas. Usa la siguiente estructura:

```javascript
[
    {
        "id": XXX,
        "tarea": "XXXX"
    },
    //  ...resto de tareas prefijadas
]
```

Una vez hecho esto ya puedes programar la descarga de las tareas desde ese "servidor remoto". Se trata que la descarga se dispare al hacer click en un botón al respecto y que cuando se realice "alertar" al usuario que la descarga ha finalizado

**Requerimiento PLUS (Para quien se atreva...):**

- Sería interesante que una vez que realicemos la descarga, el botón de descarga se desactive para evitar que vuelvan a escribirse las mismas tareas en la lista de nuevo.

**Claves:**

- Aquí tendrás que hacer uso de tus conocimientos de AJAX en combinación con el manejo del DOM
- Usa el método que quieras para hacer las peticiones AJAX (aunque ya sabrás que hay alguno más fácil que otro...)

#### Programación de la búsqueda de tareas

En esta fase se trata de que implementes una búsqueda automática de tareas. Cuando teclees caracteres en el formulario correspondiente, la lista de tareas tiene que ir reconfigurándose de modo que sólo aparezcan las tareas que contengan los caracteres que hayas introducido.

Para restaurar el formulario puedes dejar el formulario en blanco

**Requerimiento PLUS (Para quien se atreva...):**

- Para restaurar el formulario (y que vuelvan a visualizarse las tareas) ha de poder hacerse pulsando la tecla ESC

**Claves:**

- Vas a tener que hacer uso de arrays y sus métodos asociados