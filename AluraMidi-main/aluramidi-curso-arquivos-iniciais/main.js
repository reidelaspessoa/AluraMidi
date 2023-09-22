function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0;

// Estrutura de repetição - Enquanto
while (contador < listaDeTeclas.length) {
    const tecla= listaDeTeclas[contador]; 
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    console.log(idAudio);
    console.log(instrumento);
    listaDeTeclas[contador].onclick = function() {tocaSom(idAudio);};

    contador = contador + 1; 
    console.log(contador);
}
