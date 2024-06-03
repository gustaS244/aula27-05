import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      
      <ul className={styles.menu}>
        
        <li><a href="">home</a></li>
        <li><a href="">Missao</a></li>
        <li><a href="">Produto</a></li>
        <li><a href="">Historia</a></li>
        <li><a href="">Contato</a></li>
        
        

      </ul>
    </header>
  )
}

export default Header
