
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header}>
      
      <ul className={styles.menu}>
        
        <li><a href="/">home</a></li>
        <li><a href="./Mission">Missao</a></li>
        <li><a href="./Produto">Produto</a></li>
        <li><a href="./History">Historia</a></li>
        <li><a href="./Contact">Contato</a></li>
        
        

      </ul>
    </header>
  )
}


