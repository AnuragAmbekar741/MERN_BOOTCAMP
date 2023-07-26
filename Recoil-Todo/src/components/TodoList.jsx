import { useRecoilValue } from "recoil";
import { todoListState } from "../store/atoms/todoList";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <div>
      {todoList.map((todo) => (
        <div key={todoItem.id}></div>
      ))}
    </div>
  );
};

export default TodoList;
