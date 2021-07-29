const prod1 = {}
prod1.nome = 'Celular'  //basicamente tu pode criar os atributos dentro de um objeto sem precisar expecificar oque sao e como funcionam
                        //basta tu criar e colocar o valor na frente
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40  //pode ser criado dessa forma tbm......n e o certo usar com espaco as notacoes

console.log(prod1)


const prod2 = {
    nome: 'Joao',
    idade: 18,

    obj: {
        blabla: 'Texto',
        obj: {
            blabla: 'Texto2'
        }
    }
}                   //Essa e a forma mais correta de se criar objetos, mas eles sao separados por " , " 
                    //o obj e unico dentro de prod2

console.log(prod2)