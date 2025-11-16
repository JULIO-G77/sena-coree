// Solución con arrays simples
let personas = [];
let opcion = 0;

do {
    opcion = parseInt(prompt(
        "SISTEMA DE ENCUESTAS MUSICALES\n" +
        "1. Agregar persona\n" +
        "2. Mostrar persona por posición\n" +
        "3. Salir\n" +
        "Seleccione opción:"
    ));
    
    if (opcion === 1) {
        // Agregar nueva persona
        let persona = [];
        
        // Datos personales
        persona[0] = prompt("Nombre:");
        persona[1] = prompt("Número de identificación:");
        persona[2] = prompt("Fecha de nacimiento:");
        persona[3] = prompt("Correo electrónico:");
        persona[4] = prompt("Ciudad de residencia:");
        persona[5] = prompt("Ciudad de origen:");
        
        // Canciones favoritas (hasta 3)
        let canciones = [];
        for (let i = 0; i < 3; i++) {
            let artista = prompt("Artista de canción " + (i + 1) + ":");
            let titulo = prompt("Título de canción " + (i + 1) + ":");
            canciones[i] = [artista, titulo];
        }
        persona[6] = canciones;
        
        personas[personas.length] = persona;
        alert("Persona agregada exitosamente. Total: " + personas.length);
        
    } else if (opcion === 2) {
        // Mostrar persona por posición
        if (personas.length === 0) {
            alert("No hay personas registradas");
        } else {
            let posicion = parseInt(prompt("Ingrese posición (0 a " + (personas.length - 1) + "):"));
            
            if (posicion >= 0 && posicion < personas.length) {
                let persona = personas[posicion];
                let mensaje = "INFORMACIÓN PERSONAL\n" +
                             "Nombre: " + persona[0] + "\n" +
                             "Identificación: " + persona[1] + "\n" +
                             "Fecha nacimiento: " + persona[2] + "\n" +
                             "Email: " + persona[3] + "\n" +
                             "Residencia: " + persona[4] + "\n" +
                             "Origen: " + persona[5] + "\n\n" +
                             "CANCIONES FAVORITAS:\n";
                
                let canciones = persona[6];
                for (let i = 0; i < canciones.length; i++) {
                    mensaje += (i + 1) + ". " + canciones[i][0] + " - " + canciones[i][1] + "\n";
                }
                
                alert(mensaje);
            } else {
                alert("Posición no válida");
            }
        }
    }
    
} while (opcion !== 3);

alert("¡Hasta pronto!");