import { useRecoilValue } from "recoil";
import { todoListState } from "../store/atoms/todoList";
import Todo from "./Todo";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {todoList &&
        todoList.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })}
    </div>
  );
};

export default TodoList;
