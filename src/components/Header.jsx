import { motion } from "framer-motion";
import { FaBorderNone } from "react-icons/fa6";

const buttonVariants = {
  initial: { x: -1000 },
  animate: { x: 0, transition: { delay: 1 } },
  hover: { scale: 1.1, boxShadow: "0px 0px 8px #FF1414" },
};

const Header = () => {
  return (
    <div className="container px-4 lg:px-0" id="main">
      <div className="flex items-center justify-center h-[760px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-center"
        >
          <h1 className="text-white text-2xl lg:text-5xl font-bold tracking-wider">
            STEP UP YOUR{" "}
          </h1>
          <h1 className="text-4xl lg:text-7xl my-4 lg:my-4 lg:mb-8 text-white font-extrabold tracking-wider">
            <span className="text-[#FF1414]">FITNESS</span> WITH US
          </h1>
          <p className="text-gray-300 tracking-wider mb-6 lg:mb-8 leading-relaxed">
            Built Your Body And Fitness With Professional Touch
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
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
