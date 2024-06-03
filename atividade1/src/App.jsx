
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
      <div>
       <Header />
      </div>
      <Home />
      <Mission />
      <History />
      <Contact />
    </div>
      <div>
      <Footer />
    </div>
    </>
  )
}

export default App
