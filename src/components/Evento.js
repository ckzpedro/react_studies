import Button from "./evento/Button"

export default function Evento(){
    
    function meuEvento(){
        alert(`ativando primeiro evento`)
    }

    function segundoEvento(){
        alert('ativando segundo evento')
    }

    return(
        <>
            <p>Dispare o evento</p>
            <Button event={meuEvento} text='Primeiro evento'/>
            <Button event={segundoEvento} text='Segundo evento'/>
        </>
    )
}