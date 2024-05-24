let envio = document.getElementById("envio");



envio.addEventListener("submit", (event) => {
    let mail = document.getElementById("text");
    let password = document.getElementById("password");

    if (mail.value === "" && password.value === "") {
        event.preventDefault();     
        return alert("completar ambos campos");
      } else if (mail.value === "" || password.value === "") {
          event.preventDefault();
        return alert("completar campo faltante");
      } else return alert("inicio de sesion exitosa");
});
