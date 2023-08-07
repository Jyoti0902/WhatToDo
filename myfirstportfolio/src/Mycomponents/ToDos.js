import React from 'react'
import TodoItem from './TodoItem';

export default function ToDos(props) {
  let myStyle = {
    minHeight: "100vh",
    margin: "50px auto"
  }
  return (
    <div className='container p-3 bg-dark text-white' style={myStyle}>
      <h2 className='text-center my-3'>My&nbsp;ToDos&nbsp;List</h2>
      {props.todos.length === 0 ? "No ToDos to display" :
        props.todos.map((todo) => {
          console.log(todo.sno);
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          )
        })
      }
    </div>
  )
}
