import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Sponsers from "./Sponsor";

const buttonVariants = {
  initial: { x: -1000 },
  animate: { x: 0, transition: { delay: 1 } },
  hover: { scale: 1.1, boxShadow: "0px 0px 8px #FF1414" },
};

const Trial = () => {
  return (
    <div className="trial relative container px-4 lg:px-0 z-20 py-28">
      <div
        className="lg:flex justify-center items-center gap-12 py-8container px-4 lg:px-0 z-20"
        id="trial"
      >
        <div className="w-full lg:w-1/2 lg:ps-8">
          <h1 className="text-white text-md lg:text-xl font-bold tracking-wider">
            FREE TRIAL TRAINING
          </h1>
          <p className="text-gray-400 tracking-wider mb-6 lg:mb-8 leading-relaxed">
            FREE TRIAL TRAINING Make an appointment today for your free and
            non-binding trial session with or without one of our personal
            trainers.
          </p>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-[#FF1414] hover:bg-transparent
           rounded-md text-gray-200 px-8 py-3 tracking-wider leading-relaxed"
          >
            JOIN US
          </motion.button>
        </div>

        <div className="w-full lg:w-1/2 about-img-sec flex justify-center mt-12 lg:mt-0 z-20">
          <div className="w-full bg-black p-8">
            <h1 className="text-2xl lg:text-4xl my-4 lg:my-4 lg:mb-8 text-white font-extrabold tracking-wider">
              WHAT<span className="text-[#FF1414]"> CLIENTS </span>SAY
            </h1>
            <p className="text-gray-400 tracking-wider mb-6 lg:mb-8 leading-relaxed">
              Quisque tortor risus, pharetra ut venenatis ac, rutrum eget ante
              fusce in convallis nibh felis rana hendrerit diam rhoncus eget
              sonec dictum acus element sifend nisa efficitur venenatis.
            </p>
            <div className="flex justify-start items-center gap-4">
              <img
                className="w-20 h-20 rounded-full border-2 border-gray-300 p-2"
                src="../../public/customer.jpg"
                alt="client"
              />
              <div>
                <h5 className="text-white">John Doe</h5>
                <p className="text-gray-300 text-sm">Client Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sponsor absolute bottom-0 z-10">
        <Sponsers />
      </div>
    </div>
  );
};

export default Trial;
