import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";

const CourseContainer = ({ filter }) => {
  const token = sessionStorage.getItem("Token");

  const [courses, setCourses] = useState([]);

  const fetchData = () => {
    const url = "http://localhost:3000/admin/courses/";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    console.log(options);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .then((data) => {
        setCourses(data.courses);
        console.log(data.courses);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filterCourses = courses.filter((course) =>
      course.title.includes(filter)
    );
    if (filterCourses.length > 0) {
      setCourses(filterCourses);
      filterCourses = [];
    } else {
      setCourses(courses);
    }
    console.log(filter);
  }, [filter]);

  return (
    <div className="w-4/5 text-white flex justify-start flex-wrap ml-2 h-[80vh] overflow-y-auto">
      {courses &&
        courses.map((course, index) => {
          return <CourseCard key={index} course={course} />;
        })}
    </div>
  );
};

export default CourseContainer;
