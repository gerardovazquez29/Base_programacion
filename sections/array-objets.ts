

interface Person {
    name: string;
    age: number;
    isActive: boolean;
}


export let Gerardo = {
    name: 'Gerardo',
    age: 42,
    isActive:true
}

let Norma = {
    name: 'Norma',
    age: 38,
}

let Jose = {
    name: 'Jose',
    age: 40,
}

let people = [ Gerardo, Norma, Jose];

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person.name + ' ' + person.age);
    
    
}

/* console.log(people); */
