import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="w-full h-screen grid justify-center align-middle bg-slate-300">
          <div className="w-1/3">
            <Form />
            <TodoList />
          </div>
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
