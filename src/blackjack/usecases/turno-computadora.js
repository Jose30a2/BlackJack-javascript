import {pedirCarta, determinarGanador,crearCarta, acumularPuntos} from './'; 
 
 // turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos - Puntos jugador
 * @param {Array[String]} deck -Array baraja cartas
 * @param {Array[]} puntosJugadores Puntos de cada juagoor
 */ 
 export const turnoComputadora = ( puntosMinimos, deck, puntosJugadores, divCartasJugadores ) => {

    if(!puntosMinimos) throw new Error('Puntos minimo son necesarios');
    

    let puntosComputadora = 0;
    
    do{
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1, puntosJugadores );

        crearCarta(carta, puntosJugadores.length-1,divCartasJugadores);


    }while( (puntosComputadora < puntosMinimos) && puntosComputadora <= 21);
      
    determinarGanador(puntosJugadores);
        
}