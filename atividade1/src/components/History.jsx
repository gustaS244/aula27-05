import HistoriContent from "./HistoriContent";


export function History(props) {
  return (
    <>
      <h1 className="nomehistoria">{props.nomeHistoria}</h1>
      
      <HistoriContent/>
    </>
  )
}

 
