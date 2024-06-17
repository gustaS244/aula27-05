import styles from './Produto.module.css'

export default function ProdutoContent() {
  return (
    <>
      <h3 className="">Conteudo Produtos</h3>
      <div className={styles.imgC}>
        <img src="https://pbs.twimg.com/profile_images/1494046092983517186/sfPdqJJS_400x400.jpg" alt="" />
        <img src="https://pbs.twimg.com/profile_images/1610453099323301892/RwtK8QDy_400x400.jpg" alt="" />
        <img src="https://pbs.twimg.com/media/FhnFE_yXgAEMI8r.jpg" alt="" />
        <img src="https://pbs.twimg.com/profile_images/1641391692652617729/9eom6BgG_400x400.jpg" alt="" />
      </div>
      <div className={styles.CapS}>
        <h2>Capivara Estudante R$500  </h2>
        <h2>Capivara Empresaria R$1500</h2>
        <h2>Capivara Gamer R$10000</h2>
        <h2>Capivara patriota R$5000 </h2>
        
        

      </div>
      
    </>
  )
}
