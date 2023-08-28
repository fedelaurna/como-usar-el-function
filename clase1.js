
// 1) crear una funcion que multiplique 
function multiplicar( a , b)
{
let multiplicar = a * b
return "el resultado es " + multiplicar
}
multiplicar(4 , 5)
alert(multiplicar (10 , 7))

//division
function division(a , b)
{
    let resultado = a / b
    return "el resultadode la division es " + resultado
}
alert(division (20 , 10))

//suma
function suma ( a , b )
{
    let resultado = a + b
    return "el resultado de la suma es "+ resultado
}
alert(suma (20 , 40))
//resta
function resta( a , b)
{
    let resta= a - b
    return "el resultado de la resta es "+ resta
}
alert(resta( 20 , 10))

// esta expresion x 2+5

function sumaYPotencia(a,b)
{
let resultado = a * a + b 
return resultado
}

alert(sumaYPotencia(5,10))

//2) una funcion que salude a una persona con nombre y apellido
function saludo()
{
    let saludo =prompt("ingrese su nombre y apellido")  
    return "bienvenid@ " + saludo
}

alert(saludo())


