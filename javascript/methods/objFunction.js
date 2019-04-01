console.log("-------------------------- Object Function --------------------------")

let carro = {
    marca: "Fiat",
    modelo: "uno",
    cor: "vermelho",
    dono: "Fernando",
    serPintado(corNova){
        this.cor = corNova
    },
    serVendido(donoNovo){
        this.dono = donoNovo
    }
}

carro.serPintado("azul")
console.log(carro)
carro.serVendido("Luciano")
console.log(carro)