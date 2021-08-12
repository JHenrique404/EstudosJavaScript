//par nome/valor
const saudacao = 'valor' //contexto lexico 1
                        //Lexico: local fisico na qual sua variavel foi definida no codigo

//se vc tentar acessar uma variavel que nao esta contida na funcao ele vai procurando nos contextos

function exec() {
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao
}
//foi definida a constante dentro da funcao

//os nomes da linha 2 e linha 8 sao os mesmos, mas como estao em contextos diferente nao geram conflitos
//contexto: e um bloco de codigo basicamente
//no local que a variavel foi definida ela tem um espaco de abrangencia


//OBJETOS SAO GRUPOS ALINHADOS DE PARES NOME/VALOR
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
