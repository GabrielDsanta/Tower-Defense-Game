



class Torre{
    private _Nome: string
    private _Ataque: number
    private _Alcance: number
    private _Nivel: number
    private _Valor: number

    constructor(nome: string, ataque: number, alcance: number, nivel: number, valor: number){
        this.SetName(nome)
        this.SetAtaque(ataque)
        this.SetAlcance(alcance)
        this.SetNivel(nivel)
        this.SetValor(valor)
    }

    SetName(name: string){
        this._Nome = name
    }
    SetAtaque(ataque: number){
        this._Ataque = ataque
    }
    SetAlcance(alcance: number){
        this._Alcance = alcance
    }
    SetNivel(nivel: number){
        this._Nivel = nivel
    }
    SetValor(valor: number){
        this._Valor = valor
    }

    GetName(): string{
        return this._Nome
    }
    Atacar(): number{
        return this._Ataque
    }
    GetAlcance(): number{
        return this._Alcance
    }
    GetNivel(): number{
        return this._Nivel
    }
    GetValor(): number{
        return this._Valor
    }
}

class Inimigo{
    private _Nome: string
    private _Vida: number
    
    constructor(nome: string, vida: number){
        this.SetName(nome)
        this.SetVida(vida)
    }

    SetName(name: string){
        this._Nome = name
    }
    SetVida(vida: number){
        this._Vida = vida
    }

    GetName(): string{
        return this._Nome
    }
    GetVida(): number{
        return this._Vida
    }

    ReceberDano(dano: number){
        this.SetVida(this.GetVida() - dano)
    }
}


let Torres: object[] = []
let Inimigos: object[] = []

let Continuar = true

while(Continuar){
    let Pergunta = prompt("1 Começar Jogo /// 2 Criar Torre /// 3 Criar Inimigo /// 4 Finalizar")
}