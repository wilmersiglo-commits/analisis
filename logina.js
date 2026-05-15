let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let boton = document.getElementById("boton")
let resultado

boton.addEventListener("click",suma)

function suma (){

    let n1=Number(num1.value)
    let n2=Number(num2.value)

    resultado = n1+n2

    alert("el resultado es: " + resultado)

}

