import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    id: 1,
    serviceTitle: "Weightlifting Class",
    serviceDetail:
      "Build strength and muscle mass with our weightlifting class.",
    classSchedule: {
      detail: "Focus on compound movements for overall fitness.",
      duration: "1 hour",
      fitnessLevel: "Intermediate",
      schedule: "Mon, Wed, Fri at 6:00 PM",
    },
    image: "../../public/1 (1).jpg",
  },
  {
    id: 2,
    serviceTitle: "Cardio Kickboxing",
    serviceDetail: "Boost your cardiovascular health and burn calories.",
    classSchedule: {
      detail: "High-energy workout with dynamic movements.",
      duration: "45 minutes",
      fitnessLevel: "Beginner to Advanced",
      schedule: "Tue, Thu at 7:30 AM",
    },
    image: "../../public/2.jpg",
  },
  {
    id: 3,
    serviceTitle: "Yoga and Meditation",
    serviceDetail: "Relax and rejuvenate your mind and body.",
    classSchedule: {
      detail: "Focus on breath control, flexibility, and mindfulness.",
      duration: "1 hour",
      fitnessLevel: "All levels",
      schedule: "Sat at 9:00 AM",
    },
    image: "../../public/3.jpg",
  }
];

const Services = () => {
  return (
    <div className="py-28 container px-4 lg:px-0">
      <h1 className="text-white text-md lg:text-xl font-bold tracking-wider text-center">
        OUR SERVICES
      </h1>
      <h1 className="text-3xl lg:text-6xl my-4 lg:my-4 lg:mb-8 text-white font-extrabold tracking-wider text-center">
        OUR<span className="text-[#FF1414]"> CLASSES</span>
      </h1>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-28 gap-6">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
