import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
import imagePath from './assets/image.png'
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar 
      brandName="Cesar N" 
      imageSrcPath={imagePath} />
      <Footer />
    </div>
  )
}

export default App
