// Solución sin métodos avanzados
let vector1 = [];
let vector2 = [];
let resultado = [];

// Ingreso del primer vector (5 elementos ordenados)
alert("Ingrese el PRIMER vector (5 números ordenados ascendentemente)");
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Número " + (i + 1) + " para vector 1:"));
    
    // Validar orden ascendente
    if (i > 0 && numero < vector1[i - 1]) {
        alert("Error: Los números deben ingresarse en orden ascendente");
        i--; // Repetir esta posición
    } else {
        vector1[i] = numero;
    }
}

// Ingreso del segundo vector (5 elementos ordenados)
alert("Ingrese el SEGUNDO vector (5 números ordenados ascendentemente)");
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Número " + (i + 1) + " para vector 2:"));
    
    // Validar orden ascendente
    if (i > 0 && numero < vector2[i - 1]) {
        alert("Error: Los números deben ingresarse en orden ascendente");
        i--; // Repetir esta posición
    } else {
        vector2[i] = numero;
    }
}

// Mezclar los dos vectores ordenados (algoritmo manual)
let i = 0, j = 0, k = 0;

while (i < 5 && j < 5) {
    if (vector1[i] <= vector2[j]) {
        resultado[k] = vector1[i];
        i++;
    } else {
        resultado[k] = vector2[j];
        j++;
    }
    k++;
}

// Agregar elementos restantes del primer vector
while (i < 5) {
    resultado[k] = vector1[i];
    i++;
    k++;
}

// Agregar elementos restantes del segundo vector
while (j < 5) {
    resultado[k] = vector2[j];
    j++;
    k++;
}

// Mostrar resultado
let mensaje = "Vector mezclado ordenado:\n";
for (let m = 0; m < resultado.length; m++) {
    mensaje += resultado[m] + " ";
}
alert(mensaje);