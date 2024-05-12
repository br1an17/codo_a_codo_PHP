//Ejercicio 1.
const sumaVariables = () => {
  let variable_a = 33;
  let variable_b = 77;
  let variable_resultado = variable_a + variable_b;

  return variable_resultado;
};
//Ejercicio 2.

const promedio = () => {
  let a = 2;
  let b = 4;
  let c = 6;
  let d = 8;
  let e = 10;
  let promedio = (a + b + c + d + e) / 5;

  console.log(promedio);
};
//Ejercicio 3.

const comparar = () => {
  let nota1 = 4;
  let nota2 = 5;
  return nota1 > nota2;
};
//Ejercicio 4.

const descuento = (valor) => {
  const precio = valor > 100 ? valor - valor * 0.15 : valor;

  return precio;
};
//Ejercicio 5.

const cine = (personas) => {
  const valor = personas >= 8 ? personas * 0.5 : personas * 1.5;

  return valor;
};
//Ejercicio 6
const compararDos = () => {
  let nota1 = 10;
  let nota2 = 9;

  let notaMayor = nota1 > nota2 ? "Nota1 es mayor" : "Nota2 es mayor";

  return notaMayor;
};
//Ejercicio 7

const valoracion = (puntos) => {
  switch (puntos) {
    case 0:
      return "mala";
    case 1:
      return "regular";
    case 2:
      return "buena";
    case 3:
      return "muy buena";
    case 4:
      return "exelente";

    default:
      return "no ingreso un valor correcto";
  }
};
//Ejercicio 8

function cuentaRegresiva() {
  let resultado = "";
  for (let i = 59; i >= 0; i--) {
    resultado += i + "\n";
  }
  return resultado;
}

//Ejercicio 9

function deDosenDos() {
    let resultado = "";
    for (let i = 0; i <= 100; i +=2) {
      resultado += i + "\n";
    }
    return resultado;
  }
console.log(deDosenDos())