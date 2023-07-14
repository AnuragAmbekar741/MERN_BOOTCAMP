import store from "./redux/store";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignup from "./components/Login-Signup/LoginSignup";
import Home from "./components/Dashboard/Home";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="w-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginSignup />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
}

export default App;
