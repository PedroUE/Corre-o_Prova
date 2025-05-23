let cestas = [12, 8, 14, 10, 11];
let jogadores = ["Gustavo", "Helena", "Isabela", "Jonas", "Karina"];

let maisCestas = cestas[0];
let artilheiro = 0;

for (let i = 0; i < cestas.length; i++){
    if (cestas[i] > maisCestas){
        maisCestas = cestas[i];
        artilheiro = i;
    }
}


console.log("O jogador com mais cestas foi: " + jogadores[artilheiro] + " com " + maisCestas + " cestas!")