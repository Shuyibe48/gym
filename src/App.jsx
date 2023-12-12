import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Services from "./components/Services";
import Explore from "./components/explore";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Header />
      <Feature />
      <AboutUs />
      <Explore />
      <Services />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
