var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)

//como e no global, uma vai sobrescrever a outra e ai vai tipo com o mesmo nome
//fuja do escopo global
//pode declarar o var 2 vezes que nao vai dar problema

//so existe escopo de var dentro da funcao