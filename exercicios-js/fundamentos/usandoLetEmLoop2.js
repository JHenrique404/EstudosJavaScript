const funcs = []

for (let i= 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[6] ()
funcs[8] ()

//LET respeita o bloco de codigo entao ele imprime o valor certo
//qual era o valor de I naquele momento