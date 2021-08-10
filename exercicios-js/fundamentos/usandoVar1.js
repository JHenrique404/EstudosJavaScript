{
    {
        {
            { 
                var sera = 'Sera???' 
                console.log(sera)
            }
        }
    }
}
console.log(sera)

//uma variavel VAR q nao seja uma funcao ela ficara visivel pra todo mundo

//escopo = local onde a variavel fica visivel tipo dentro do bloco


function teste(){
    var local = 123
}

teste()
console.log(local) //quando define variavel dentro de uma funcao, a variavel VAR so vai estar disponivel dentro da funcao, fora n vai pegar

//quando vc cria uma variavel fora de uma funcao, ela e global
//window e um objeto global padrao do browser

//variavel so tem 2 escopos, global(q pode ser visto pelo seu programa inteiro) ou vc cria uma variavel VAR no corpo de uma funcao