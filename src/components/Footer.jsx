import { motion } from "framer-motion";

const buttonVariants = {
  animate: { transition: { delay: 1 } },
  hover: { scale: 1.1, boxShadow: "0px 0px 8px #FF1414" },
};

const Footer = () => {
  return (
    <footer className="bg-black container mx-auto text-gray-300 pt-28 pb-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-white">CONTACT</h2>
          <p>0665 Broadway NY, New York 10001</p>
          <p>United States of America</p>
          <p>Phone: +1 203-123-0606</p>
          <p>Email: info@nostop.com</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-white">OPENING HOURS</h2>
          <p>Monday - Friday: 06:00 - 22:00</p>
          <p>Saturday: 08:00 - 17:00</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-white">SUBSCRIBE</h2>
          <p>
            Subscribe to take advantage of our campaigns and gift certificates.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent bg-gray-900 text-white ps-2 py-3 tracking-wider leading-relaxed rounded-l"
            />
            <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-[#FF1414] hover:bg-transparent
           rounded-md text-gray-200 px-8 py-3 tracking-wider leading-relaxed"
          >
            SUBSCRIBE
          </motion.button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 pt-4 flex justify-between items-center">
        <p>&copy; 2023 All rights reserved. Designed by DuruThemes</p>
      </div>
    </footer>
  );
};

export default Footer;