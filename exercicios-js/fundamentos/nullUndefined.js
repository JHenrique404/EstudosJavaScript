let  valor //n inicializada
console.log(valor)  //valor padrao e undefined

valor = null //e quando n tem nenhum valor primitivo(boolean, number, real...) e nenhum endereco de memoria
             //ausencia de valor

console.log(valor)
//console.log(valor.toString())   //voce nao pode acessar o valor de uma variavel null

const produto = {}
console.log(produto.preco)
            //o produto foi definido em cima, mas o preco ainda nao...por isso o undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined, deixe pra linguagem definir
console.log(!!produto.preco)
//delete produto.preco  //essa seria a forma certa de tirar algo de um objeto
console.log(produto.preco)

produto.preco = null //essa e a maneira certa
console.log(!!produto.preco)
console.log(produto)

