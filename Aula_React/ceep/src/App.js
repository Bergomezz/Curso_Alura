import { Component } from "react";
import FormularioDeCadastro from "./components/formularioCadastro";
import ListaDeNotas from "./components/listaDeNotas";
class App extends Component {
  render(){
    return (
      <section>
      <FormularioDeCadastro/>
      <ListaDeNotas/>
    </section>
  );
}
}

export default App;
