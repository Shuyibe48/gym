import FeatureBox from "./Featurebox";
import {
  FaGalacticSenate,
  FaRebel,
  FaUbuntu,
  FaYinYang,
} from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: <FaGalacticSenate />,
    tittle: "State-of-the-Art Equipment",
    detail: "Highlight the gym cutting-edge and modern exercise equipment.",
  },
  {
    id: 2,
    icon: <FaRebel />,
    tittle: "Expert Personal Training",
    detail:
      "Emphasize the availability of professional trainers for personalized fitness guidance.",
  },
  {
    id: 3,
    icon: <FaUbuntu />,
    tittle: "Diverse Fitness Classes",
    detail:
      "Showcase a variety of fitness classes offered, appealing to different interests and fitness levels.",
  },
  {
    id: 4,
    icon: <FaYinYang />,
    tittle: "24/7 Access and Convenience",
    detail:
      "Promote the convenience of 24/7 gym access, catering to varying schedules and preferences.",
  },
];

const Feature = () => {
  return (
    <div className="lg:pb-28 container px-4 lg:px-0" id="feature">
      <h1 className="text-white text-center text-2xl lg:text-4xl font-bold mb-4">
        FEATURES
      </h1>
      <p className="text-gray-300 text-center lg:w-1/3 mx-auto">
        Experience a Range of Fitness Classes Designed for Various Interests and
        Fitness Levels.
      </p>
      <div className="grid mt-28 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureBox key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
