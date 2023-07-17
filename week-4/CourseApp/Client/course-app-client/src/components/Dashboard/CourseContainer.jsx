import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";

import { setCourseList, setCourse } from "../../redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";

const CourseContainer = ({ filter }) => {
  const token = sessionStorage.getItem("Token");
  // const [courses, setCourses] = useState([]);

  const CourseList = useSelector((store) => store.course.CourseList);
  const Dispatch = useDispatch();
  Dispatch(setCourse(""));

  const fetchData = () => {
    const url = "http://localhost:3000/admin/courses/";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    // console.log(options);
    if (CourseList.length == 0) {
      fetch(url, options)
        .then((res) => {
          if (!res.ok) throw new Error(res.status);
          else return res.json();
        })
        .then((data) => {
          // setCourses(data.courses);
          Dispatch(setCourseList(data.courses));
          console.log(CourseList);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (filter != "") {
  //     let filterCourses = courses.filter((course) =>
  //       course.title.includes(filter)
  //     );
  //     if (filterCourses.length > 0) {
  //       setCourses(filterCourses);
  //       filterCourses = [];
  //     } else {
  //       setCourses(courses);
  //     }
  //     console.log(filter);
  //   }
  // }, [filter]);

  return (
    <div className="w-4/5  mt-4 text-white flex justify-start flex-wrap ml-2 h-[80vh] overflow-y-auto">
      {CourseList &&
        CourseList.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
    </div>
  );
};

export default CourseContainer;
