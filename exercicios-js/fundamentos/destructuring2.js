const [a] = [10]
console.log(a)
//criou uma variavel a que recebeu o valor do primeiro elemento do array



//ignorou o n2 e n4
//o indice n2 = 7 e n4 = 8 ----- foram ignorados mas mantiveram os valores
//n5 esta fora do array
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)


//o array pode ter outros elementos do tipo array
//primeiro elemento ignorado, o segundo elemento e um array, e esta ignorando o primeiro elemento do array dentro do array
//ignore o primeiro elemento = [,8,8]
//o primeiro elemento do segundo array ignora = [9]
//e pega o segundo elemento que e o [6]
const [, [, nota]] = [[,8,8], [9, 6, 8]]
console.log(nota)



//pode-se criar array dentro de um array
/*
ex:
 const [a, b, c, d] = [[3,44,5,6,7,8,9], 5, 1, 15]
 console.log(a)
  
 ele vai imprimir [3,44,5,6,7,8,9]
*/ 