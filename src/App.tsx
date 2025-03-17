import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
import imagePath from './assets/image.png'
import Footer from "./components/Footer";
import "./App.css"
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar brandName="" imageSrcPath={imagePath} />
      <Home />
      <Footer />
    </div>
  )
}

export default App
