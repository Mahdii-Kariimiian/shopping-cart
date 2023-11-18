import React from 'react'
import { useState } from'react'
import { Button , TextField , Stack } from '@mui/material'

function TodoForm({addTodo}) {
  
  const [value , setValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  } 
  return (
   
      <form onSubmit={handleSubmit}>
         <Stack direction={"column"} spacing={2} >
        <TextField variant='outlined' required size='small'
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='Task'
          value={value}
        />
        <Button variant="contained"  type='submit'>Submit</Button>
        </Stack>
      </form>
    
  )
}

export default TodoForm
