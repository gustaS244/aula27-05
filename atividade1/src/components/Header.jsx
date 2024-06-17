import { Link } from 'react-router-dom'
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header}>
      
      <ul className={styles.menu}>
        
        <li><Link to="./">Inicio</Link></li>
        <li><Link to='./Mission'>Missao</Link></li>
        <li><Link to='./Produto'>Produto</Link></li>
        <li><Link to='./History'>Historia</Link></li>
        <li><Link to='./Contact'>Contato</Link></li>
        
        

      </ul>
    </header>
  )
}


