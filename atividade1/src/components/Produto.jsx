import ProdutoContent from "./ProdutoContent";


export function Produto(props) {
    
    return (
      <>
        <h1>{props.NossosProdutos}</h1>
        
        <ProdutoContent/>
      </>
    )
}


