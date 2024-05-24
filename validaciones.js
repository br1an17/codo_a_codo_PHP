let envio = document.getElementById("envio");




const validarInicio = () => {
    let mail = document.getElementById("text");
    let password = document.getElementById("password");

    let isValid = true;

    if (mail.value === "") {
       mail.placeholder = "Completar campo";
       mail.classList.add('error-placeholder');
       isValid = false;
    } else {
       mail.placeholder = "E-mail";
       mail.classList.remove('error-placeholder');
    }

    if (password.value === "") {
       password.placeholder = "Completar campo";
       password.classList.add('error-placeholder');
       isValid = false;
    } else {
       password.placeholder = "Contraseña";
       password.classList.remove('error-placeholder');
    }

    if (isValid) {
       alert("Inicio de sesión exitoso");
    }
 };

 envio.addEventListener('submit', (event) => {
    event.preventDefault();
    validarInicio();
 });