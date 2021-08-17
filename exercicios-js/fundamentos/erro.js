function tratarErroELancar(erro) {
    //throw new Error('Ocorreu um Erro!')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message, //a mensagem do proprio erro
        date: new Date //gera a data de quando o erro aconteceu
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }finally{ //sempre vai ser exacutado mesmo q ocorra erro ou nao
        console.log('final')
    }
}

const obj = {
    nome: 'Roberto'
}

imprimirNomeGritado(obj)