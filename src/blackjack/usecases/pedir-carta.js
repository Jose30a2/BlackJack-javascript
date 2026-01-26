

/**
 * Esta funcion permite coger una carta de la baraja
 * @param {Array<String>} deck Ejemplo: ['2C', '3C',...]
 * @returns {String} carta Ejemplo '2C'
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}
