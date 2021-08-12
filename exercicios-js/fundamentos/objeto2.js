console.log(typeof Object) //se trata de uma funcao
console.log(typeof new Object()) //instanciando uma funcao, criando um objeto apartir de uma funcao


//Criando uma funcao vazia
const cliente = function () { 
}
console.log(typeof cliente)
console.log(typeof new cliente())


//Criando uma classe
class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto()) //vai retornar um objeto apartir da instancia da funcao

//a forma de criar objeto em JS e apartir de uma funcao 