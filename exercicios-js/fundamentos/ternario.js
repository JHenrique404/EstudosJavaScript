const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
                                      //retorna um dos dois valores dependendo se true ou false

console.log(resultado(7.1))
console.log(resultado(6.7))


/* Operador ternario:

     nota >= 7 ? 
     'Aprovado' 
     : 
     'Reprovado'


    basicamente assim
    se nota for maior ou igual a 7
    se sim ele retorna APROVADO
    se nao ele retorna REPROVADO
*/