import React from 'react'

const TodoList = (props) => {
  return (
    <li className="list-item">
       {props.item}
        <span className='icons'>
            <i class="fa-sharp fa-solid fa-eraser icon-delete" 
            onClick={e=>{
                props.delete(props.index)
            }}></i>
        </span>
    </li>
  )
}

export default TodoList
