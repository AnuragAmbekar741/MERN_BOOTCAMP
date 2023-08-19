import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const Todo = (todo) => {
  return (
    <div
      className={`border rounded-lg py-3 px-2 my-5 flex justify-start ml-3 ${
        todo.status ? "border border-green-600" : "border-red-600"
      }`}
      key={todo.id}
    >
      <h2>{todo.todo}</h2>
      <AiOutlineCheckCircle
        className={`text-2xl ml-48 text-black`}
        onClick={() => {}}
      />
      <RxCrossCircled className={`text-2xl ml-2`} onClick={() => {}} />
    </div>
  );
};

export default Todo;
