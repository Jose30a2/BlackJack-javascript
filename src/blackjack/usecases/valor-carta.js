

/**
 * Determina el valor de carta que se estrajo
 * @param {String} carta Ejemplo '2C'
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) => {

    if(!carta || carta.length === 0) throw new Error( 'Una carta es necesario');

    const valor = carta.substring(0, carta.length-1);
    return  ( isNaN(valor)) ? ((valor==='A') ? 11 : 10 ) : valor*1; 
}