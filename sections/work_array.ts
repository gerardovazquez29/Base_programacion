
export let employees = ['Gerardo','Maria','Jose','Yesica'];
let salaries = [2500,3500,2800,3000];

for (let i = 0; i <= employees.length -1; i++) {
    let employee = employees[i];
    let salary = salaries[i];
    console.log(`${employee} Tiene un salario de: ${salary}`);
}
