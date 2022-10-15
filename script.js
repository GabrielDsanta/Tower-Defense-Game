"use strict";
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
let Torres = [];
let Inimigos = [];
let Continuar = true;
while (Continuar) {
    let Pergunta = prompt("1 Começar Jogo /// 2 Criar Torre /// 3 Criar Inimigo /// 4 Finalizar");
}
