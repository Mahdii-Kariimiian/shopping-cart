import React , { useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuvidv4} from "uuid"
import Todo from './Todo'
import { Box } from '@mui/material'

uuvidv4()

function TodoWrapper() {

  const [todos , setTodos] = useState([])

  const AddTodo = todo => {
    setTodos([...todos, {id: uuvidv4() , task: todo , completed: false , isEditing: false , delete: false}])
  }


  return (
    <Box>
      <TodoForm addTodo = {AddTodo} />
      {todos.map ((todo , index) => {
        return <Todo 
          key = {index}
          id = {index}
          task = {todo.task}
          completed = {todo.completed}
          isEditing = {todo.isEditing}
          delete = {todo.delete}
        />
      })}
    </Box>
    
  )
}

export default TodoWrapper
