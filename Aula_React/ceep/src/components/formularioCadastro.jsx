import React, { Component } from "react";

class FormularioDeCadastro extends Component {
    render() {
        return (
            <section>
                <form>
                    <input type="text" placeholder="Título" />
                    <textarea placeholder="Escreva sua Nota"
                    />
                    <button>Crie Nota</button>
                </form>
            </section>
        )
    }
}

export default FormularioDeCadastro;