/* 
7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
trabajar así:
let maxValue = max( 5, 2, 6);
console.log( maxValue ); // 6  */


function max(a:number, b: number, c: number) {
    if (a > b ) {
        if (a > c) {
            return a;
        } else  {
            return c;
        }  
    }
    if (b > c ) {
        return b;
    } 
}
export let maxValue = max( 3, 9, 6);

console.log( maxValue );
