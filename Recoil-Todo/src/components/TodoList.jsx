import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../store/atoms/todoList";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  function changeStatus(item, status) {
    const newList = todoList.filter((todo) => todo.id !== item.id);
    newList.push({ ...item, status: status });
    console.log(newList);
    setTodoList(newList);
  }
  return (
    <div>
      {todoList &&
        todoList.map((todo) => {
          return (
            <div
              className={`border rounded-lg py-3 px-2 my-5 flex justify-start ml-3 ${
                todo.status ? "border border-green-600" : "border-red-500"
              }`}
              key={todo.id}
            >
              <h2>{todo.todo}</h2>
              <AiOutlineCheckCircle
                className={`text-2xl ml-48`}
                onClick={() => {
                  changeStatus(todo, true);
                }}
              />
              <RxCrossCircled
                className={`text-2xl ml-2`}
                onClick={() => {
                  changeStatus(todo, false);
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
