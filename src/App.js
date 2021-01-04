import './App.css'
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core'
import db from './firebase'
import firebase from 'firebase'

import Todo from './Todo'
function App() {
  const [todos, setTodos] = useState([])

  const [input, setInput] = useState('')
  const setValueInput = (e) => {
    setInput(e.target.value)
  }
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo))
    })
  }, [])
  console.log(todos)

  const addTodo = (e) => {
    e.preventDefault()
    setInput('')

    try {
      db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='App'>
      <h2>Todo app {2 + 9}</h2>

      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo </InputLabel>
          <Input type='text' value={input} onChange={setValueInput} />
        </FormControl>
        <Button
          disabled={!input}
          type='submit'
          onClick={addTodo}
          variant='contained'
          color='primary'
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
