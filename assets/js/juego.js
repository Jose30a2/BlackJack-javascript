/**
 * 2C = Two of Clubs(Tréboles)
 * 2D = Two of Diamonds(Diamantes)
 * 2H = Two of Hearts(Corazones)
 * 2S = Two of Spades(Espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias al HTML
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');

const puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#jugador-cartas');

// Crea una nueva baraja desordenada
const createDeck = () => {

    for(let i=2; i<=10; i++){
        for( let tipo of tipos){
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos){
        for( esp of especiales){
            deck.push( esp + tipo)
        }
    }

    deck = _.shuffle(deck);
}

createDeck();

// Esta funcion permite coger una carta de la baraja
const pedirCarta = () => {
    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


//pedirCarta();

//Determina el valor de carta que se estrajo
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);
    return  ( isNaN(valor)) ? ((valor==='A') ? 11 : 10 ) : valor*1; 
}


// ***** EVENTOS *******

btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        btnPedir.disabled = true;
    }else if ( puntosJugador === 1){
        btnPedir.disabled = true;
    }
    
});