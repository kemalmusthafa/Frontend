import Navbar from "./components/navbar"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import HomePage from "./pages/home"
import { Routes, Route } from 'react-router-dom'

function App() {
  const name: string = "Kemal Musthafa"
  return (
    <div>
      <Navbar name = {name} />
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/about" element = {<AboutPage />}/>
        <Route path="/contact" element = {<ContactPage />}/>
      </Routes>
    </div>
  )
}

export default App
