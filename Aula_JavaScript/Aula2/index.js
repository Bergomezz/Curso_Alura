import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Funcionario } from "./Funcionarios/FuncionarioCB.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Camila', 10000, 12345678900);
diretor.cadastrarSenha('123456')
const gerente = new Gerente('Bernardo', 5000,98765432101);
gerente.cadastrarSenha('123');
const cliente = new Cliente('Lais', 99988877701, '456')

// let estaLogado = [];

// estaLogado.push = () => {
// };
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
console.log(gerenteEstaLogado, diretorEstaLogado)

const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');

// console.log(clienteEstaLogado);
console.log(clienteEstaLogado);