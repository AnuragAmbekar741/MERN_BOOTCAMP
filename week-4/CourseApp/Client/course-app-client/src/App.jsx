import LoginSignup from "./components/Login-Signup/LoginSignup";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="bg-[#1E1E1E] h-screen">
          <LoginSignup />
        </div>
      </Provider>
    </>
  );
}

export default App;
