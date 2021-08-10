//Funcao sem retorno  
                     //parametros de entrada da funcao
function imprimirSoma(a, b)  {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //pode passar so um, dai o segundo valor e undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //ele vai pegar os dois primeiros valores e ignorar o resto               
imprimirSoma() //ele vai imprimir um resultado NaN


//Funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

//ta chamando dentro de um console.log a funcao soma pq essa tem um retorno