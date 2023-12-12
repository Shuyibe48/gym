import Trial from "./Trial";
import { motion } from "framer-motion";

const News = () => {
  return (
    <div className="py-28 container px-4 lg:px-0" id="news">
      <div className="mb-28">
        <h1 className="text-white text-md lg:text-xl font-bold tracking-wider text-center">
          OUR LATEST
        </h1>
        <h1 className="text-3xl lg:text-6xl my-4 lg:my-4 lg:mb-8 text-white font-extrabold tracking-wider text-center">
          NEWS<span className="text-[#FF1414]"> LETTER</span>
        </h1>
      </div>
      <div className="lg:flex justify-between gap-6 items-center">
        <div className="lg:w-1/2 lg:h-screen">
          <div className="overflow-hidden h-2/3">
            <motion.img
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              src="../../public/news1.jpg"
              className="h-full"
              alt=""
            />
          </div>
          <div className="bg-[#FF1414] p-4 h-24">
            <p className="text-white font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              blanditiis
            </p>
            <p className="text-gray-300">31-12-2023 GTM: 18:05</p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-screen overflow-hidden">
          <div className="overflow-hidden h-2/3">
            <motion.img
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="h-full"
              src="../../public/news2.jpg"
              alt=""
            />
          </div>
          <div className="bg-[#FF1414] p-4 h-24">
            <p className="text-white font-bold">
              consectetur adipisicing elit. Placeat, blanditiis?
            </p>
            <p className="text-gray-300">15-01-2024 GTM: 18:05</p>
          </div>
        </div>
      </div>
      <div>
        <Trial />
      </div>
    </div>
  );
};

export default News;
