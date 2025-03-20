import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath from "./assets/image.png";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import HomeIcons from "./components/HomeIcons";

const App = () => {

  const navItems = ["Home", "About", "Contact"];
  
  return (
    <div>
      <Navbar brandName="" imageSrcPath={imagePath} navItems={navItems} />
      <Home />
      <HomeIcons />
      <Footer />
    </div>
  );
};

export default App;
