
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
          <Route path='/' element={<Home 
          nomePagina='Pagina Inicial'
          paginaPrincipal='Destalhamento de toda Pagina'
          />} />

          <Route path='/mission' element={<Mission nomeMissoes='Missoes'
          paginaPrincipal='Detalhes das Missoes'
          />} />

          <Route path='/history' element={<History nomeHistoria='Historia'
          paginaPrincipal='Historias'
          />} 
          />
          <Route path='/produto' element={<Produto NossosProdutos='Produtos'
          paginaPrincipal='seçao de produtos'
          />} />

          <Route path='/Contact'element={<Contact/>} />
           
        </Routes>
      

      <Footer nomefooter='Footer'/>

    </div>
  
  )
}

export default App
