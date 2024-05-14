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

  productos.forEach((producto) => {
    document.write(`Nombre:${producto.nombre} Precio:${producto.precio}<br>`);
  });
};
//Ejercicio 14
const alturas = () => {
  let personas = [];
  let suma = 0;
  let cantidad = parseInt(prompt("ingrese cantidad de personas"));

  for (let i = 0; i < cantidad; i++) {
    let altura = parseFloat(prompt("ingrese alturas"));
    personas.push(altura);
  }

  for (let i = 0; i < cantidad; i++) {
    suma = suma + personas[i];
  }
  document.write(suma / cantidad);
};
//Ejercicio 15

const bingo = () => {
  let num = parseInt(prompt("ingrese un numero del 0 al 25"));

  switch (num) {
    case 0:
      resultado = "El agua";
      break;
    case 1:
      resultado = "El gallo";
      break;
    case 2:
      resultado = "Los pies";
      break;
    case 3:
      resultado = "La luna";
      break;
    case 4:
      resultado = "La muerte";
      break;
    case 5:
      resultado = "El niño";
      break;
    case 6:
      resultado = "La lombriz";
      break;
    case 7:
      resultado = "La mujer";
      break;
    case 8:
      resultado = "El mundo";
      break;
    case 9:
      resultado = "El payaso";
      break;
    case 10:
      resultado = "La cama";
      break;
    case 11:
      resultado = "Los dulces";
      break;
    case 12:
      resultado = "Los ratones";
      break;
    case 13:
      resultado = "El diablo";
      break;
    case 14:
      resultado = "El borracho";
      break;
    case 15:
      resultado = "La calavera";
      break;
    case 16:
      resultado = "Los garbanzos";
      break;
    case 17:
      resultado = "El sol";
      break;
    case 18:
      resultado = "El perico";
      break;
    case 19:
      resultado = "El venado";
      break;
    case 20:
      resultado = "El soldado";
      break;
    case 21:
      resultado = "El gorrito";
      break;
    case 22:
      resultado = "Los huevos";
      break;
    case 23:
      resultado = "La jaula";
      break;
    case 24:
      resultado = "El borracho dormido";
      break;
    case 25:
      resultado = "El sombrero";
      break;
    default:
      resultado = "ingrese un numero del 0 al 25";
  }

  document.write(
    (resultado === "ingrese un numero del 0 al 25"
      ? resultado
      : `el significado del numero ${num} es : ${resultado}`)
  );
};

//Ejercicio 16
