import React,{useState}from 'react'

const TodoInput = (props) => {
    const [inputText,setInputText]=useState('');
    const handle=(e)=>{
        if(e.keyCode===13){
            props.addlist(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
        <input type="text" className='input-box-todo' 
        placeholder='Enter your task for the day'
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value
                )
        }}/>
        <button className="add-btn" onClick={()=>{
            props.addlist(inputText)
            setInputText("")
            }}>+</button>
       
    </div>
  )
}

TodoInput.propTypes = {

}

export default TodoInput

