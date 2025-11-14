import React from 'react'
import { useState } from 'react';

const AddTodo = ({onAdd}) => {

    const[text,setText] =useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = text.trim();
        if(!value) return;
        
        const newToDo ={
            id : Date.now(),
            text :text,
            completed : false,
        };
        onAdd(newToDo);
        setText("");

    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={text}
            onChange={e=>{setText(e.target.value)}}
            placeholder='Add a Task'/>
            <button type='submit'>Add Task</button>
    </form>

    </>
  )
}

export default AddTodo