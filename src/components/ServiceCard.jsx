import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const ServiceCard = ({ service }) => {
  return (
    <div className="serviceCard relative overflow-hidden">
      <div>
        <motion.img transition={{duration: .3}} whileHover={{ scale: 1.1 }} src={service.image} alt="" />
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 30 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: 0 }}
        className="absolute bottom-0 gradient w-full pt-12"
      >
        <h1 className="text-white text-md lg:text-xl lg:text-2xl font-bold tracking-wider text-center uppercase">
          {service.serviceTitle}
        </h1>
        <div className="bg-red-500 serviceCardLine mx-auto my-6"></div>
        <div className="flex justify-center items-center">
          <span className="text-white text-xl lg:text-3xl">
            <LuArrowRight />
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
