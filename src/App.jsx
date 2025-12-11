
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
