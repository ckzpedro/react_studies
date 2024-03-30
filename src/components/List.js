import Item from "./Item"

export default function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Renault' ano_lancamento={1985}/>
                <Item marca='Ferrari' ano_lancamento={1964}/>
                <Item marca='Fiat' ano_lancamento={2000}/>
            </ul>
        </> 
    )
}