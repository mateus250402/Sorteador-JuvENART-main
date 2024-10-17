export class Grupo{
    constructor(numero, nome, regiao, cidade){
        this.numero = numero;
        this.nome = nome;
        this.regiao = regiao;
        this.cidade = cidade
    }

    toString(){
        return `${this.nome} - ${this.regiao}ª RT - ${this.cidade}`
    }
}

export class GrupoC{
    constructor(numero, nome, regiao, cidade, classificacao){
        this.numero = numero;
        this.nome = nome;
        this.regiao = regiao;
        this.cidade = cidade;
        this.classificacao = classificacao;
    }

    toString(){
        return `${this.nome} - ${this.regiao}ª RT - ${this.cidade}`
    }
}