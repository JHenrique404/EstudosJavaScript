//criando um array que foram desestruturados de um array
function rand([min = 0, max = 1000]) {
                //se o minimo for maior que o maximo inverta as duas variaveis ---> [min, max] = [max, min]    serve para inverter, oq e min vira max e oque e max vira min
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max- min) + min
    return Math.floor(valor) //floor arredonda o valor para baixo
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log([, 10]) //pega como valor padrao do min o 0
console.log(rand([])) //padrao