console.log("Script ejecutado");

let formulario = document.getElementById("for");

console.log(formulario)



const validarFormulario = () => {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let nacimiento = document.getElementById("nacimiento");
    let contra = document.getElementById("contra");
    let contraseña = document.getElementById("contraseña");

    let isValid = true;

    if (email.value === "") {
       email.placeholder = "Completar campo";
       email.classList.add('error-placeholder');
       isValid = false;
    } else {
       email.placeholder = "E-mail";
       email.classList.remove('error-placeholder');
    }

    if (nombre.value === "") {
       nombre.placeholder = "Completar campo";
       nombre.classList.add('error-placeholder');
       isValid = false;
    } else {
       nombre.placeholder = "Contraseña";
       nombre.classList.remove('error-placeholder');
    }

    if (isValid) {
       alert("Inicio de sesión exitoso");
    }
 };

 formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
 });