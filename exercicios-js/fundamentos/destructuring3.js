//vc vai passar um obj pra funcao, e ao inves de vc acessar obj.min e obj.max vc acessa o atributo min e max, sem precisa usar notacao ponto
function randomico({min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min //Math.ramdom()  randomiza os numeros
    return Math.floor(valor) //Math.floor   arredonda o valor para baixo 4.9 vira 4
}

//aqui vc criou um atributo e passou os min e max do destructing ali em cima
const obj = {max: 20, min: 0}
console.log(randomico(obj)) //gera numeros segundo os valores do atributo acima
console.log(randomico({min: 955}))//gera numeros entre 955 e 1000
console.log(randomico({})) //gera numeros de 0 a 1000