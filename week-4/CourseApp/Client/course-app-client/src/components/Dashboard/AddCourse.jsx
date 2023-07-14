const AddCourse = () => {
  return (
    <div className="grid p-3 w-full h-[50vh] border border-white">
      <div className="flex h-12 justify-evenly">
        <input className="w-[250px] p-2 border border-[] rounded-lg " />
        <input className="w-[250px] p-2 border border-[] rounded-lg mx-2" />
        <input className="w-[250px] p-2 border border-[] rounded-lg " />
      </div>
      <div className="flex h-12 -mt-20">
        <input className="w-1/3 p-2 border border-[]  rounded-md" />
        <input className="w-2/3 p-2 border border-[] mx-2 rounded-md" />
      </div>
    </div>
  );
};

export default AddCourse;
