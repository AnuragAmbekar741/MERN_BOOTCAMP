import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const Todo = ({ status, id, todo }) => {
  return (
    <div
      className={`border rounded-lg py-3 px-2 my-5 flex justify-between ml-3 w-[290px] ${
        status ? "border border-green-600" : "border-red-600"
      }`}
      key={id}
    >
      <h2 className="text-black">{todo}</h2>
      <div className="flex">
        <AiOutlineCheckCircle
          style={{ fontSize: "1.5rem", marginLeft: "5px" }}
        />
        <RxCrossCircled style={{ fontSize: "1.5rem", marginLeft: "5px" }} />
      </div>
    </div>
  );
};

export default Todo;
