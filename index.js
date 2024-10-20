//Calculadora de partidas Rankeadas
let victories = 1000;  
let defeats = 9;

//função para calcular o número de vitórias e retornar e armazena o número na variavel balance
function amountVictories(victories, defeats) {
    return victories - defeats;
};

let balance = amountVictories(victories, defeats);

//função para  calcular o rank
function rank(balance) {
    if (balance <= 10) {
        return "Ferro";
    } else if (balance >= 11 && balance <= 20) {
        return "Bronze";
    } else if (balance >= 21 && balance <= 50) {
        return "Prata";
    } else if (balance >= 51 && balance <= 70) {
        return "Ouro";
    } else if (balance >= 81 && balance <= 90) {
        return "Diamante";
    } else if (balance >= 91 && balance <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}
//msg que aparecerá
console.log(`O Herói tem o rank de ${rank(balance)} e está no nível de ${balance}`);
