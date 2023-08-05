import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="w-full h-screen grid justify-center bg-slate-300">
          <Form />
          <TodoList />
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
