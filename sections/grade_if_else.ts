/* 
Realizar un programa que muestre la nota del alumno como: A, B, C, D, F,
donde:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

export let grade= 50;
let gradeLetter;

if (grade >= 90) {
    gradeLetter = 'A';
} else if (grade >= 80) {
    gradeLetter = 'B';
} else if (grade >= 70) {
    gradeLetter = 'C';
} else if (grade >= 60) {
    gradeLetter = 'D';
} else {
    gradeLetter = 'F';
}

console.log(`La nota del Alumno es:${gradeLetter}`);


/**  let grade = 60;

    if (grade >= 90) {
        console.log('La nota del Alumno es: A');        
    } else if (grade >= 80) {
        console.log('La nota del Alumno es: B');
    } else if (grade >= 70) {
        console.log('La nota del Alumno es: C');
    } else if (grade >= 60) {
        console.log('La nota del Alumno es: D');
    } else {
        console.log('La nota del Alumno es: F');
    }
 */
