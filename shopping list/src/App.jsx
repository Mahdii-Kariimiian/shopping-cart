import React from "react";
import TodoWrapper from './components/TodoWrapper'
import { Box , Typography , Stack } from '@mui/material'

function App() {

  return (
    <Box sx={{display: "flex",
      justifyContent: "center"}}
    >
      <Stack sx={{
        width: "600px" 
        }}
      >
        <Typography whiteSpace={"nowrap"} textAlign={"center"} variant='h3' component="h1" padding={6}>
          To Do List
        </Typography>
        <TodoWrapper />
      </Stack>
    </Box>
  )
}

export default App
