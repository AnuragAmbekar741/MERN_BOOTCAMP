import icons from "./loginIcons.png";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../redux/loginSlice";

const Login = () => {
  const Dispatch = useDispatch();

  return (
    <div className="w-full flex justify-end py-[8.5rem] pr-[10rem]">
      <div className=" w-1/3 grid border  border-[#4D4D4D] p-7">
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <p className="text-md text-white font-light">
          We are glad you are back!
        </p>
        <div className="my-5">
          <input
            className="p-2 my-2 w-full border border-[#4D4D4D] bg-transparent text-white font-semibold focus:outline-none focus:border-sky-600 placeholder:text-gray-300 placeholder:font-thin"
            type="text"
            placeholder="@ Username"
          />
          <input
            className="p-2 my-2 w-full border border-[#4D4D4D] bg-transparent text-white font-semibold focus:outline-none focus:border-purple-500  placeholder:text-gray-300 placeholder:font-thin"
            type="text"
            placeholder="@ Password"
          />
          <div className="flex">
            <input type="checkbox" />
            <p className="text-sm text-white font-thin mx-2">Remember me</p>
          </div>
        </div>
        <button className="bg-gradient-to-l from-purple-500 to-blue-500 ... p-3 text-xl font-semibold text-white  border-0 mt-5 mb-2">
          Login
        </button>
        <p className="text-sm font-thin text-white text-center mb-3">
          Forgot password?
        </p>
        <div className="flex justify-center align-middle my-4">
          <div className="w-1/2 h-0 border-[0.3px] border-[#4D4D4D] my-auto"></div>
          <h1 className="text-xl mx-2 font-thin text-[#4D4D4D]">Or</h1>
          <div className="w-1/2 h-0 border-[0.3px]  border-[#4D4D4D]  my-auto"></div>
        </div>{" "}
        <img className="mx-auto w-1/4 mb-10" src={icons} alt="" />
        <p
          className="text-white text-sm font-light text-center cursor-pointer"
          onClick={() => Dispatch(toggleLogin())}
        >
          Need an account? Signup
        </p>
      </div>
    </div>
  );
};

export default Login;
