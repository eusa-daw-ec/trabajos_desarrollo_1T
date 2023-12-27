function creaTablero(n) {
    let lado = Math.sqrt(n)
    if (n % lado != 0) {
        return document.write("El número de casillas no es correcto (Debe ser un cuadrado perfecto)");
    } else {
        let tablero = new Array(lado);
        for (let i = 0; i < lado; i++) {
            tablero[i] = new Array(lado);
        }

        for (let i = 0; i < lado; i++) {
            for (let j = 0; j < lado; j++) {
                tablero[i][j] = 0;
            }
        }
        return tablero;
    }
}

function colocaMinas(n, t) {

    lado = t.length;

    if (n > lado ** 2 / 3) {

        return alert("Demasiadas minas... Selecciona un número menor que un tercio del total de casillas del tablero");

    } else {

        let xMina = 0;
        let yMina = 0;

        while (n > 0) {

            xMina = parseInt(Math.random() * (lado));
            yMina = parseInt(Math.random() * (lado));

            if (t[xMina][yMina] === 0) {
                t[xMina][yMina] = '*';
                n--;
                // console.log(`Quedan ${n} minas por colocar...`)
            }
        }

        return t;

    }

}


function cuentaMinas(t) {


}


function dibujaTablero(t) {

    let tpl = '';

    t.forEach(element => {
        tpl += element.join(' ');
        tpl += '\n';
    });

    alert(tpl);

}


const N_CASILLAS = prompt("Numero de casillas? (Tiene que ser un cuadrado perfecto)")
const N_MINAS = prompt("Numero de minas? (Como mucho un tercio del número de casillas)")

alert(`Se han seleccionado ${N_CASILLAS} casillas y ${N_MINAS} minas...`);

let tableroVacio = creaTablero(N_CASILLAS);

if (tableroVacio) {
    let tableroMinas = colocaMinas(N_MINAS, tableroVacio);
    if (tableroMinas) {
        dibujaTablero(tableroMinas);
    } else {
        alert("Fin del script!!");
    }
} else {
    alert("Fin del script!!");
}




// let tableroFinal = cuentaMinas(tableroMinas);
// console.table(tableroFinal);





