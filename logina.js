let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let boton = document.getElementById("boton")
let resultado
let nombre=document.getElementById("nombre")
let correo=document.getElementById("correo")
let boton2=document.getElementById("boton2")

boton.addEventListener("click",suma)
boton2.addEventListener("click",mostrar)

function suma (){

    let n1=Number(num1.value)
    let n2=Number(num2.value)

    resultado = n1+n2

    alert("el resultado es: " + resultado)

}

function mostrar (){

    let n=nombre.value
    let c=correo.value

    if (n==' ' && c==' '){
        alert("llene todos los campos")

    }else{
        alert("sus datos se agregaron correctamente")
    }



}

