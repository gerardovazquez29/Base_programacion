
export let person = {
    name:'Gera',
    age: 32,
    hobbies: ['soccer','boleybol'],
    toString() {
        let objetPerson = this.name + ' ' + this.age;
        console.log(objetPerson);
        
    }
}
/* console.log(person); */
/* person.toString(); */

let car = {
    model: '23',
    brad: 'nisan',
    anio: 2022,
    tires: 5
};

let smartTv = {
    model: 'smart',
    brad: 'LG',
    pulgadas: 32
}

let youtubeVideo = {
    likes: 2500,
    disLikes: 58,
    pitcheles: 1500
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);

