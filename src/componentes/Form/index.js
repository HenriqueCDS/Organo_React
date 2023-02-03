import './Form.css';
import CampoTexto from '../campoTexto';
import Lista from '../Lista';
import Botao from '../Botao';
import { useState } from 'react';
const Form = (props) => {
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')
//setter são os hooks do react 
    const salvar = (evento) =>{
        evento.preventDefault();
    
        props.cardCadastrado({
            nome:nome,
            cargo:cargo,
            img:img,
            time:time
        });

        setNome('')
        setCargo('')
        setImg('')
        setTime('')

    }

    return (
        <section  className='formulario'>
            <form onSubmit={salvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>    
            <CampoTexto obrigatorio={true} label ="Nome" placeholder = "digite seu nome" valor={nome}  Alterado={ valor => setNome(valor)}/>

            <CampoTexto obrigatorio={true} label ="Cargo" placeholder = "digite seu cargo" valor={cargo}  Alterado={ valor => setCargo(valor)}/>
            
            <CampoTexto label ="Imagem" placeholder = "digite o endereço da imagem" valor={img}  Alterado={ valor => setImg(valor)}/>    
            
            <Lista  obrigatorio={true}   label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Form