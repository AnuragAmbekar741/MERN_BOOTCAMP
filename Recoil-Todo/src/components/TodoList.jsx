import { useRecoilState } from "recoil";
import { todoListState } from "../store/atoms/todoList";
import Todo from "./Todo";

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <div>
      {todoList &&
        todoList.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
    </div>
  );
};

export default TodoList;
