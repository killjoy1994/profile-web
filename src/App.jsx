import About from "./components/About"
import Ceftificate from "./components/Ceftificate"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Home />
      <About />
      <Ceftificate />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
