let visualizacoes = [6, 2, 6, 9, 19, 12];
let i = 0;
let maisAssistido = visualizacoes[0];

while (i < visualizacoes.length){
    if (visualizacoes[i] > maisAssistido){
        maisAssistido = visualizacoes[i];
    }
    i++
}

console.log("O video mais assistido foi: ",maisAssistido);