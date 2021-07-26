let isAtivo = false; 
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

//declarou o isAtivo na linha 1 e trocou o valor na linha 4

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)
// a negacao e ! e tipo not uma negacao logica
// se negar 2 vezes ele nega a primeira e o valor volta pro original tipo   !! = true   ! = false
// tipo forca uma conversao pra true ou false dependendo da situacao


console.log(!true) //O nao true q e false
console.log(!false) //O nao false q e true

console.log('os verdadeiros....')
console.log(!!3) //todos os numeros sao verdadeiros come excessao de 0
console.log(!!-1)
console.log(!!' ') //console.log com algum espaco vazio tbm e verdadeiro
console.log(!!'texto') //ou espaco preenchido e verdadeiro
console.log(!![]) //mesmo um array vazio ele representa um valor verdadeiro
console.log(!!{}) //um objeto literal tambem e verdadeiro
console.log(!!Infinity) //tambem se comporta como verdadeiro
console.log(!!(isAtivo = true)) //se o valor atribuido ali for resultado verdadeiro ele vai dar verdadeiro
                        //ele ta pegando o true nao se atribuicao deu certo ou nao

console.log('os falsos....')
console.log(!!0) //resolve para falso
console.log(!!'') //string vazia resolve pra falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) //se o valor do lado DIREITO da atribuicao for um valor que retorna falso, o resultado vai ser falso

console.log('para finalizar....')
console.log(!!('' || null || 0 || ' ')) //resultado de um deles precisa ser verdadeiro para dar verdadeiro
console.log(('' || null || 0 || 'epa' || 123)) //ele vai retornar o unico valor verdadeiro que ele encontrou que e o 'epa'      
                                               //ele vai converter as coisas pra true ou false dependendo do contexto
                                               //o || serve pra dar um valor padrao para uma determinada variavel

//EXEMPLO REAL

let nome = ''
console.log(nome || 'Desconhecido') //se o cara nao colocou o nome imprime desconhecido
                                    //ele retornou o valor verdadeiro que e o 'Desconhecido'

nome = 'Joao'
console.log(nome || 'Desconhecido') //ele retorna o primeiro valor verdadeiro que e o true
                                    //caso um valor nao esteja valido use o outro como informacao




