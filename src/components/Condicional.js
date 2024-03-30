import { useState } from "react"

export default function Condicional() {
  
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviaEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        setUserEmail('')
    }
  
    return (
    <div>
      <h2>Cadastre seu e-mail</h2>
      <form>
        <input type='email' placeholder='Digite seu e-mail...' onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" onClick={enviaEmail}>Envie seu e-mail</button>
        {userEmail &&(
            <div>
                <p>email é: {userEmail}</p>
                <button onClick={limparEmail}>Limpe o email</button>
            </div>
        )}
      </form>
    </div>
  )
}

