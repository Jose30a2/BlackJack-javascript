import {crearDeck, pedirCarta, valorCarta,turnoComputadora,crearCarta, acumularPuntos} from './usecases';

/**
 * 2C = Two of Clubs(Tréboles)
 * 2D = Two of Diamonds(Diamantes)
 * 2H = Two of Hearts(Corazones)
 * 2S = Two of Spades(Espadas)
 */

// Funcion anonima autoinvocada
//*** PATRON MODULO */

export const miModulo = (() => {
    'use strict'    // Habilita el modo estricto de JavaScript

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [0,0];

    // Referencias al HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnNuevo = document.querySelector('#btnNuevo'),
          btnDetener = document.querySelector('#btnDetener'),
          puntosHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');

    //**** ESTA FUNCION INICIALIZA EL JUEGO  **** */
     const inicializarJuego = (numJugadores = 2) => {
        
        deck = crearDeck(tipos, especiales);
        btnDetener.disabled = false;
        btnPedir.disabled = false;

        puntosJugadores = [];
        for(let i = 0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
       
    }
   

    

    

    

    

   


        
    


    // ***** EVENTOS *******

    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores);

        crearCarta(carta, 0,divCartasJugadores);
        
        if(puntosJugador > 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador,deck, puntosJugadores, divCartasJugadores);
        }else if ( puntosJugador === 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador,deck, puntosJugadores, divCartasJugadores);
        }
        
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true ;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0],deck,puntosJugadores, divCartasJugadores);
    });

    btnNuevo.addEventListener('click', () => {
       inicializarJuego();



    });

    //Hacer visible al exterior el inicio de juego
    return {
        nuevoJuego: inicializarJuego
    };

})();




//TODO:  borrar
