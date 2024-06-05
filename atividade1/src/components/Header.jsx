
import { Link } from 'react-router-dom'
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header}>
      
      <ul className={styles.menu}>
        
        <li><Link to="./">home</Link></li>
        <li><Link to='./'>Missao</Link></li>
        <li><Link to='./'>Produto</Link></li>
        <li><Link to='./'>Historia</Link></li>
        <li><Link to='./'>Contato</Link></li>
        
        

      </ul>
    </header>
  )
}


