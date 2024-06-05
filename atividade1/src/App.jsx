
import { Routes, Route } from 'react-router-dom'
import  {Home}    from './components/Home'
import  {Contact} from './components/Contact'
import  {Header}  from './components/Header'
import  {History} from './components/History'
import  {Mission} from './components/Mission'
import  {Produto} from './components/Produto'
import  {Footer}  from './components/Footer'

import './App.css'



function App() {

  return (
  
    
    <div>
       <Header />

        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/mission' element={<Mission />} />
            <Route path='/history' element={<History />} />
            <Route path='/produto' element={<Produto />} />
            <Route path='/contato'element={<Contact />} />
           
        </Routes>
      

      <Footer/>

    </div>
  
  )
}

export default App
