export default function Saudacao({nome}) {
  
    function gerarSaudacao(algumNome){
        return `oi ${algumNome}, tudo bem?`
    }
    
    return(
    <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  )
}
