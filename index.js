//Ejercicio 1.
const sumaVariables = ()=>{

    
let variable_a=33;
let variable_b=77;
let variable_resultado= variable_a + variable_b
  
return(variable_resultado)

}
//Ejercicio 2.


const promedio = ()=>{

let a =2;
let b =4;
let c =6;
let d =8;
let e =10;
let promedio = (a + b + c + d + e) / 5;

console.log(promedio) 

}
//Ejercicio 3.

const comparar =()=>{
let nota1= 4;
let nota2=5;
return nota1 > nota2;

};
//Ejercicio 4.

const descuento = (valor)=>{

const precio = valor > 100 ? (valor - (valor * 0.15)) : valor

return precio

}