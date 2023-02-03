import Card from '../Card';
import './Time.css';

const Time = (props) => {
    return(
    
        props.Card.length > 0 ? <section className='time' style={{ backgroundColor: props.corSegundaria }}> 
        <h3 style={{ borderColor:props.corPrimaria }}> {props.nome} </h3>      
        <div className ='card'>
        {props.Card.map( card => <Card  corDocard={props.corPrimaria} key={card.nome} nome ={card.nome} cargo={card.cargo} img={card.img}/> )}
        </div>
        </section>
        :''
    
    );
}
export default Time