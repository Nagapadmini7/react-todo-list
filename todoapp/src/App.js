
import './App.css';
import React, { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addlist=(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  const deletelistitem=(key)=>{
    let newlisttodo=[...listTodo];
    newlisttodo.splice(key,1)
    setListTodo([...newlisttodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addlist={addlist}/>
<h1 className="app-heading">TODO</h1>
<hr/>
{listTodo.map((listItem,i)=>{
  return (
    <TodoList  key ={i} index={i} item={listItem} delete={deletelistitem}/>
  )
})}
      </div>
    </div>
  );
}

export default App;
