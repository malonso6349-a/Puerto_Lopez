// Obtener el formulario
const formulario = document.getElementById("formulario");

// Escuchar cuando se envia el formulario
formulario.addEventListener("submit", function(event) {

    // Evitar que la pagina se recargue
    event.preventDefault();

    // Obtener los datos ingresados
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let edad = document.getElementById("edad").value;
    let carrera = document.getElementById("carrera").value.trim();

    // Comprobar que los campos no esten vacios
    if (nombre === "" || correo === "" || edad === "" || carrera === "") {
        alert("Complete todos los campos.");
        return;
    }

    // Comprobar que la edad sea valida
    if (edad <= 0 || edad > 100) {
        alert("Ingrese una edad válida.");
        return;
    }

    // Crear un objeto con los datos
    let visitante = {
        nombre: nombre,
        correo: correo,
        edad: edad,
        carrera: carrera
    };

    // Obtener los registros guardados
    let registros = JSON.parse(localStorage.getItem("visitantes")) || [];

    // Agregar el nuevo visitante
    registros.push(visitante);

    // Guardar los registros en LocalStorage
    localStorage.setItem("visitantes", JSON.stringify(registros));

    // Mostrar mensaje en la pagina
    document.getElementById("mensaje").textContent =
        "¡Registro realizado correctamente! Bienvenido/a " + nombre;

    // Limpiar los campos del formulario
    formulario.reset();

});