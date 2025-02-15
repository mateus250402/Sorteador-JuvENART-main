import { Grupo } from "./grupo.js";
import { GrupoC } from "./grupo.js";

const rancho_da_saudade = new Grupo('03','CTG Rancho da Saudade','1','Cachoeirinha');
let campeao_anterior = [rancho_da_saudade];

//GRUPOS CABEÇA DE CHAVE  
const pia_do_sul = new GrupoC('01','CPF Piá do Sul','13','Santa Maria', 2);
const estancia_da_serra = new GrupoC('07','CTG Estância da Serra','23','Osório');
const aldeia_farroupilha = new GrupoC('11','CTG Aldeia Farroupilha','25','Farroupilha', 5);

//Lista com os cabeças de chave
export const lista_cabeca = [pia_do_sul, estancia_da_serra, aldeia_farroupilha];

//GRUPOS GERAL
const felipe_portinho = new Grupo('02','CTG Felipe Portinho','7','Marau');
const camboata = new Grupo('04','CTG Camboatá','30','Novo Hamburgo');
const os_farrapos = new Grupo('05','Centro de Tradições Os Farrapos','26','Pelotas');
const gt_sepe_tiaraju = new Grupo('06','Grupo Tradicionalista Sepe Tiaraju','12','São Leopoldo');
const charrua = new Grupo('08','CTG Charrua','12','Foz do Iguaçu');
const lalau_miranda = new Grupo('09','CTG Lalau Miranda','7','Passo Fundo');

//Lista com os grupos geral
export let lista_geral = [felipe_portinho, camboata, os_farrapos, gt_sepe_tiaraju, charrua, lalau_miranda];

let arrayProvisorio = campeao_anterior.concat(lista_cabeca);

//Lista com TODOS os grupos
export let lista_total = arrayProvisorio.concat(lista_geral);

