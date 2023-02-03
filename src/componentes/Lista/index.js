import './lista.css'
const lista = (props) => {
    return( 
        <div className='lista'>
        <label>{props.label}</label>
        <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
            {props.itens.map(item => {
            return <option key={item}>{item}</option>
            })}
        </select>
        </div>
    )

}

export default lista