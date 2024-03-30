import PropTypes from 'prop-types'

export default function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'faltou marca',
    ano_lancamento: 0
}