import { Button, TextField } from '@mui/material'
import React from 'react'

function DadosUsuario({aoEnviar}) {
   return (
      <form onSubmit={(e) => {
         e.preventDefault()
         aoEnviar()
      }}>
         <TextField
            id='email'
            label='email'
            type='email'
            required
            variant='outlined' 
            fullWidth 
            margin='normal'
         />
         <TextField
            id='senha'
            label='senha'
            type='password'
            required
            variant='outlined' 
            fullWidth 
            margin='normal'
         />
         <Button 
            type='submit'
            variant="contained"
            >cadastrar
         </Button>
      </form>
   )
}

export default DadosUsuario