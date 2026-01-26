
/**
 * 
 * @param {String} carta 
 * @param {Number} turno El 0 primer jugaor el ultimo sera computadora
 * @param {Array[Number]} divCartasJugadores posicion jugador 
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {
        const imgCarta = document.createElement('img');
        //imgCarta.src = `./assets/cartas/${ carta }.png`;
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }