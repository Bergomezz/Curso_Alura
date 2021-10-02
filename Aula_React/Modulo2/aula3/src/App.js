import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Button from '@mui/material';

class App extends Component {
  render() {

    return (
      <Fragment>
        <h1> Formulario</h1 >
        <FormularioCadastro />
      </Fragment>
    );
  }
}

export default App;
