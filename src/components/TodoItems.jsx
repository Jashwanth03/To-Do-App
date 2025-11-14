import React from "react";
import tick from "../assets/tick.png"; // Adjust to the actual file name
import notTick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggleTodo }) => {
  return (
    <div className="flex items-center my-2 gap-2">
      <div
        onClick={() => toggleTodo(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img
          src={isComplete ? tick : notTick}
          alt="Not Completed"
          className="w-7"
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-blue-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={deleteIcon}
        alt="Delete"
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
