import React, { Component } from 'react'
import CardNotas from './cardNota';

class ListaDeNotas extends Component {
    render() {
        return (
            <section>
                <ul>
                    <li>
                        <CardNotas />
                    </li>
                    <li>
                        <CardNotas />
                    </li>
                    <li>
                        <CardNotas />
                    </li>
                </ul>
            </section>
        );
    }

}
export default ListaDeNotas;