//Tipo number
// class Dados {

// };


// let dadosRolagem = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let dadosRolagem = {
    d4: getRandomInt(1, 4),
    d6: getRandomInt(1, 6),
    d8: getRandomInt(1, 8),
    d10: getRandomInt(1, 10),
    d12: getRandomInt(1, 12),
    d20: getRandomInt(1, 20),
}

// console.log(dadosRolagem.d4)
// console.log(dadosRolagem.d6)
// console.log(dadosRolagem.d8)
// console.log(dadosRolagem.d10)
// console.log(dadosRolagem.d12)
// console.log(dadosRolagem.d20)
class Vilao {
    constructor(nome, nivel)
    forca = this.forca + nivel;
    resistencia = this.resistencia + nivel;
    inteligencia = this.inteligencia + nivel;
    hp = (forca * resistencia) * nivel
    armadura = item
}

for (let i = Vilao.hp; i = 0; i - danoDeRolagem) {
    return 'Morto!'
};

// function dano(){
//     dadosRolagem.d6 >= 3 ? arma-hp : 0

// }

// do{
//     dano 
// }while (hp >= 0)


console.log(dadosRolagem.d6 >= 3 ? "ataque" : "errou")
let danoDeRolagem = () => {
    for (dadosRolagem.d6 >= 3; (dadosRolagem.d6 - 2) - 20; 20 <= 0);
}



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
