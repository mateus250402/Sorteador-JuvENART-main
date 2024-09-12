import {lista_geral} from "../modelos/grupos_junior.js"
import {shuffle} from "../modelos/shuffle.js"
import { mensagem_de_sucesso, mensagem_do_grupo } from "../modelos/swetalert.js";

let f = 0;
let n = 1;

//Embaralha a lista
window.onload = shuffle(lista_geral)

//Por algum motivo (que ainda não descobri) precisei fazer isso para o "onclick" funcionar
let botao = document.getElementById("botao")

//Exibe o nome do grupo em seu devido local pelo id"n"
botao.onclick = function exibirGruposCabeca () {
    mensagem_de_sucesso();
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let nome = document.getElementById(n)
        let grupo = lista_geral[f]
    
        nome.innerHTML = (`${grupo}`);
        
        mensagem_do_grupo(`${grupo}`, `${grupo.numero}`)

        numeroGrupoG();
    
        n++;
        f++;
    }
}
);

//O querySelectorAll seleciona todos os elementos com a classe "bola__ver__animado1" e os transforma em um arrat "selection", então o método forEach lê o array e executa algo         ((element) => algo) 
function numeroGrupoG(){
    let selection = document.querySelectorAll('.bola__ver__animado');
    selection.forEach((element) => element.innerHTML = lista_geral[f].numero); 
}