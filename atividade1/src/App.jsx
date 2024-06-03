
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Header   from './components/Header'
import  Home     from './components/Home'
import  Mission  from './components/Mission'
import  History  from './components/History'
import  Contact  from './components/Contact'
import  Footer   from './components/Footer'
import './App.css'



function App() {

  return (
    <>
    
    <div>
       <Header />
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/Mission' element={<Mission />} />
            <Route path='/History' element={<History />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='' element={<NoPage />} />
            </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
    </>
  )
}

export default App
