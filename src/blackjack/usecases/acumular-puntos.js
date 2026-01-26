import {valorCarta} from './';

// Turno: 0 = primer jugador y el ultimo sera la computadora
/**
 * 
 * @param {Sting} carta 
 * @param {Number} turno 
 * @param {Array[Number]} puntosJugadores 
 * @param {Array} puntosHTML 
 * @returns 
 */
export const acumularPuntos = (carta, turno, puntosJugadores) =>{
        const puntosHTML = document.querySelectorAll('small');
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno]; 
    }