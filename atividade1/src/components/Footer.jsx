import styles from './Footer.module.css'

export function Footer(props) {
  return (
   <footer className={styles.footer}>

    <h1>{props.nomefooter}</h1>
    

   </footer>
      
  )
}


