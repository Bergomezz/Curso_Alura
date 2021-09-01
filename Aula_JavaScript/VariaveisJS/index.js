// Tipo number
class Dados {

}

let dadosRolagem = [];

dadosRolagem.push = () => {
    const d4 = Math.round(Math.random() * 4) + 1;
    const d6 = Math.floor(Math.random() * 6) + 1;
    const d8 = Math.round(Math.random() * 8) + 1;
    const d10 = Math.round(Math.random() * 10) + 1;
    const d12 = Math.round(Math.random() * 12) + 1;
    const d20 = Math.round(Math.random() * 20) + 1;
}

console.log(dados[0])







// class fabricaDePersonagens {
//     vitalidadePadrao = 0
//     moedasPadrao = 0

//     constructor(vitalidadePadrao, moedasPadrao) {
//       this.vitalidadePadrao = vitalidadePadrao
//       this.moedasPadrao = moedasPadrao
//     }

//     criaPersonagem = (
//       nome,
//       forca,
//       inteligencia,
//       destreza,
//       carisma,
//       itens,
//       fatorMultiplicadorForca
//     ) => {
//       const personagem = {
//         nome,
//         vitalidade: this.vitalidadePadrao,
//         forca,
//         inteligencia,
//         destreza,
//         carisma,
//         hp: (this.vitalidadePadrao + forca) * 1.8,
//         mp: (inteligencia + carisma) * 1.6,
//         moedas: this.moedasPadrao,
//         itens: itens,
//         fatorMultiplicadorForca
//       }
//       personagem.movimentarNivel = (novaForca, novaInteligencia) => {
//         personagem.forca += novaForca
//         personagem.inteligencia += novaInteligencia
//         personagem.hp += personagem.forca * personagem.fatorMultiplicadorForca
//       }
//       personagem.recebeuAtaque = (forcaOponente, forçaAtaque) => {
//         personagem.vitalidade -= (forcaOponente / personagem.forca) * forçaAtaque
//       }
//       personagem.movimentarMoedas = (moedas) => {
//         personagem.moedas += moedas
//       }
//       personagem.saldoMoedas = () => {
//         return personagem.moedas
//       }
//       return personagem
//     }

//     criarBarbaro = (nome) => {
//       return this.criaPersonagem(
//         nome,
//         20,
//         5,
//         10,
//         5,
//         [{ item: 'Espada Longa', ataque: 20 }],
//         2
//       )
//     }
//     criarElfo = (nome) => {
//       return this.criaPersonagem(
//         nome,
//         10,
//         20,
//         20,
//         10,
//         [{ item: 'Adaga de Cristal', ataque: 20 }],
//         1
//       )
//     }
//   }

//   const main = () => {
//     const personagens = []
//     const fabrica = new fabricaDePersonagens(100, 20)
//     personagens.push(fabrica.criarBarbaro('Sir Kingslayer'))
//     personagens.push(fabrica.criarElfo('Legolas'))
//     console.log(personagens)
//     personagens[0].movimentarNivel(10, 10)
//     personagens[1].movimentarMoedas(-3)
//     console.log(personagens[0].nome, personagens[0].forca)
//     console.log(personagens[1].nome, personagens[1].saldoMoedas())
//   }
//   main()
