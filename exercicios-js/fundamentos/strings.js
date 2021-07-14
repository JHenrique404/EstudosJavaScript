const escola = "Cod3r"
              //01234

console.log(escola.charAt(4)) //Vai dar a letra que esta no indice 4 da String
console.log(escola.charAt(5)) //retorna um valor vazio
console.log(escola.charCodeAt(3)) //Retorna o valor da tabela ASCII
console.log(escola.indexOf('3')) //Retorna o indice associado ao digito 3 que esta dentro da palavra escola 

console.log(escola.substring(1)) //Ele vai imprimir a palavra apartir do incidice 1 
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //Basicamente junta as Strings, podendo usar variaveis tbm 
console.log('Escola ' + escola + "!") //Pode fazer assim tambem

console.log(escola.replace(3, 'e')) //substitui o valor da string=3 e substitui pelo e
console.log(escola.replace(/\d/, 'e')) /* substita todos os digitos por letra 'e'   
                                        * /\d/ == Digitos
                                        * /\w/g == Letras e Digitos
                                       */ 

console.log('Ana,Maria,Pedro'.split(',')) //Converte String em array e passa na split oque voce quer usar como separador
                    