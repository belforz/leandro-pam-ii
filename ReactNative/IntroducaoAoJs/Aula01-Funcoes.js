let n1 = 5;
let n2 = 8;
var n3 ="";
console.log(n1+n2);
console.log(n1-n2);
console.log(n1/n2);
console.log(n1*n2);
console.log(n1**n2); // exponenciacao
console.log(Math.sqrt(n1)); // raiz quadrada
console.warn("Olá funções")

function soma(numero1, numero2) {
    return numero1 + numero2;
    
}
function sub(numero1,numero2)
{
    return numero1 - numero2
}
function div(numero1,numero2)
{
    return numero1 / numero2
}
function multi(numero1,numero2)
{
    return numero1 * numero2
}
function sqrt(numero1,numero2)
{
    return Math.sqrt(numero1 * numero2)
}
function louco(numero1,numero2,numero3)
{
    return numero1 +=1
}
function concat(numero1,numero2,numero3)
{
    return (numero1 =+1)/ 15}

 // outra forma de usar o console 
const divisao = (v1 , v2) => {
   const resultado = v1 / v2
    console.log(resultado)
}

 // outra forma de usar o return
 
const divisaodiff =(v1,v2) => {
    let msg =""
   if (v1>v2) { 
   let resultado = v1 / v2
    msg = resultado
    return msg }
    msg = "Insira um valor menor para v2"
    return msg
}

const desafio = (v1,v2,v3) => {
    let msg = ""
    v3 = v2 + v1
    if(v1<v2) {
        msg ="Sua conta para aqui"
        return msg
    }
    if(v1>v2) {
        return v3
    }
    msg = "Nenhum valor"
    return msg
}

 
console.log(soma(4,19))
console.log(louco(4))
console.log(concat(6))
divisao(6,7)
console.log(divisaodiff(15,20))
console.log(divisaodiff(20,15))
console.log(desafio(3,2))
console.log(desafio(2,3))
console.log(desafio(0,0))



// funcao é um trecho de código já pronto para ser usado, pode conter parâmetros