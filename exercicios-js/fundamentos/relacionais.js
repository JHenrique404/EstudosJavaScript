console.log('01)', '1' == 1)
console.log('02)', '1' === 1) //considerou o '1' como uma string por causa dos ''
console.log('03)', '3' != 3)  //3 e diferente de 3
console.log('04)', '3' !== 3) //estritamente diferente, pq um e string e outro e numero

console.log('05)', '3' < 2)
console.log('06)', '3' > 2)
console.log('07)', '3' <= 2)
console.log('08)', '3' >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2) //compara referencia de memoria e diz que e falso
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)