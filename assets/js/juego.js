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
const divCartasComputadora = document.querySelector('#computadora-cartas');

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
    return deck;
}

deck = createDeck();

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

// turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
    do{
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    if( puntosMinimos > 21){
        break;
    }

    }while( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );


    setTimeout(() => {

    }, 10)

    if (puntosComputadora === puntosMinimos){
        alert('Nadie gano');
    }else if ( puntosMinimos > 21 ){
        alert('Computadora gana');
    }else if ( puntosComputadora > 21 ){
        alert('jugador gana');
    }else{
        alert('Computadora gana');
    }

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
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if ( puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
    
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true ;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    deck = [];
    createDeck();
    puntosHTML[0].innerText = '0';
    puntosHTML[1].innerText = '0';
    puntosComputadora = 0;
    puntosJugador = 0; 
    btnDetener.disabled = false;
    btnPedir.disabled = false;
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    

});



//TODO:  borrar
