import Cl_estudiante from "./Cl_estudiante.js";
import Cl_becado from "./Cl_becado.js";

let est1 = new Cl_estudiante("Mary", 132, 8);
let est2 = new Cl_estudiante("Alirio", 315, 35);

let beca1 = new Cl_becado("Mary", 132, 8);
let beca2 = new Cl_becado("Alirio", 315, 35);

beca1.calcBeca();
beca2.calcBeca();

let salida = document.getElementById("salida");

salida.innerHTML = `
    Nombre del estudiante: ${est1.nombre}<br>
    Acumulado en notas: ${est1.notAc}<br>
    Cantidad de materias: ${est1.mat}<br>
    Nota promedio: ${beca1.calcProm().toFixed(2)}<br>
    ${beca1.calcBeca()}
    <br><br>
    Nombre del estudiante: ${est2.nombre}<br>
    Acumulado en notas: ${est2.notAc}<br>
    Cantidad de materias: ${est2.mat}<br>
    Nota promedio: ${beca2.calcProm().toFixed(2)}<br>
    ${beca2.calcBeca()}
`;
