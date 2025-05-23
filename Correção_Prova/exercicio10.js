let impactos = [60, 80, 70, 90, 50, 40];
let naveVida = 600;


for(let i = 0; i < impactos.length; i++){
    naveVida = naveVida - impactos[i];
}

if(naveVida > 0){
    console.log('A nave resistiu com ', naveVida, 'Pontos de vida!');
} else {
    console.log('A nave não resistiu!')
}