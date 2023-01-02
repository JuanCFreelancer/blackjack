/**
 * 2C = two of Clubs    (Tréboles)
 * 2D = two of Diamonds (Diamantes)
 * 2H = two of Hearts   (Corazones)
 * 2s = two of Spades   (Espadas)
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];


// Esta funcion crea una nueva deck o nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++){
        for( let tipo of tipos ){
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos){
        for( let esp of especiales){
            deck.push( esp + tipo);
        }
    }

    // console.log ( deck );

    deck = _.shuffle( deck )//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
    console.log ( deck );
    return deck;
}

crearDeck();

// Esta funcion me permite tomar una nueva carta

const pedirCarta = () => {

    if ( deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();//pop() El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array

    console.log(deck);
    console.log(carta);// carta debe ser de la baraja
    return carta;
}

//pedirCarta();  

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);/*Devuelve el subconjunto de una cadena basado en la posición inicial especificada. Si la entrada es una cadena de caracteres, la posición inicial y el número de caracteres extraídos se basan en caracteres, y no en bytes, de modo tal que los caracteres de varios bytes se cuentan como si fueran simples.*/
    //console.log( {valor});// 2 = 2, 10 = 10, 3 = 3
    //***********Forma reducida del codigo a continuacion**************
    /*if ( isNaN( valor)) { //isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false. Esta función es útil ya que el valor NaN no puede se probado correctamente con operadores de igualdad
        //console.log('No es un número');
         puntos = ( valor ==='A') ? 11 : 10;
        }else {
            //console.log('Es un número');
            puntos = valor * 1;
        }
    }*/
    //***********Forma reducida del codigo anterior**************
    return ( isNaN (valor) ) ?
            ( valor === 'A') ? 11 : 10
            : valor * 1;
}

const valor = valorCarta(pedirCarta());

console.log({valor})