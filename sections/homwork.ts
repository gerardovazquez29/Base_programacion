
export let base = 10;
export let limit = 50;

for (let number = 1; number <= limit; number++) {
    console.log(base,'x', number,'=', base * number);
};

console.log('____________________________________________');

let number = 1;
while (number <= limit) {
    console.log(base,'x', number,'=', base * number);
    number++;
}


console.log('___________________________________________');


let number2 = 1;
do {
    console.log(base,'x', number2,'=', base * number2);
    number2++;
} while (number2 <= limit);
