import icons from "./loginIcons.png";
import { useDispatch } from "react-redux";
import { toggleLogin, setToken, setCurrentUser } from "../../redux/loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Dispatch = useDispatch();

  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // const [res, setRes] = useState({});

  const url = "http://localhost:3000/admin/login/";

  const handleClick = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        username: formData.username,
        password: formData.password,
      },
    };
    // console.log(options);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .then((data) => {
        Dispatch(setToken(data.token));
        Dispatch(setCurrentUser(formData));
        Navigate("/Home");
      })
      .catch((error) => {
        alert(error);
      });
  };

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
            key={"uname"}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            className="p-2 my-2 w-full border border-[#4D4D4D] bg-transparent text-white font-semibold focus:outline-none focus:border-purple-500  placeholder:text-gray-300 placeholder:font-thin"
            type="text"
            placeholder="@ Password"
            key={"pass"}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <div className="flex">
            <input type="checkbox" />
            <p className="text-sm text-white font-thin mx-2">Remember me</p>
          </div>
        </div>
        <button
          className="bg-gradient-to-l from-purple-500 to-blue-500 ... p-3 text-xl font-semibold text-white  border-0 mt-5 mb-2"
          onClick={handleClick}
        >
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
