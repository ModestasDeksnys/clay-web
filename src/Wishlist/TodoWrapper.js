import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid/v4';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), text: todo,
             completed: false, isEditing: false}])
        }
  return (
    <div className='todoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}
