import "./CampoTexto.css"
import { userState } from 'react'
const CampoTexto = (props) =>{   
    
    
    const Digitado = (evento) =>{
        props.Alterado(evento.target.value)
    }
    return(

        <div className="campoTexto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={Digitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )

}

export default CampoTexto;