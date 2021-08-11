const funcs = []

for (var i= 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()

//var nao tem o escopo(so com funcao)
//entao por isso o valor final e 10 pra todos