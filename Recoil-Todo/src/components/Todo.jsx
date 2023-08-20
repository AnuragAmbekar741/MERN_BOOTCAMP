import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { useRecoilState } from "recoil";
import { todoListState } from "../store/atoms/todoList";

const Todo = ({ todo, index }) => {
  const [todolist, setTodoList] = useRecoilState(todoListState);

  const item = (id) => {
    // console.log(todolist.find((item) => item.id == id));
    return todolist.find((item) => item.id == id);
  };

  const deleteItem = (id) => {
    return setTodoList(todolist.filter((item) => item.id != id));
  };

  const updateStatus = (id, index) => {
    var todoToUpdate = item(id);
    console.log(todoToUpdate);
    todoToUpdate = { ...todoToUpdate, status: true };
    const newList = [...todolist];
    newList.splice(index, 1, todoToUpdate);
    setTodoList(newList);
  };

  return (
    <div
      className={`border rounded-lg py-3 px-2 my-5 flex justify-between ml-3 w-[320px] ${
        todo.status ? "border-2 border-green-600" : "border-red-600"
      }`}
      key={todo.id}
    >
      <h2 className="text-black">{todo.todo}</h2>
      <div className="flex">
        <AiOutlineCheckCircle
          style={{
            fontSize: "1.5rem",
            marginLeft: "5px",
          }}
          onClick={() => updateStatus(todo.id, index)}
        />
        <RxCrossCircled
          style={{
            fontSize: "1.5rem",
            marginLeft: "5px",
          }}
          onClick={() => deleteItem(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
