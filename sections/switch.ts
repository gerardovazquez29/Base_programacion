
export let weekDay = 7; 

if (weekDay <= 0 || weekDay > 7) {
    throw new Error('Dia de la semana no permotido');
}

switch (weekDay) {
    case 1:
        console.log('Es Lunes');
        break;

    case 2:
        console.log('Es Martes');
        break;

    case 3:
        console.log('Es Miercoles');
        break;

    case 4:
        console.log('Es Jueves');
        break;

    case 5:
        console.log('Es Viernes');
        break;
                         
    default:
        console.log('es fin de Semana');
        break;
}