// Solución sin funciones avanzadas
let opcion = parseInt(prompt(
    "CALCULAR ÁREA O PERÍMETRO\n" +
    "1. Triángulo\n" +
    "2. Rectángulo\n" +
    "3. Cuadrado\n" +
    "4. Círculo\n" +
    "Seleccione figura:"
));

let resultado = 0;

if (opcion === 1) { // Triángulo
    let base = parseFloat(prompt("Ingrese base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese altura del triángulo:"));
    let lado1 = parseFloat(prompt("Ingrese lado 1:"));
    let lado2 = parseFloat(prompt("Ingrese lado 2:"));
    let lado3 = parseFloat(prompt("Ingrese lado 3:"));
    
    let area = (base * altura) / 2;
    let perimetro = lado1 + lado2 + lado3;
    
    alert("Área: " + area + "\nPerímetro: " + perimetro);
    
} else if (opcion === 2) { // Rectángulo
    let base = parseFloat(prompt("Ingrese base del rectángulo:"));
    let altura = parseFloat(prompt("Ingrese altura del rectángulo:"));
    
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    
    alert("Área: " + area + "\nPerímetro: " + perimetro);
    
} else if (opcion === 3) { // Cuadrado
    let lado = parseFloat(prompt("Ingrese lado del cuadrado:"));
    
    let area = lado * lado;
    let perimetro = 4 * lado;
    
    alert("Área: " + area + "\nPerímetro: " + perimetro);
    
} else if (opcion === 4) { // Círculo
    let radio = parseFloat(prompt("Ingrese radio del círculo:"));
    let pi = 3.1416;
    
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    
    alert("Área: " + area + "\nPerímetro: " + perimetro);
    
} else {
    alert("Opción no válida");
}