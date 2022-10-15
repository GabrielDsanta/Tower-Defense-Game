"use strict";
let Torres = [];
let CampoDeBatalha = [];
let Inimigos = [];
let Continuar = true;
Torres.length = 9;
CampoDeBatalha.length = 9;
class Torre {
    constructor(nome, ataque, alcance, nivel, valor) {
        this.SetName(nome);
        this.SetAtaque(ataque);
        this.SetAlcance(alcance);
        this.SetNivel(nivel);
        this.SetValor(valor);
    }
    SetName(name) {
        this._Nome = name;
    }
    SetAtaque(ataque) {
        this._Ataque = ataque;
    }
    SetAlcance(alcance) {
        this._Alcance = alcance;
    }
    SetNivel(nivel) {
        this._Nivel = nivel;
    }
    SetValor(valor) {
        this._Valor = valor;
    }
    GetName() {
        return this._Nome;
    }
    Atacar() {
        return this._Ataque;
    }
    GetAlcance() {
        return this._Alcance;
    }
    GetNivel() {
        return this._Nivel;
    }
    GetValor() {
        return this._Valor;
    }
}
class Inimigo {
    constructor(nome, vida) {
        this.SetName(nome);
        this.SetVida(vida);
    }
    SetName(name) {
        this._Nome = name;
    }
    SetVida(vida) {
        this._Vida = vida;
    }
    GetName() {
        return this._Nome;
    }
    GetVida() {
        return this._Vida;
    }
    ReceberDano(dano) {
        this.SetVida(this.GetVida() - dano);
    }
}
while (Continuar) {
    let Pergunta = prompt("1 Começar Jogo /// 2 Criar Torre /// 3 Criar Inimigo /// 4 Finalizar");
    switch (Pergunta) {
        case "1":
            ComeçarPartida();
            break;
        case "2":
            CriarTorre();
            break;
        case "3":
            CriarInimigo();
            break;
        case "4":
            Continuar = false;
            break;
        default:
            alert("Opção inválida");
            break;
    }
}
function CriarTorre() {
    let Error = false;
    let Nome = String(prompt("Qual o Nome da Torre ?"));
    let Ataque = Number(prompt("Qual o Ataque da Torre ?"));
    let Alcance = Number(prompt("Qual o Alcance da Torre ?"));
    let Nivel = Number(prompt("Qual o Nivel da Torre ?"));
    let Valor = Number(prompt("Qual o Valor da Torre ?"));
    let NewTorre = new Torre(Nome, Ataque, Alcance, Nivel, Valor);
    let IndexTorre = Number(prompt("Torre criada ! Selecione a posição dela no tabuleiro (0 ~ 9)"));
    if (IndexTorre > 9 || IndexTorre < 0) {
        return alert("Posição inválida");
    }
    Torres.forEach(VerificateIndex);
    function VerificateIndex(item, index) {
        if (Torres[IndexTorre] !== undefined) {
            Error = true;
            alert("Você já possui uma Torre nessa posição");
        }
    }
    if (Error == false) {
        Torres.splice(IndexTorre, 1, NewTorre);
    }
}
function CriarInimigo() {
    let Nome = String(prompt("Qual o Nome do Inimigo ?"));
    let Vida = Number(prompt("Qual a Vida do Inimigo ?"));
    let NewInimigo = new Inimigo(Nome, Vida);
    let QuantidadeInimigos = Number(prompt("Quantos inimigos vão ter na Partida ? (Max 9)"));
    if (QuantidadeInimigos > 9) {
        return alert("Valor inválido");
    }
    for (let index = 0; index < QuantidadeInimigos; index++) {
        Inimigos.unshift(NewInimigo);
    }
}
function ComeçarPartida() {
}
