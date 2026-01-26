

/**
 * Determina ganador de la partida
 * @param {Array[Number]} puntosJugadores - puntuacion de cada jugador el ultimo del array es la computadora
 */
export const determinarGanador = (puntosJugadores) => {
        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos){
                alert('Nadie gano');
            }else if ( puntosMinimos > 21 ){
                alert('Computadora gana');
            }else if ( puntosComputadora > 21 ){
                alert('jugador gana');
            }else{
                alert('Computadora gana');
            }

        }, 200);
    }