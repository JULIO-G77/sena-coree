// Solución con validaciones básicas
let edades = [];
let i = 0;

// Ingreso de 10 edades con validación
while (i < 10) {
    let edad = parseInt(prompt("Ingrese edad de la persona " + (i + 1) + ":"));
    
    if (edad >= 1 && edad <= 120) {
        edades[i] = edad;
        i++;
    } else {
        alert("Error: La edad debe estar entre 1 y 120 años");
    }
}

// Calcular estadísticas
let menores = 0;
let mayores = 0;
let adultosMayores = 0;
let suma = 0;
let masBaja = edades[0];
let masAlta = edades[0];

for (let j = 0; j < edades.length; j++) {
    suma = suma + edades[j];
    
    // Contar por categorías
    if (edades[j] < 18) {
        menores++;
    } else {
        mayores++;
    }
    
    if (edades[j] >= 60) {
        adultosMayores++;
    }
    
    // Encontrar edad más baja
    if (edades[j] < masBaja) {
        masBaja = edades[j];
    }
    
    // Encontrar edad más alta
    if (edades[j] > masAlta) {
        masAlta = edades[j];
    }
}

let promedio = suma / edades.length;

// Mostrar resultados
alert(
    "ESTADÍSTICAS DE EDADES\n" +
    "Menores de edad: " + menores + "\n" +
    "Mayores de edad: " + mayores + "\n" +
    "Adultos mayores: " + adultosMayores + "\n" +
    "Edad más baja: " + masBaja + "\n" +
    "Edad más alta: " + masAlta + "\n" +
    "Promedio: " + promedio.toFixed(2)
);