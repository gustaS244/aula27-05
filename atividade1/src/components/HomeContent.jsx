import styles from './Home.Content.module.css'

export default function HomeContent() {
  return (
    <header>
      <aside>
        <h3 className={styles.titleHomeContent}>Conteudo do Home</h3>
        <div className={styles.timg }>
        <img id='imgcap' src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10538/capivara-autorizacao-para-a-criacao-em-cativeiro-custos-e-comercializacao.jpg" alt="" />

        </div>
        <p className='capivara'>A capivara ou capincho é uma espécie de mamífero roedor da família Caviidae e subfamília Hydrochoerinae. Alguns autores consideram que deva ser classificada em uma família própria. Está incluída no mesmo grupo de roedores ao qual se classificam as pacas, cutias, os preás e o porquinho-da-índia.</p>
      </aside>
    </header>
  )
}
