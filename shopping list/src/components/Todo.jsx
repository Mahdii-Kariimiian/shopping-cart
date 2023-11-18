import React , { useReducer} from 'react'
import { Box , Typography , Card , Button , ButtonGroup , TextField } from "@mui/material"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// import { fatrash } from "@fortawesome/free-solid-svg-icons"
import "../App.css"

function Todo ( props ) {
  console.log(props)
  // useReducer
  const [state , dispatch] = useReducer(reducer, props)
  //reducer function
  function reducer (state, action) {
    switch (action.type) {
      case "delete" :
        return {...state , delete:!state.delete}
        break
      case "complete" : 
        return {...state , completed:!state.completed}
        break
      case "edit" : 
        return {...state , isEditing:!state.isEditing}
        break
      case "doneEditing" :
        return {...state , task:action.payload }
        break
      default :
        return state
    }
  }

  return (
    !state.delete && 
    <Card 
      sx={{
        display: state.delete ? "none" : "block" ,
        marginBlock: "12px", 
        padding: "6px" , display: "flex" , 
        alignItems: "center" ,
        backgroundColor: state.completed ? "#32b55796" : "initial"
      }}
        onClick={() => dispatch({type:"complete"})}
    >
      <Typography 
        sx={{
          display: state.isEditing ? "none" : "block" , 
          textDecoration: state.completed ? "line-through" : "none" ,
        }}
      > 
        {state.task}
      </Typography>
      <TextField 
        size='small' 
        required
        onClick={(e)=> e.stopPropagation()}
        onChange={(e)=>{dispatch({type: "doneEditing" , payload: e.target.value})}}
        sx={{display: state.isEditing ? "block" : "none" }}
        value={state.task} type='text'>
      </TextField>
      <ButtonGroup sx={{marginLeft: "auto"}} >
          <Button onClick={(e)=>{{
            e.stopPropagation()
            dispatch({type:"delete"})}}}
          >
            Delete
          </Button>
          <Button onClick={(e)=>{{
            e.stopPropagation()
            dispatch({type:"edit"})}}} 
          >
            Edit
          </Button>
      </ButtonGroup>
    </Card>
    
  )
}

export default Todo
