import { Grupo } from "./grupo.js";
import { GrupoC } from "./grupo.js";

const rancho_da_saudade = new Grupo('03','CTG Rancho da Saudade','1','Cachoeirinha');
let campeao_anterior = [rancho_da_saudade];

//GRUPOS CABEÇA DE CHAVE  
const pia_do_sul = new GrupoC('01','CPF Piá do Sul','13','Santa Maria', 2);
const estancia_da_serra = new GrupoC('07','CTG Estância da Serra','23','Osório');
const aldeia_farroupilha = new GrupoC('11','CTG Aldeia Farroupilha','25','Farroupilha', 5);
const patrulha_do_rio_grande = new GrupoC('12','CTG Patrulha do Rio Grande','23','Santo Antônio da Patrulha');
const cftg = new GrupoC('17','Centro Farroupilha de Tradições Gaúchas','4','Alegrete');
const herois_farroupilhas = new GrupoC('18','CTG Heróis Farroupilhas','25','Caxias do Sul');
const alma_gaucha_13 = new GrupoC('20','CTF Alma Gaúcha','13','Santa Maria');

//Lista com os cabeças de chave
export const lista_cabeca = [pia_do_sul, estancia_da_serra, aldeia_farroupilha, patrulha_do_rio_grande, cftg, herois_farroupilhas, alma_gaucha_13];

//GRUPOS GERAL
const felipe_portinho = new Grupo('02','CTG Felipe Portinho','7','Marau');
const camboata = new Grupo('04','CTG Camboatá','30','Novo Hamburgo');
const os_farrapos = new Grupo('05','Centro de Tradições Os Farrapos','26','Pelotas');
const gt_sepe_tiaraju = new Grupo('06','Grupo Tradicionalista Sepe Tiaraju','12','São Leopoldo');
const charrua = new Grupo('08','CTG Charrua','12','Foz do Iguaçu');
const lalau_miranda = new Grupo('09','CTG Lalau Miranda','7','Passo Fundo');
const alma_gaucha_18 = new Grupo('13','DTG DC Alma Gaúcha','18','Dom Pedrito');
const guapos_do_itapui = new Grupo('14','CTG Guapos do Itapuí','30','Campo Bom');
const amanhecer_na_querencia = new Grupo('15','CTG Amanhecer na Querência','1','Alvorada');
const velha_carreta = new Grupo('16','GTCN Velha Carreta','25','Caxias do Sul');
const mborore = new Grupo('19',"CTG M'bororé",'30','Campo Bom');
const tiarayu = new Grupo('21','CTG Tiarayu','1','Porto Alegre');

//Lista com os grupos geral
export let lista_geral = [felipe_portinho, camboata, os_farrapos, gt_sepe_tiaraju, charrua, lalau_miranda, alma_gaucha_18, guapos_do_itapui, amanhecer_na_querencia, velha_carreta, mborore, tiarayu];

let arrayProvisorio = campeao_anterior.concat(lista_cabeca);

//Lista com TODOS os grupos
export let lista_total = arrayProvisorio.concat(lista_geral);

