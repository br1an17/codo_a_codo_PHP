console.log("Script ejecutado");

let formulario = document.getElementById("for");

console.log(formulario)



const validarFormulario = () => {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let nacimiento = document.getElementById("nacimiento");
    let contraseña = document.getElementById("contraseña");
    let contra = document.getElementById("contra");

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
    if (apellido.value === "") {
       apellido.placeholder = "Completar campo";
       apellido.classList.add('error-placeholder');
       isValid = false;
    } else {
       apellido.placeholder = "Contraseña";
       apellido.classList.remove('error-placeholder');
    }
    if (contraseña.value === "") {
       contraseña.placeholder = "Completar campo";
       contraseña.classList.add('error-placeholder');
       isValid = false;
    } else {
       contraseña.placeholder = "Contraseña";
       contraseña.classList.remove('error-placeholder');
    }
    if (contra.value === "") {
       contra.placeholder = "Completar campo";
       contra.classList.add('error-placeholder');
       isValid = false;
    } else {
       contra.placeholder = "Contraseña";
       contra.classList.remove('error-placeholder');
    }
    
    if (isValid) {
       alert("Inicio de sesión exitoso");
    }
 };

 formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
 });