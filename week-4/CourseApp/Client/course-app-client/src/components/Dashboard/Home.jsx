import { useState } from "react";
import CourseContainer from "./CourseContainer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AddCourse from "./AddCourse";

const Home = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="w-5/6 py-32 mx-auto h-screen">
      <div className="flex">
        <Navbar setFilter={setFilter} />
        <Sidebar />
        {/* <CourseContainer filter={filter} /> */}
        <AddCourse />
      </div>
    </div>
  );
};

export default Home;
