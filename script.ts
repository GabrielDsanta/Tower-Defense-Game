


let Torres: object[] = []
let CampoDeBatalha: object[] = []
let Inimigos: object[] = []
let Continuar = true

Torres.length = 9
CampoDeBatalha.length = 9




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


while(Continuar){
    let Pergunta = prompt("1 Começar Jogo /// 2 Criar Torre /// 3 Criar Inimigo /// 4 Finalizar")
    switch(Pergunta){

        case "1":
        ComeçarPartida()
        break;


        case "2":
        CriarTorre()
        break;

        case "3":
        CriarInimigo()
        break;

        case "4":
        Continuar = false
        break;

        default:
        alert("Opção inválida")
        break;
    }
}


function CriarTorre(){
    let Error = false

    let Nome = String(prompt("Qual o Nome da Torre ?"))
    let Ataque = Number(prompt("Qual o Ataque da Torre ?"))
    let Alcance = Number(prompt("Qual o Alcance da Torre ?"))
    let Nivel = Number(prompt("Qual o Nivel da Torre ?"))
    let Valor = Number(prompt("Qual o Valor da Torre ?"))

    let NewTorre = new Torre(Nome, Ataque, Alcance, Nivel, Valor)
    let IndexTorre = Number(prompt("Torre criada ! Selecione a posição dela no tabuleiro (0 ~ 9)"))
    if(IndexTorre > 9 || IndexTorre < 0){
        return alert("Posição inválida")
    }

    Torres.forEach(VerificateIndex)

    function VerificateIndex(item: object, index: number){
        if(Torres[IndexTorre] !== undefined){
            Error = true
            alert("Você já possui uma Torre nessa posição")
        }
    }

    if(Error == false){
        Torres.splice(IndexTorre, 1, NewTorre)
    }


}

function CriarInimigo(){
    let Nome = String(prompt("Qual o Nome do Inimigo ?"))
    let Vida = Number(prompt("Qual a Vida do Inimigo ?"))

    let NewInimigo = new Inimigo(Nome, Vida)

    let QuantidadeInimigos = Number(prompt("Quantos inimigos vão ter na Partida ? (Max 9)"))
    if(QuantidadeInimigos > 9){
        return alert("Valor inválido")
    }

    for(let index = 0; index < QuantidadeInimigos; index++){
        Inimigos.unshift(NewInimigo)
    }
}

function ComeçarPartida(){

}