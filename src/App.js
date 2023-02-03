
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';
import { useState } from 'react';
function App() {

  const time = [
    {

       nome:'Programação',
       corPrimaria:'#57C278',
       corSegundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSegundaria:'#E8F8FF'
    },
    {
      nome:'Devops',
      corPrimaria:'#A6D157',
      corSegundaria:'#F0F8E2'
   },
   {
      nome:'UX e Design',
      corPrimaria:'#E06B69',
      corSegundaria:'#FDE7E8'
   },
   {
      nome:'Mobile',
      corPrimaria:'#FEBA05',
      corSegundaria:'#FFF5D9'
   },
   {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSegundaria:'#FFEEDF'
   }
   
];

const [card, setCard] = useState([])
const cardAdicionado = (newcard)=>{
  setCard([...card,newcard])
  
}

  return (
    <div className="App">
      <Banner/>
      <Form times = {time.map(time => time.nome)} cardCadastrado ={card => cardAdicionado(card)}/>
      {time.map(time => <Time key= {time.nome} nome = {time.nome} corPrimaria={time.corPrimaria} corSegundaria={time.corSegundaria} Card={card.filter(card => card.time === time.nome)}/>)}
    </div>
  );
}

export default App;
