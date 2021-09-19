import { Component } from "react";
import FormularioDeCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNota";
import "./assets/App.css"
import './assets/index.css';
class App extends Component {
  render(){
    return (
      <section className="conteudo">
      <FormularioDeCadastro/>
      <ListaDeNotas/>
    </section>
  );
}
}

export default App;
