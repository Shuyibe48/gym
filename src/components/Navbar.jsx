import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaAlignJustify, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [fold, setFold] = useState(false);

  const handleFold = () => {
    setFold(!fold);
  };

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
      className={
        nav
          ? "nav container px-4 py-4 lg:px-0 bg-[#030303] z-50"
          : "nav container px-4 py-4 lg:px-0 z-50"
      }
    >
      <Link to="main" className="logo cursor-pointer">
        <h2 className="text-4xl font-extrabold text-white">
          Gym<span className="text-[#FF1414]">.</span>
        </h2>
      </Link>

      <div>
        <div className="lg:hidden">
          <h1 className="text-white">
            {fold ? (
              <span onClick={handleFold}>
                <FaX />
              </span>
            ) : (
              <span onClick={handleFold}>
                <FaAlignJustify />
              </span>
            )}
          </h1>
        </div>
      </div>

      <ul
        className={`bg-[#030303] lg:bg-transparent text-fuchsia-50 lg:flex ${
          fold ? "block" : "hidden"
        } lg:block ${fold ? "absolute top_72 text-center w-full" : ""}`}
      >
        <li className="cursor-pointer">
          <Link to="main">HEADER</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="feature">FEATURES</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about">ABOUT US</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="explore">EXPLORE</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="services">SERVICES</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="news">NEWS LETTER</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
