import { base, limit } from '../sections/homwork';


export function printMultiplicationTable(base:number, limit:number =10) {

    if (limit <= 0) {
        throw new Error('El limite debe de ser mayor a cero');
    }
    /* if (limit<= 0) {
        limit = 10;
    } */
    for (let number = 1; number <= limit; number++) {
        console.log(base,'x', number,'=', base * number);
    };
};