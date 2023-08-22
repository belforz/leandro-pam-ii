function sqrt(numero1,numero2)
{
    return Math.sqrt(numero1 * numero2)
}

const obj = {
    nome: "João",
    signo: "Escorpião",
    soma: 5*4,
    numero1: 7,
    numero2 :5,
    funcao: sqrt
}

console.log(obj.nome,obj.soma,obj.funcao(obj.numero1,obj.numero2))
console.log(typeof obj)

let pessoa = ["João", 35, "Desenvolvedor"]

console.log(pessoa[0],pessoa[2])
console.log(pessoa)
console.log(typeof pessoa)

let soma = [5,6,7,10,56,49,function sqr(numero1,numero2) {return Math.sqrt(numero1 * numero2)
}]

console.log(soma[5] / soma[0])


// Javascript entende a maioria das coisas como objeto