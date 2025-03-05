import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => (
        <React.Fragment key={todo._id}>
          <Todo 
            todo={todo} 
            onDelete={onClickDelete(todo)} 
            onComplete={onClickComplete(todo)} 
          />
          <hr />
        </React.Fragment>
      ))}
    </>
  )
}

export default TodoList
