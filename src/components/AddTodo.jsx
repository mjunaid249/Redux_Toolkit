import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="task"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            New Task
          </label>
          <input
            type="text"
            id="task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="task"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter a task..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
