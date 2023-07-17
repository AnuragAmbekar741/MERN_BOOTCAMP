import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourseList } from "../../redux/courseSlice";

import { RiDeleteBin7Fill } from "react-icons/ri";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    imageLink: "",
    published: false,
  });

  const Course = useSelector((store) => store.course);
  const CourseList = Course.CourseList;
  const CourseId = Course.SelectedCourseId;

  const Dispatch = useDispatch();

  if (CourseId == "") var btnName = "Submit";
  if (CourseId != "") btnName = "Update";

  useEffect(() => {
    if (CourseId != "") {
      const selectedCourse = CourseList.filter(
        (course) => course.id == CourseId
      )[0];
      setCourseData({
        title: selectedCourse.title,
        description: selectedCourse.description,
        price: selectedCourse.price,
        imageLink: selectedCourse.imageLink,
        published: selectedCourse.published,
      });
    }
  }, []);

  const TOKEN = sessionStorage.getItem("Token");

  const updateData = async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + TOKEN,
      },
      body: JSON.stringify({ ...courseData }),
    };
    const url = "http://localhost:3000/admin/courses/" + CourseId;
    const res = await fetch(url, options);
    if (res.ok) {
      alert("Course updated!");
    } else {
      alert("Failed!");
    }
    const json = await res.json();

    console.log(json);
    Dispatch(setCourseList(json.courses));
    console.log("Course list", CourseList);

    setCourseData({
      title: "",
      description: "",
      price: "",
      imageLink: "",
      published: "",
    });
  };

  const deleteData = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + TOKEN,
      },
      body: JSON.stringify({ ...courseData }),
    };
    const url = "http://localhost:3000/admin/courses/" + CourseId;
    const res = await fetch(url, options);
    if (res.ok) {
      alert("Course deleted!");
    } else {
      alert("Failed!");
    }
    const json = await res.json();

    console.log(json);
    Dispatch(setCourseList(json.courses));
    console.log("Course list", CourseList);
  };

  const postData = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + TOKEN,
      },
      body: JSON.stringify({ ...courseData }),
    };
    const url = "http://localhost:3000/admin/courses/";
    const res = await fetch(url, options);
    const json = await res.json();

    if (res.ok) {
      alert("Course added!");
    } else {
      alert("Failed!");
    }

    setCourseData({
      title: "",
      description: "",
      price: "",
      imageLink: "",
      published: "",
    });
  };

  return (
    <div className="grid p-9 w-3/5 h-[50vh] border border-[#4D4D4D] mt-4 ml-12 rounded-lg">
      <RiDeleteBin7Fill
        style={{
          position: "absolute",
          color: "white",
          fontSize: "2rem",
          marginLeft: "38rem",
          display: `${btnName == "Update" ? "block" : "none"}`,
        }}
        onClick={deleteData}
      />
      <h1 className="text-2xl font-semibold text-white">Add new course</h1>
      <div className="flex h-12  mr-3">
        <input
          className="w-[200px] border border-[#4D4D4D] px-2 text-xl placeholder:text-gray-400 focus:outline-none rounded-lg "
          placeholder="@Title"
          value={courseData.title}
          onChange={(e) =>
            setCourseData({ ...courseData, title: e.target.value })
          }
        />
        <input
          className="w-[200px] border border-[#4D4D4D] px-2 text-xl placeholder:text-gray-400 focus:outline-none rounded-lg mx-5"
          placeholder="@Price"
          value={courseData.price}
          onChange={(e) =>
            setCourseData({ ...courseData, price: e.target.value })
          }
        />
        <input
          className="w-[200px] border border-[#4D4D4D] px-2 text-xl placeholder:text-gray-400 focus:outline-none rounded-lg "
          placeholder="@Published status"
          value={false}
        />
      </div>
      <div className=" h-12 flex">
        <input
          className="w-full border mr-3 border-[#4D4D4D] px-2 text-xl placeholder:text-gray-400 focus:outline-none rounded-lg"
          placeholder="@Description"
          value={courseData.description}
          onChange={(e) =>
            setCourseData({ ...courseData, description: e.target.value })
          }
        />
      </div>
      <div className="flex h-12">
        <input
          type="text"
          className=" w-[530px] focus:outline-none px-2 rounded-lg text-xl"
          placeholder="@Image URL"
          value={courseData.imageLink}
          onChange={(e) =>
            setCourseData({ ...courseData, imageLink: e.target.value })
          }
        />
        <button
          className="text-white text-lg px-5 rounded-lg border ml-3"
          onClick={CourseId == "" ? postData : updateData}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
