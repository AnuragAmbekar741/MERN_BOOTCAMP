import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ setFilter }) => {
  return (
    <div className="flex fixed w-3/5 justify-start p-2 border rounded-full -mt-20 ml-[18.3rem]">
      <input
        className="p-2 rounded-tl-full rounded-bl-full focus:outline-none w-2/3"
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className="border-0 py-2 pr-3 rounded-tr-full rounded-br-full bg-white ">
        <BsSearch style={{ color: "black", fontSize: "1.5rem" }} />
      </button>
      <CgProfile
        style={{
          color: "#2c75ff",
          fontSize: "2.7rem",
          position: "absolute",
          marginLeft: "50rem",
          marginTop: "-1px",
        }}
      />
    </div>
  );
};

export default Navbar;
