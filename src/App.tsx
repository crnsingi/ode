import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
import imagePath from './assets/image.png'

const App = () => {
  return (
    <div>
      <NavBar 
      brandName="Cesar N" imageSrcPath={imagePath} />
    </div>
  )
}

export default App
