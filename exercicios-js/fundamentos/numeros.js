const peso1 = 1.0; //1.0 e uma valor inteiro, caso passe 1.1 e valor quebrado
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Pra mostrar so 2 casas apos a ","
console.log(media.toString()) //Retorna o valor como String
console.log(media.toString(2)) //Caso passe o valor do pro toString(2) ele converte pra binario
console.log(typeof media)  
console.log(typeof Number) /* Number com "N" maiusculo e uma funcao 
                            * number com "n" minusculo e um tipo de dado
                            */




/* funcoes que tem a sua disposicao apartir do seu tipo de dado dentro do JS 
 * dado tem funcoes associadas aquele dado
 * invocamos essas funcoes apartir do "." 
 */ 


                              

