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

} else {
    total.textContent = suma;
    error.innerHTML = "¡Llevas demasiados Stickers! maximo 10";
    }
});