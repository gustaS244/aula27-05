import ContactContent from "./ContactContent";

export function Contact(props) {
  return (
    <>
      <h1>{props.nomeContact}</h1>
      
      <ContactContent/>
    </>
  )
}


