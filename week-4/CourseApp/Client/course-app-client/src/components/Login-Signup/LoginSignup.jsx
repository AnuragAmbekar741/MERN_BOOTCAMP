import { useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";

const LoginSignup = () => {
  const loginToggle = useSelector((store) => store.loginToggle.isLogin);
  return <>{loginToggle && loginToggle ? <Login /> : <Signup />}</>;
};

export default LoginSignup;
