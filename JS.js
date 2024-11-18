// Ejercicio 1

const porche = document.querySelector("#img1")

porche.addEventListener("click",()=> {
    if (document.getElementById("img1").classList.contains("borderojo")){
        document.getElementById("img1").classList.remove("borderojo");
    } else {
        document.getElementById("img1").classList.add("borderojo");
    }
});

// Ejercicio 2

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
const verificar = document.querySelector("#verificar");
const total = document.querySelector("#cantidad");
const error = document.querySelector("#error");


verificar.addEventListener("click", () => {
 
  let suma = Number(input1.value) + Number(input2.value) + Number(input3.value);

if (suma < 10) {
    total.textContent = suma;
    error.innerHTML = "vas bien, puedes elejir hasta 10 sticker.";
  } 
else if (suma == 10) {
    total.textContent = suma;
    error.innerHTML = "¡Excelente! ya elijiste 10 Stickers";
} 
else  {
    total.textContent = suma;
    error.innerHTML = "¡¡¡Llevas demasiados Stickers!!! maximo 10";
    }
});

//Ejercicio 3

let num1 = document.querySelector("#numero1");
let num2 = document.querySelector("#numero2");
let num3 = document.querySelector("#numero3");
const boton = document.querySelector("#contraseña");
let respuesta = document.querySelector("#respuesta");

boton.addEventListener("click", () => {

  let clave1 = num1.value;
  let clave2 = num2.value;
  let clave3 = num3.value;
  let claveOk = clave1 + clave2 + clave3;

  if (claveOk === "911") {
    respuesta.textContent = "¡Clave 1 Correcta!";
  } 
  else if (claveOk === "714") {
    respuesta.textContent = "¡Clave 2 Correcta!";
  } 
  else {
    respuesta.textContent = "¡¡ CLAVE INCORRECTA !!";
  }
});