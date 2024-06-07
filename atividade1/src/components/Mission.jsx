import MissionContent from "./MissionContent";

export function Mission(props) {
  return (
    <>
      <h1>{props.nomeMissoes}</h1>
      
      <MissionContent/>
    </>
  )
}


