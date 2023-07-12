import icons from "./loginIcons.png";
import { useDispatch } from "react-redux";
import { setToken, setCurrentUser, toggleLogin } from "../../redux/loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [validate, setValidate] = useState({
    uname: formData.username == "" ? false : true,
    pass: formData.username == "" ? false : true,
    cpass: formData.username == "" ? false : true,
  });

  const validateForm = () => {
    if (formData.username != "") {
      setValidate({ ...validate, uname: true });
      return true;
    }

    if (formData.password != "") {
      setValidate({ ...validate, pass: true });
      return true;
    }

    if (formData.confirmPassword != "") {
      setValidate({ ...validate, cpass: true });
      return true;
    }

    if (formData.password == formData.confirmPassword) {
      setValidate({ ...validate, pass: true, cpass: true });
      return true;
    }

    return false;
  };

  const handleClick = () => {
    const url = "http://localhost:3000/admin/signup/";

    const validate = validateForm();
    console.log(formData);
    console.log(validate);
    if (!validate) return;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    };
    // console.log(options);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .then((data) => {
        Dispatch(setToken(data.token));
        Dispatch(
          setCurrentUser({
            username: formData.username,
            password: formData.password,
          })
        );
        Navigate("/Home");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="w-full flex justify-end py-[8.5rem] pr-[10rem]">
      <div className=" w-1/3 grid border  border-[#4D4D4D] p-7">
        <h1 className="text-3xl font-semibold text-white">Signup</h1>
        <p className="text-md text-white font-light">
          We are glad you are back!
        </p>
        <div className="my-5">
          <input
            className={`p-2 my-2 w-full border ${
              validate.uname ? "border-[#4D4D4D]" : "border-red-300"
            } bg-transparent text-white font-semibold focus:outline-none focus:border-sky-600 placeholder:text-gray-300 placeholder:font-thin`}
            type="text"
            value={formData.username}
            onChange={(e) => {
              validateForm();
              setFormData({ ...formData, username: e.target.value });
            }}
            placeholder="@ Email"
          />
          <input
            className={`p-2 my-2 w-full border ${
              validate.pass ? "border-[#4D4D4D]" : "border-red-300"
            } bg-transparent text-white font-semibold focus:outline-none focus:border-purple-500  placeholder:text-gray-300 placeholder:font-thin`}
            type="text"
            value={formData.password}
            onChange={(e) => {
              validateForm();
              setFormData({ ...formData, password: e.target.value });
            }}
            placeholder="@ Password"
          />
          <input
            className={`p-2 my-2 w-full border ${
              validate.cpass ? "border-[#4D4D4D]" : "border-red-300"
            } bg-transparent text-white font-semibold focus:outline-none focus:border-purple-500  placeholder:text-gray-300 placeholder:font-thin`}
            type="text"
            value={formData.confirmPassword}
            placeholder="@ Confirm Password"
            onChange={(e) => {
              validateForm();
              setFormData({ ...formData, confirmPassword: e.target.value });
            }}
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
          Signup
        </button>
        <div className="flex justify-center align-middle my-3">
          <div className="w-1/2 h-0 border-[0.3px] border-[#4D4D4D] my-auto"></div>
          <h1 className="text-xl mx-2 font-thin text-[#4D4D4D]">Or</h1>
          <div className="w-1/2 h-0 border-[0.3px]  border-[#4D4D4D]  my-auto"></div>
        </div>{" "}
        <img className="mx-auto w-1/4 mb-5" src={icons} alt="" />
        <p
          className="text-white text-sm font-light text-center cursor-pointer"
          onClick={() => Dispatch(toggleLogin())}
        >
          Already an user? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;
