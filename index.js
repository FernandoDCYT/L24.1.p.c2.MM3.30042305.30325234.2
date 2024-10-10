import Cl_becado from "./Cl_becado.js"

let beca1 = new Cl_becado("Mary", 132, 8);
let beca2 = new Cl_becado("Alirio", 315, 35);

beca1.calcBeca();
beca2.calcBeca();

let salida = document.getElementById("salida");

salida.innerHTML = `
    Nombre del estudiante: ${beca1.nombre}<br>
    Acumulado en notas: ${beca1.notAc}<br>
    Cantidad de materias: ${beca1.mat}<br>
    Nota promedio: ${beca1.calcProm().toFixed(2)}<br>
    ${beca1.calcBeca()}
    <br><br>
    Nombre del estudiante: ${beca2.nombre}<br>
    Acumulado en notas: ${beca2.notAc}<br>
    Cantidad de materias: ${beca2.mat}<br>
    Nota promedio: ${beca2.calcProm().toFixed(2)}<br>
    ${beca2.calcBeca()}
`;
