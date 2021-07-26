//voce nao pode quebrar a linha no meio da string, em 2
//interpolar = interpreta a variavel e a converte dentro do texto

const nome = "Joao"
const constante = "Nome: " + nome;
const template = `
    Ola
    ${nome}!
    `;

console.log(constante, template)

//expressoes...
//oque for colocado entre {} ele vai tentar interpolar/interpretar
//dentro de uma expressao voce pode chamar uma funcao para algum trabalho
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei....${up('cuidado')}!`)   //vai pegar o texto 'cuidado' passa ele na funcao UP e transforma-lo em UpperCase == 'CUIDADO'
//pega as letras e converte pra maiusculo
//funcao que foi atribuida a variavel up
