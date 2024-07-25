

export class Car {

    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    createdAt: number;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 123456789;
    }

    turnOn() {

        if (this.isRunning) {
            console.log('El carro esta descompuesto');
            return;
        } 

        if (this.fuelTank <= 0) {
            console.log('El carro no tiene gasolina');
            return;
        }

        this.isRunning = true;
        console.log('El carro esta encendido');
    }

    /* 
    gas: number
    gas > 100, this.fuelTank = 100
    gas tiene positivo
    si ya esta lleno, no sobre llenar
    si el tanque es 50 y añado 20, el valor del fuelTank seria 70
    si fuelTank es 90, y añado 50, fuelTank deberia de ser 100
    */
   fillTank( gas: number) {
        if (gas <= 0) {
            console.log('La gas tiene que ser positivo');
            return;
        }

        let newFuelTank = this.fuelTank + gas;
        if (newFuelTank >= 100) {
            newFuelTank = 100;
        }
            this.fuelTank = newFuelTank;
   }
}

let myMazda = new Car('Masda', 'nisan');

console.log(myMazda);
myMazda.fillTank(50);
myMazda.fillTank(120);
myMazda.turnOn();
console.log(myMazda);
