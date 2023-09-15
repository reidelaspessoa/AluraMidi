function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0;

// Estrutura de repetição - Enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1; 
}