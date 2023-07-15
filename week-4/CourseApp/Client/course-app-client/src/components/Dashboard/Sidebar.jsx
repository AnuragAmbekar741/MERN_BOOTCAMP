// import { useEffect, useState } from "react";
import { TbSmartHome } from "react-icons/tb";
import { MdAddHome } from "react-icons/md";

import { useDispatch } from "react-redux";
import { setToggleTabs } from "../../redux/loginSlice";

const Sidebar = () => {
  const Dispatch = useDispatch();

  return (
    <div className="w-1/5 grid rounded-lg px-5 h-[80vh] mt-16">
      <button
        className="text-white text-xl border my-5 rounded-lg h-16"
        onClick={() => Dispatch(setToggleTabs())}
      >
        <MdAddHome
          style={{
            position: "absolute",
            margin: "-1px 0 0 1rem",
            fontSize: "2rem",
          }}
        />
        Add
      </button>
      <button
        className="text-white text-xl border rounded-lg -mt-[27rem] h-16"
        onClick={() => Dispatch(setToggleTabs())}
      >
        <TbSmartHome
          style={{
            position: "absolute",
            margin: "-1px 0 0 1rem",
            fontSize: "2rem",
          }}
        />
        Courses
      </button>
    </div>
  );
};

export default Sidebar;
