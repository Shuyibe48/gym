import { motion } from "framer-motion";

const buttonVariants = {
  initial: { x: -1000 },
  animate: { x: 0, transition: { delay: 1 } },
  hover: { scale: 1.1, boxShadow: "0px 0px 8px #FF1414" },
};
const FeatureBox = ({ feature }) => {
  return (
    <motion.div
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="p-8"
    >
      <div className="flex justify-center">
        <span className="text-7xl text-red-600">{feature.icon}</span>
      </div>
      <div className="text-center">
        <h2 className="text-white text-xl font-bold tracking-wider mt-20 mb-6">
          {feature.tittle}
        </h2>
        <p className="text-gray-300 text-sm tracking-wide">{feature.detail}</p>
      </div>
    </motion.div>
  );
};

export default FeatureBox;
