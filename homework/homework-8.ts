
/* 
8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
nombre que tenga más letras del arreglo, y debe de trabajar así:
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray( heroes );
console.log( hero ); // Profesor Charles Xavier
Tip:
let hero = 'Strider';
hero.length; // 7 */


export function largestNameOfArray(nameArray:string[]) {
    
    let largestName = '';

    for (let i = 0; i < nameArray.length; i++) {
        
        let name = nameArray[i];

        if (name.length > largestName.length ) {
            largestName = name;
        }
    }
    return largestName;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto',  'Profesor Charles Xavier' ];
let hero = largestNameOfArray( heroes );
console.log( hero );
