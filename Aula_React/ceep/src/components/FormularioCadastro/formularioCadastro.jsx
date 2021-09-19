import React, { Component } from "react";
import "./estilo.css"

class FormularioDeCadastro extends Component {
    render() {
        return (
            <section>
                <form className="form-cadastro">
                    <input type="text" 
                    placeholder="Título" 
                    className="form-cadastro_input"/>
                    <textarea rows={15}
                    placeholder="Escreva sua Nota" 
                    className="form-cadastro_input"
                    />
                    <button className="form-cadastro_input form-cadastro_submit">
                        Crie Nota
                    </button>
                </form>
            </section>
        )
    }
}

export default FormularioDeCadastro;