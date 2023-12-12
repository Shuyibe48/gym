import { FaPhone } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: { x: -1000 },
  animate: { x: 0, transition: { delay: 1 } },
  hover: { scale: 1.1, boxShadow: "0px 0px 8px #FF1414" },
};

const contacts = [
  {
    id: 1,
    icon: <FaPhone />,
    serviceName: "Phone",
    description: "+8801643867351",
  },
  {
    id: 2,
    icon: <FaSearchLocation />,
    serviceName: "Location",
    description:
      "Dhaka 102, m eros justo, posuer oborti viverra laor house of street",
  },
  {
    id: 3,
    icon: <FaEnvelopeSquare />,
    serviceName: "24/7",
    description: "shuyibesiddiki@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="py-28 container px-4 lg:px-0" id="contact">
      <div className="lg:flex justify-center items-center gap-x-4 text-center mb-12">
        {contacts.map((contact) => {
          return (
            <div
              className="bg-[#09101A] p-8 rounded-md serviceCard lg:w-1/3"
              key={contact.id}
            >
              <button className="bg-[#FF1414] text-white text-5xl p-2 rounded-md">
                {contact.icon}
              </button>
              <div>
                <h3 className="text-cyan-50 text-2xl font-medium my-4">
                  {contact.serviceName}
                </h3>
                <p className="text-cyan-50 text-md leading-snug">
                  {contact.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-[#13161A] font-medium text-cyan-50 outline-none bg-transparent rounded-md"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-[#13161A] font-medium text-cyan-50 outline-none bg-transparent rounded-md"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border border-[#13161A] font-medium text-cyan-50 outline-none bg-transparent rounded-md"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="url"
            id="website"
            name="website"
            className="mt-1 p-2 w-full border border-[#13161A] font-medium text-cyan-50 outline-none bg-transparent rounded-md"
            placeholder="Your Website"
            required
          />
        </div>

        <div className="col-span-2 mb-4">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border border-[#13161A] font-medium text-cyan-50 outline-none bg-transparent rounded-md"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <div className="col-span-2 text-center">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-[#FF1414] hover:bg-transparent
           rounded-md text-gray-200 px-8 py-3 tracking-wider leading-relaxed"
          >
            SUBMIT
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
