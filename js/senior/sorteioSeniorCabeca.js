import { lista_cabeca} from "../modelos/grupos_senior.js";
import {shuffle} from "../modelos/shuffle.js";
import { mensagem_de_sucesso, mensagem_do_grupo } from "../modelos/swetalert.js";
import { ordenar } from "../modelos/shuffle.js";

let f = 0;
let n = 101;

//Por algum motivo (que ainda não descobri) precisei fazer isso para o "onclick" funcionar
let botao = document.getElementById("botao");

//Exibe o nome do grupo em seu devido local pelo id"n"
botao.onclick = function exibirGruposCabeca() {
    mensagem_de_sucesso();
}

//Embaralha a lista e ordena dentro dos blocos com base na classificação
shuffle(lista_cabeca)
const bloco1 = [lista_cabeca[0], lista_cabeca[3], lista_cabeca[6]];
const bloco2 = [lista_cabeca[1], lista_cabeca[4], lista_cabeca[7]];
const bloco3 = [lista_cabeca[2], lista_cabeca[5], lista_cabeca[8]];
ordenar(bloco1);
ordenar(bloco2);
ordenar(bloco3);
const lista_cabeca_n = [bloco1[0],bloco2[0],bloco3[0], bloco1[1], bloco2[1], bloco3[1], bloco1[2], bloco2[2], bloco3[2]];
export const lista_cabeca_novo = lista_cabeca_n;

// const array = JSON.stringify(lista_cabeca_novo);
// localStorage.setItem('array', array);


document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let nome = document.getElementById(n);
        let grupo = lista_cabeca_novo[f];
    
        mensagem_do_grupo(`${grupo}`,`${grupo.numero}`);

        nome.innerHTML = (`${grupo}`);
    
        numeroGrupoC();
    
        n++;
        f++;
    }
}
);

//O querySelectorAll seleciona todos os elementos com a classe "bola__ver__animado1" e os transforma em um arrat "selection", então o método forEach lê o array e executa algo         ((element) => algo) 
function numeroGrupoC() {
    let selection = document.querySelectorAll('.bola__ver__animado');
    selection.forEach((element) => element.innerHTML = lista_cabeca_novo[f].numero); 
}
