import { useState } from "react";
import { todoListState } from "../store/atoms/todoList";
import { useSetRecoilState } from "recoil";

const Form = () => {
  const [input, setInput] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  function handleClick() {
    setTodoList((list) => [
      ...list,
      {
        id: Math.floor(Math.random() * 10000),
        todo: input,
        status: false,
      },
    ]);
    setInput("");
  }

  return (
    <div className="mt-20 grid">
      <h1 className="text-[50px] font-semibold text-center my-5 text-blue-400">
        Todo List
      </h1>
      <div className="flex justify-between h-12">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-3 py-2 mx-3 border-2 border-purple-400 bg-transparent rounded-lg focus:outline-none placeholder:text-blue-400 text-black text-lg font-medium"
          placeholder="@Add todo"
        />
        <button
          className="py-2 px-5 text-md text-white font-medium rounded-lg bg-purple-400"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
