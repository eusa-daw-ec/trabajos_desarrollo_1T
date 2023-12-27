window.addEventListener('DOMContentLoaded', (e) => {
    //referenciamos a los elementos del DOM
    const formCrear = document.getElementById('formCrear')
    const listaTareas = document.getElementById('listaTareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')


    /* Procedimiento para el ALTA */
    formCrear.addEventListener('submit', (e) => {
        e.preventDefault()
        if (e.submitter.id === 'btnAgregarTarea') {
            capturarValor();
        } else if (e.submitter.id === 'btnDescargarTareas') {
            descargarTareas();
            document.getElementById('btnDescargarTareas').disabled = true;
        }
    })




    const capturarValor = () => {
        const tareaNombre = inputCrear.value.trim();
        (tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('Debe ingresar una tarea')
    }

    const mostrarTareaHtml = (tarea) => {
        const liHtml = `<li class="list-group-item d-flex justify-content-between"><strong>${tarea}</strong> <i class="fas fa-minus-circle borrar"></i></li>`
        listaTareas.innerHTML += liHtml
    }


    /* Procedimiento para el BUSCAR */
    inputBuscar.addEventListener('keyup', (e) => {
        const caracter = inputBuscar.value.trim()
        busqueda(caracter)
        
        if (e.key === 'Escape') {
            inputBuscar.value = '';
            busqueda('');
          }
    })

    const busqueda = (cadena) => {
        //console.log(listaTareas.children)
        let arreglo = Array.from(listaTareas.children)
        //console.log(arreglo)
        arreglo
            .filter(texto => !texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.add('textoFiltrado')
            })
        arreglo
            .filter(texto => texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.remove('textoFiltrado')
            })
    }


    /* Procedimiento para BORRAR */
    listaTareas.addEventListener('click', (e) => {
        //console.log(e.target.classList)
        //console.log(e.target.parentElement)
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.remove()
        }
        inputBuscar.value = ''
    })

    // Uso de Fetch API para descargar lista de tareas desde fichero externo

    async function descargarTareas() {
        try {
            const response = await fetch('data/tareas.json');
            if (!response.ok) {
                throw new Error('Conexión con API no Ok!!');
            }
            const data = await response.json();
            const tareasDescargadas = data;

            tareasDescargadas.forEach(tarea => {
                mostrarTareaHtml(tarea.tarea)
            })

            alert("Tareas descargadas y añadiendo a la lista...")

        } catch (error) {
            console.error('Parece que ha habido un error en la descarga de la lista de tareas:', error);
        }
    }
})