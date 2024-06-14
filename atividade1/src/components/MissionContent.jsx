import styles from './Mission.module.css'

export default function MissionContent() {
  return (
    <>
       <h3 className={styles.titleMissions}></h3>
        <div className={styles.Mimg }>
        <img id='imgM' src="https://pbs.twimg.com/profile_images/1610453099323301892/RwtK8QDy_400x400.jpg" alt="" />

      </div>
      <p> O nosso site sobre capivaras tem como objetivo principal fornecer informações abrangentes e divertidas sobre esses adoráveis roedores, incluindo fatos interessantes, fotos encantadoras, vídeos cativantes e dicas para preservar e proteger as capivaras em seu habitat natural. Queremos criar uma comunidade online dedicada a compartilhar amor e apreciação por esses animais únicos, enquanto promovemos a conscientização sobre a importância da conservação da vida selvagem.</p>
    </>
  )
}


