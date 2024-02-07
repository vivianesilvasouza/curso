let nomeHeroi = 'mulher maravilha';
let nivelXp = 1000245877;



switch (true) {
    case nivelXp <= 1000:
        console.log("O Herói de nome" + nomeHeroi + "está no nível de " + nivelXp + ' Ferro')
        break
    case nivelXp >= 1001 && nivelXp <= 2000:
        console.log("O Herói de nome" + nomeHeroi + "está no nível de " + nivelXp + ' Bronze')
        break
    case nivelXp >= 2001 && nivelXp <= 5000:
        console.log("O Herói de nome" + nomeHeroi + "está no nível de " + nivelXp + ' Prata')
        break
    case nivelXp >= 5001 && nivelXp <= 7000:
        console.log("O Herói de nome" + nomeHeroi + "está no nível de " + nivelXp + ' Ouro')
        break
    case nivelXp >= 7001 && nivelXp <= 8000:
        console.log("O Herói de nome" + nomeHeroi + "está no nível de " + nivelXp + ' Platina')
        break
    case nivelXp >= 8001 && nivelXp <= 9000:
        console.log("O Herói de nome" + nomeHeroi + "está no nível de " + nivelXp + ' Ascendente')
        break
    case nivelXp >= 9001 && nivelXp <= 10000:
        console.log("O Herói de nome" + nomeHeroi + "está no nível de " + nivelXp + ' Imortal')
        break
    case nivelXp >= 10001:
        console.log("O Herói de nome" + nomeHeroi + "está no nível de " + nivelXp + ' Radiante')
        break
    default:
        console.log("Outro tratamento para níveis, se necessário.");
        break;

}