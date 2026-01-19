/**
 * 2C = Two of Clubs(Tréboles)
 * 2D = Two of Diamonds(Diamantes)
 * 2H = Two of Hearts(Corazones)
 * 2S = Two of Spades(Espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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

    //console.log(deck);
    // Desordena la baraja creada
    deck = _.shuffle(deck);
    
    console.log(deck);
}

createDeck();

// Esta funcion permite coger una carta de la baraja
const pedirCarta = () => {
    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(carta);
    console.log(deck);
    return carta;
}


//pedirCarta();

//Determina el valor de carta que se estrajo
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);
    return  ( isNaN(valor)) ? ((valor==='A') ? 11 : 10 ) : valor*1; 
}

console.log(valorCarta('6D'));