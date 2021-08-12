// const livro = {
//     nome: 'React Native',
//     editora: 'Casa Codigo',
//     pagina: 185,
//     anunciar: function(){
//         console.log('A Alura indica o livro ' + this.nome + '!');
//     }
// };

// livro.anunciar();

// const livro = function(nome,editora,paginas){
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function(){
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
// };

// const graphQl = new livro('GraphQL', 'Casa do Código', '1000');
// console.log(graphQl.getNome());
// console.log(graphQl.getEditora());
// console.log(graphQl.getPaginas());


class livro {
    constructor(nome, editora, paginas) {
        this.nome = nome,
            this.editora = editora,
            this.paginas - paginas
    }
    anunciarTitulo() {
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
};


const nodeJS = new livro('Primeiros passos com NodeJS', 'Casa do Código', 190);
nodeJS.anunciarTitulo();
nodeJS.descreverTitulo();

class livroColecao extends livro {
    constructor(nome, nomeColecao){
        super(nome),
        this.nomeColecao = nomeColecao
    }
    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da colção ${this.nomeColecao}`)
    }
};