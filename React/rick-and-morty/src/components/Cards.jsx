import { RenderAPI } from './RenderApi.jsx';
import '../styles/Card.css';


function Cards({ characters, alter }){
    console.log(alter)
  return (
    <div className='container'>
        {
            characters?.map((character) => 
            
            <div className='container-character' key={character.id}>
            <img src={character.image} alt="" />
            <p >{character.name}</p>
            </div>
            )
        }
    </div>
  )
}

export default Cards;
