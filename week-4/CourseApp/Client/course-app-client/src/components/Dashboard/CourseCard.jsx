const CourseCard = ({ course }) => {
  const { title, price, imageLink } = course;
  return (
    <div className="max-w-[300px] p-2 mx-2 mb-4 mt-0 h-[220px] border-2 border-[#4D4D4D] rounded-lg">
      <img src={imageLink} alt="" className="w-[280px]" />
      <div className="flex justify-between mt-3">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <h5 className="text-lg font-light text-white">Rs {price}/-</h5>
      </div>
    </div>
  );
};

export default CourseCard;
