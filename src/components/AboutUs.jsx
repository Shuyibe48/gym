import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const AboutUs = () => {
  return (
    <div
      className="lg:flex justify-center items-center gap-12 py-28 container px-4 lg:px-0"
      id="about"
    >
      <div className="w-full lg:w-1/2">
        <h1 className="text-white text-md lg:text-xl font-bold tracking-wider about">
          ABOUT US
        </h1>
        <h1 className="text-4xl lg:text-7xl my-4 lg:my-4 lg:mb-8 text-white font-extrabold tracking-wider">
          THE STORY BEHIND<span className="text-[#FF1414]"> OUR GYM</span>
        </h1>
        <p className="text-gray-400 tracking-wider mb-6 lg:mb-8 leading-relaxed">
          Quisque tortor risus, pharetra ut venenatis ac, rutrum eget ante fusce
          in convallis nibh felis rana hendrerit diam rhoncus eget sonec dictum
          acus element sifend nisa efficitur venenatis.
        </p>
        <ul className="text-gray-400 leading-relaxed">
          <li className="flex items-center gap-2 text-md">
            <span className="text-[#ff1414]">
              <FiCheck />
            </span>{" "}
            Over 15 years of experience
          </li>
          <li className="flex items-center gap-2 text-md">
            <span className="text-[#ff1414]">
              <FiCheck />
            </span>{" "}
            Certified Trainers
          </li>
          <li className="flex items-center gap-2 text-md">
            <span className="text-[#ff1414]">
              <FiCheck />
            </span>{" "}
            Exceptional work quality
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 about-img-sec flex justify-center">
        <div className="lg:bg-[#FF1414] w-full lg:w-96 lg:h-96 lg:relative">
          <motion.img
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="lg:absolute lg:bottom-5 lg:right-5"
            src="../../public/about.jpg"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
