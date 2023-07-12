import CourseContainer from "./CourseContainer";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="flex w-4/5 border border-white py-32 mx-auto">
      <Sidebar />
      <CourseContainer />
    </div>
  );
};

export default Home;
