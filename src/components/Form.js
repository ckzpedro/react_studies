import { useState } from "react"

export default function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`Usuário ${name} tem a senha ${password}`)
        alert('cadastrado')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>

                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>

            </form>
        </div>
    )
}
