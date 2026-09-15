import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Login from './components/Login'
import About from './components/About'
import Academics from './components/Academics'
import Facility from './components/Facility'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Admission from './components/Admission'
import WhatsApp from './components/Whatspp'
import Phone from './components/Phone'
const App=()=>{
  return (
   <BrowserRouter>
     <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path='/admission' element={<Admission/>}/>
        <Route path="/facilities" element={<Facility />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>}/>

      </Routes>
      <Phone/>
      <WhatsApp/>
      
   </BrowserRouter>
  )
}
export default App