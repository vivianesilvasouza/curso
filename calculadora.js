let pontos = getPontos(125, 3)
let rancking = getRancking(pontos)


function getPontos(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
}

function getRancking(vitorias) {
    switch (true) {
        case vitorias <= 10:
            console.log("O Herói tem de saldo de " + pontos + " está no nível de " + 'Ferro')
            break
        case vitorias >= 11 && vitorias <= 20:
            console.log("O Herói tem de saldo de " + pontos + " está no nível de " + 'Bronze')
            break
        case vitorias >= 21 && vitorias <= 50:
            console.log("O Herói tem de saldo de " + pontos + " está no nível de " + 'Prata')
            break
        case vitorias >= 51 && vitorias <= 80:
            console.log("O Herói tem de saldo de " + pontos + " está no nível de " + 'Ouro')
            break
        case vitorias >= 81 && vitorias <= 90:
            console.log("O Herói tem de saldo de " + pontos + " está no nível de " + 'Diamante')
            break
        case vitorias >= 91 && vitorias <= 100:
            console.log("O Herói tem de saldo de " + pontos + " está no nível de " + 'Lendário')
            break

        case vitorias >= 101:
            console.log("O Herói tem de saldo de " + pontos + " está no nível de " + ' Imortal')
            break
        default:
            console.log("Outro tratamento para níveis, se necessário.");
            break;

    }

}