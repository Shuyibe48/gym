import { CiPlay1 } from "react-icons/ci";

const Explore = () => {
  return (
    <div className="py-28 container px-4 lg:px-0 explore">
      <h1 className="text-white text-md lg:text-xl font-bold tracking-wider text-center">
        BE INSPIRED
      </h1>
      <h1 className="text-3xl lg:text-6xl my-4 lg:my-4 lg:mb-8 text-white font-extrabold tracking-wider text-center">
        EXPLORE LIFE<span className="text-[#FF1414]"> GYM</span>
      </h1>
      <span className="flex justify-center items-center">
        <span className="border-2 text-[#FF1414] text-3xl lg:text-5xl border-gray-300 p-6 rounded-full">
            <CiPlay1 />
        </span>
      </span>
    </div>
  );
};

export default Explore;
