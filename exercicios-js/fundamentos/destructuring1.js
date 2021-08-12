//Recurso do ES2015

const pessoa = { //obj
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'abc',
        numero: 1000
    }
}


const {nome, idade} = pessoa        //tire de dentro do obj o atributo nome,idade do objeto pessoa
console.log(nome, idade)


const {nome: n, idade: i} = pessoa      //extraia nome,idade criando variaveis de nome = n e idade = i do obj pessoa
console.log(n, i)


const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)


const {endereco:{ logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)