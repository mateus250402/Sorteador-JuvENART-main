import { Grupo } from "./grupo.js";

//Grupos cabeça de chave
const caiboate = new GrupoC('01', 'CTG Caiboaté', '18', 'São Gabriel');

//Lista com os grupos cabeça de chave
export let lista_cabeça = [caiboate];

//Grupos geral (Meu Deus...)
const polivalente = new Grupo('02','DTG Polivalente','2','São Jerônimo');
const adaga_velha = new Grupo('03','CTG Adaga Velha','18','Rosário do Sul');
const timbauva = new Grupo('04','PL Timbaúva','15','Portão');
const os_vaqueanos = new Grupo('05','CTG Os Vaqueanos','13','Restinga Seca');
const sinuelo_dos_ervais = new Grupo('06','CTG Sinuelo dos Ervais','19','Gaurama');
const sinuelo = new Grupo('07','CTG Sinuelo','21','Canguçu');
const os_legalistas = new Grupo('08','CTG Os Legalistas','3','Santo Ângelo');
const cftg_farroupilha = new Grupo('09','CFTG Farroupilha','3','São Borja');
const sentinelas_da_tradição = new Grupo('10','DTG Sentinelas da Tradição','9','Tupanciretã');
const galpao_do_chiru = new Grupo('11','CTG Galpão do Chiru','6','Rio Grande');
const lanceiros_do_mar = new Grupo('12','DTG Lanceiros do Mar','23','Tramandaí');
const querencia_do_imbe = new Grupo('13','CTG Querência do Imbé','23','Imbé');
const rincao_da_carolina = new Grupo('14','CTG Rincão da Carolina','18','Sant Ana do Livramento');
const galpao_da_boa_vontade = new Grupo('15','CTG Galpão da Boa Vontade','17','Palmeira das Missões');
const coracao_do_rio_grande = new Grupo('16','CTG Coração do Rio Grande','13','Faxinal do Soturno');
const rodeio_da_fronteira = new Grupo('17','CTG Rodeio da Fronteira','18','Dom Pedrito');
const dom_luiz = new Grupo('18','CTG Dom Luiz Felipe de Nadal','7','Passo Fundo');
const manoel_teixeira = new Grupo('19','CTG Manoel Teixeira','7','Tapejara');
const lenco_preto = new Grupo('20','CTG Lenço Preto','19','Trindade do Sul');
const ultima_tropeada = new Grupo('21','CTG Última Tropeada','11','Guapore');
const laco_velho = new Grupo('22','CTG Laço Velho','11','Bento Gonçalves');

//Lista dos grupos geral (MEU DEUS...)
export let lista_geral = [polivalente, adaga_velha, timbauva, os_vaqueanos, sinuelo_dos_ervais, sinuelo, os_legalistas, cftg_farroupilha, sentinelas_da_tradição, galpao_do_chiru, lanceiros_do_mar, querencia_do_imbe, rincao_da_carolina, galpao_da_boa_vontade, coracao_do_rio_grande, rodeio_da_fronteira, dom_luiz, manoel_teixeira, lenco_preto, ultima_tropeada, laco_velho];

export let lista_total = lista_cabeça.concat(lista_geral)
