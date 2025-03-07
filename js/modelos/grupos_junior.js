import { Grupo } from "./grupo.js";
import { GrupoC } from "./grupoC.js";

//Grupos cabeça de chave
const caiboate = new GrupoC('01', 'CTG Caiboaté', '18', 'São Gabriel');
const chaleira_preta = new GrupoC('24', 'GF Chaleira Preta', '9', 'Ijuí');
const tropilha_crioula = new GrupoC('28', 'CTG Tropilha Crioula', '19', 'Getúlio Vargas');
const palanques_da_tradição = new GrupoC('29', 'CTG Palanques da Tradição', '30', 'Campo Bom');
const tropeiros_da_amizade = new GrupoC('42', 'CTG Tropeiros da Amizade', '21', 'Canguçu');
const corredor_missioneiro = new GrupoC('60', 'CTG Corredor Missioneiro', '1', 'Porto Xavier');
const sentinelas_do_pago = new GrupoC('56', 'CTG Sentinelas do Pago', '7', 'Marau');

//Lista com os grupos cabeça de chave
export let lista_cabeça = [caiboate, chaleira_preta, tropilha_crioula, palanques_da_tradição, tropeiros_da_amizade, corredor_missioneiro, sentinelas_do_pago];

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
const sentinela_da_serra = new Grupo('23','CTG Sentinela da Serra','11','Garibaldi');
const chama_nativa = new Grupo('26','CTG Chama Nativa','12','Esteio');
const jose_bonifacio = new Grupo('30','CTG José Bonifácio Gomes','12','São Leopoldo');
const irmaos_sagrilo = new Grupo('33','PT Irmãos Sagrilo','10','Santiago');
const retorno_a_querencia = new Grupo('34','CTG Retorno a Querência','11','Nova Prata');
const essencia_da_tradicao = new Grupo('35','GF Essência da Tradição','24','Venancio Aires');
const sentinela_dos_sinos = new Grupo('36','CTG Sentinela dos Sinos','1','Caraa');
const doze_bracas = new Grupo('37','CTG Doze Braças','29','Sananduva');
const rancho_de_gauderios = new Grupo('38','CTG Rancho de Gaudérios','25','Farroupilha');
const querencia_da_medianeira = new Grupo('40','DT Querência da Medianeira','13','Santa Maria');
const porteira_da_tradição = new Grupo('41','CTG Porteira da Tradição','1','Eldorado do Sul');
const rancho_amigo = new Grupo('43','CTG Rancho Amigo','19','Barão de Cotegipe');
const carreteiros_da_saudade = new Grupo('44','CTG Carreteiros da Saudade','5','Pantano Grande');
const rancho_dos_tropeiros = new Grupo('45','CTG Rancho dos Tropeiros','9','Ibiruba');
const vinte_de_setembro = new Grupo('46','CTG 20 de Setembro','23','Xangrilá');
const prenda_minha = new Grupo('47','CTG Prenda Minha','18','Bagé');
const sentinela_dos_pampas = new Grupo('48','CTG Sentinela dos Pampas','5','Candelária');
const luiz_chirivino = new Grupo('49','CTG Luiz Chirivino','18','Candiota');
const tropeiro_da_serra = new Grupo('50','CTG Tropeiro da Serra','15','Barão');
const vaqueanos_da_cultura = new Grupo('51','GAN Vaqueanos da Cultura','14','Soledade');
const galpao_da_saudade = new Grupo('52','CTG Galpão da Saudade','11','Serafina Corrêa');
const osorio_de_assis = new Grupo('53','CTG Osório de Assis','14','Fontoura Xavier');
const vinte_de_setembro_sa = new Grupo('54','CTG 20 de Setembro','3','Santo Ângelo');
const gauderios_da_saudade = new Grupo('55','CTG Gaudérios da Saudade','30','Estância Velha');
const caami = new Grupo('57','GR CAAMI Folclore e Arte Nativa','13','São Sepé');
const tropeiro_velho = new Grupo('58','CTG Tropeiro Velho','9','Panambi');
const serigote = new Grupo('59','CTG Serigote','30','Estância Velha');
const ronda_charrua = new Grupo('61','CTG Ronda Charrua','25','Farroupilha');
const joaquim_paulo_freitas = new Grupo('62','CTG Joaquim Paulo de Freitas','21','Canguçu');


//Lista dos grupos geral (MEU DEUS...)
export let lista_geral = [polivalente, adaga_velha, timbauva, os_vaqueanos, sinuelo_dos_ervais, sinuelo, os_legalistas, cftg_farroupilha, sentinelas_da_tradição, galpao_do_chiru, lanceiros_do_mar, querencia_do_imbe, rincao_da_carolina, galpao_da_boa_vontade, coracao_do_rio_grande, rodeio_da_fronteira, dom_luiz, manoel_teixeira, lenco_preto, ultima_tropeada, laco_velho, sentinela_da_serra, retorno_a_querencia, chama_nativa, jose_bonifacio, irmaos_sagrilo, essencia_da_tradicao, sentinela_dos_sinos, doze_bracas, rancho_de_gauderios, querencia_da_medianeira, porteira_da_tradição, rancho_amigo, carreteiros_da_saudade, rancho_dos_tropeiros, vinte_de_setembro, prenda_minha, sentinela_dos_pampas, luiz_chirivino, tropeiro_da_serra, vaqueanos_da_cultura, galpao_da_saudade, osorio_de_assis, vinte_de_setembro_sa, gauderios_da_saudade, caami, tropeiro_velho, serigote, ronda_charrua, joaquim_paulo_freitas];

export let lista_total = lista_cabeça.concat(lista_geral)
