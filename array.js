/*1) Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".

2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.

3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.
*/

const alumnos = [
    {
      nombre: 'Juan',
      carrera: 'Biología',
      nota: 16,
    },
    {
      nombre: 'Jose',
      carrera: 'Enfermero',
      nota: 10
    },
      {
      nombre: 'Luis',
      carrera: 'Policía',
      nota: 07
    }
    ,
      {
      nombre: 'Maria',
      carrera: 'Secretariado',
      nota: 10
    },
    {
      nombre: 'Hugo',
      carrera: 'Enfermero',
      nota: 15
    },
      {
      nombre: 'Rosa',
      carrera: 'Enfermero',
      nota: 12
    }
    ,
      {
      nombre: 'Luisa',
      carrera: 'Biología',
      nota: 18
    }
  ]

//Ejercicio1
let alumnos_aprobados = 0;
let alumnos_desaprobados = 0;

let suma_Aprobados = 0;
let suma_Desaprobados = 0


function Ejercicio1() {
    alumnos.forEach(({ nombre , carrera,nota},indice) => {   
        if (indice % 2 == 0) {
            console.log(`Indice ${indice}__MI nombre es ${nombre} y mi carrera es ${carrera}`);
        }  
        if (nota > 13) {
            alumnos_aprobados++
            suma_Aprobados+=nota; 
        }
        if (nota < 13) {
            
            suma_Desaprobados+=nota;
            alumnos_desaprobados++
        }
        
      });

 promAprobados = (suma_Aprobados/alumnos_aprobados);
 promDesaprobados =(suma_Desaprobados/alumnos_desaprobados);
console.log('Alumnos Aprobados',alumnos_aprobados);
console.log('Alumnos Desaprobados',alumnos_desaprobados);
 console.log('Promedio de Desaprobados',promDesaprobados);
 console.log('Promedio Aprobadas',promAprobados);
}

Ejercicio1();


//Ejercicio 2
const mayor_13= []
function Alumnosaprobados() {
    alumnos.forEach(({nota}) => {     
        if (nota > 13) {
         mayor_13.push(nombre)
        }    
      })
      return mayor_13
    
} 
//console.log(Alumnosaprobados());

//Ejercicio 3
const newArreglo=[]
function Arreglomodificado() {
    alumnos.forEach(({ nota}) => {     
        if (nota ) {
         newArreglo.push(nota*3/2)
        }    
      })
      return newArreglo
}

//console.log(Arreglomodificado());

