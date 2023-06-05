   import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { FormControlLabel, Switch, TextField } from '@mui/material'

function DadosPessoais({aoEnviar, validarCPF}) {
   const [nome, setNome] = useState("")
   const [sobrenome, setSobrenome] = useState("")
   const [cpf, setCpf] = useState("")
   const [promocoes, setPromocoes] = useState(true)
   const [novidades, setNovidades] = useState(true)
   const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

   return (
      <form
         onSubmit={(e) => {
            e.preventDefault()
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
         }}>
         <TextField
            value={nome}
            onChange={ (e) => {
               setNome(e.target.value)         
            }}
            id='nome'
            label='Nome'
            variant='outlined'
            fullWidth
            margin='normal'
         />

         <TextField
            value={sobrenome}
            onChange={ (e) => {
              setSobrenome(e.target.value)
            }} 
            id='sobreNome' 
            label='Sobrenome' 
            variant='outlined' 
            fullWidth 
            margin='normal' 
         />

         <TextField
            value={cpf}

            onChange={ (e) => {
              setCpf(e.target.value)
            }}

            onBlur={() => {
               const ehValido = validarCPF(cpf)
               setErros({ cpf: ehValido })
            }}

            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id='cpf' 
            label='CPF' 
            variant='outlined' 
            fullWidth 
            margin='normal'
         />

         <FormControlLabel
            control={
               <Switch
                  checked={promocoes}
                  onChange={(e) => {
                     setPromocoes(e.target.checked)
                  }}
                  name='promocoes' 
                  defaultChecked={promocoes}
               />} 
            label="Promoções" 
         />

         <FormControlLabel
            control={
               <Switch
                  checked={novidades}
                  onChange={(e) => {
                     setNovidades(e.target.checked)
                  }}
                  name='novidades' 
                  defaultChecked={novidades}
               />} 
            label="Novidades" 
         />

         <Button type="submit" variant="contained">
            Cadastrar
         </Button>
      </form>
   )
}

export default DadosPessoais