import AboutUs from "./components/AboutUs";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Header />
      <Feature />
      <AboutUs />
    </div>
  );
}

export default App;
