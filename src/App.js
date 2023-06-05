import React, { Fragment } from 'react'
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro.jsx';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <Container component="article" maxWidth="sm">
        <Typography variant='h3' component='h1' align='center'>
          Formulário Cadastro
        </Typography>
        <FormularioCadastro 
          aoEnviar={aoEnviarForm}
          validarCPF={validarCPF}
        />
    </Container>
  )
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf) {
  if (cpf.lentgth !== 11) {
    return {valido:false, texto:"CPF precisa conter 11 digitos"}
  } else {
    return {valido:true, texto:""}
  }
}

export default App;
