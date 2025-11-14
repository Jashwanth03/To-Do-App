import React, { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";
import todoIcon from "../assets/todo_icon.png"; // Adjust according to your asset file name/path

const Todo = () => {
  // For adding task (logic is not enabled till after 34:30)
  const inputRef = useRef(null); //get input for textfield
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

  const add = () => {
    const inputText = inputRef.current.value.trim(); //gets input

    if (inputText === "") {
      //if text is empty
      return null;
    }
    const newTodo = {
      //new object is created
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id); //return the elements whose id are Matching otherwise removed
    });
  };

  const toggleTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) return { ...todo, isComplete: !todo.isComplete }; //If the IDs match, it returns a new todo 
        // object copying all existing properties (...todo) but with the isComplete boolean property toggled (set to the opposite of its current value).
        return todo; //If the IDs do not match, returns the todo item unchanged.
      });
    });
  };

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList))
  },[todoList])

  return (
    <div className=" bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl">
      {/* Title Bar */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todoIcon} alt="Todo" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* Input Bar */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          type="text"
          ref={inputRef}
          placeholder="Add your task"
          className="
            bg-transparent border-0 outline-none flex-1 h-14
            pl-6 pr-2 placeholder:text-slate-600
          "
        />
        <button
          onClick={add}
          className="
            border-none rounded-full bg-blue-500 w-32 h-14 text-white text-lg font-medium cursor-pointer
          "
        >
          ADD
        </button>
      </div>

      {/* Todo Items */}
      <div>
        {todoList.map((items, index) => {
          return (
            <TodoItems
              key={index}
              text={items.text}
              id={items.id}
              isComplete={items.isComplete}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
