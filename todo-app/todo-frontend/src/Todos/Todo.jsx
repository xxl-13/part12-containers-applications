import React from 'react'

const Todo = ({ todo, onDelete, onComplete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text}
      </span>
      {todo.done ? (
        <>
          <span>This todo is done test</span>
          <span>
            <button onClick={onDelete}> Delete </button>
          </span>
        </>
      ) : (
        <>
          <span>
            This todo is not done
          </span>
          <span>
            <button onClick={onDelete}> Delete </button>
            <button onClick={onComplete}> Set as done </button>
          </span>
        </>
      )}
    </div>
  )
}

export default Todo
