var modelosDeCoche = [
    {
        id: "1",
        nombre: "Coche Blanco",
        descripción: "Coche blanco último modelo. Diesel puro. Empieza a ahorrar para pagar el combustible",
        observaciones: "Disponibles hasta fin de existencias",
        fotoURL: "assets/coche_blanco.png",
        mensajeCompra: "Comprado!! Te gusta la gasoliiina, dale más gasoliiina...",
        claseBotonCompra: "btn btn-light",
    },
    {
        id: "2",
        nombre: "Coche Rojo",
        descripción: "Modelo hibrido enchufable. Cuidado con los cortocircuitos",
        observaciones: "Funciona con tres pilas AAA",
        fotoURL: "assets/coche_rojo.png",
        mensajeCompra: "Felicidades por la compra!! Tu compañía electrica te quiere...",
        claseBotonCompra: "btn btn-danger",
    },
    {
        id: "3",
        nombre: "Coche Verde",
        descripción: "Ecológico a más no poder. Funciona con vegetales de hoja verde",
        observaciones: "Cuidado con los gases...",
        fotoURL: "assets/coche_verde.png",
        mensajeCompra: "Comprado!! Verde que te quiero verde... ",
        claseBotonCompra: "btn btn-success",

    }
];


document.getElementById('sel-modelo').addEventListener("change", () => {

    const idSeleccionado = document.getElementById('sel-modelo').value;
    const modeloSeleccionado = modelosDeCoche.find(modelo => modelo.id === idSeleccionado);

    document.getElementById("btn-compra").className = "btn btn-primary"
    document.getElementById("btn-compra").textContent = "Comprar...";

    document.getElementById('foto-modelo').src = modeloSeleccionado.fotoURL;
    document.getElementById('titulo-modelo').textContent = modeloSeleccionado.nombre;
    document.getElementById('desc-modelo').textContent = modeloSeleccionado.descripción;
    document.getElementById('observaciones-modelo').textContent = modeloSeleccionado.observaciones;
});

document.getElementById("btn-compra").addEventListener("click", () => {

    const idSeleccionado = document.getElementById('sel-modelo').value;
    const modeloSeleccionado = modelosDeCoche.find(modelo => modelo.id === idSeleccionado);

    document.getElementById("btn-compra").className = modeloSeleccionado.claseBotonCompra;
    document.getElementById("btn-compra").textContent = modeloSeleccionado.mensajeCompra;

});