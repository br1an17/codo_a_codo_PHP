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

const cuentaRegresiva = () => {
  let resultado = "";
  for (let i = 59; i >= 0; i--) {
    resultado += i + "\n";
  }
  return resultado;
};

//Ejercicio 9

const deDosenDos = () => {
  let resultado = "";
  for (let i = 0; i <= 100; i += 2) {
    resultado += i + "\n";
  }
  return resultado;
};

//Ejercicio 10

const cuentaRegresivaDelCien = () => {
  let resultado = "";
  for (let i = 100; i >= 0; i--) {
    resultado += i + "\n";
  }
  return resultado;
};
//Ejercicio 11

const CuentaNumeros = () => {
  let numeros = [];
  while (true) {
    let entrada = prompt("Ingrese un número (o -1 para terminar):");
    if (entrada === "-1") {
      for (let i = 0; i < numeros.length; i++) {
        document.write(`Número: ${numeros[i]} - Posición: ${i}<br>`);
      }
      break;
    }

    let numero = parseFloat(entrada);
    numeros.push(numero);
  }
};
//Ejercicio 12

const promedioNuevo = () => {
  let numeros = [];
  while (true) {
    let entrada = prompt("Ingrese un número (o -1 para terminar):");
    if (entrada === "-1") {
      break;
    }
    let numero = parseFloat(entrada);
    numeros.push(numero);
  }
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  let promedioTotal = suma / numeros.length;
  return document.write(
    ` el promedio de los numeros ingresados es${promedioTotal}`
  );
};

//Ejercicio 13
const ingresarProductos = () => {
  let productos = [];
  for (let i = 0; i < 5; i++) {
    let nombre = prompt("ingrese su producto");
    let precio = parseFloat(prompt(`ingrese el precio de ${nombre}`));
    productos.push({ nombre, precio });
  }


  productos.forEach(producto => {
    document.write(`Nombre:${producto.nombre} Precio:${producto.precio}<br>`)
  })
};
//Ejercico 14
// const alturas =()=>{

// let personas = parseInt(prompt("ingrese cantidad de personas"))

// console.log(personas)
// }
// alturas()

