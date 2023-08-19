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
    <div className="flex mt-40 justify-between h-12">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-3 py-2 mx-3 border border-black rounded-lg focus:outline-none"
        placeholder="@Add todo"
      />
      <button
        className="border border-black py-2 px-5 rounded-lg"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default Form;
