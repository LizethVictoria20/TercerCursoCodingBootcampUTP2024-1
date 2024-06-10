import { RenderAPI } from './RenderApi.jsx';


function Cards({ characters }){
    console.log(characters)
  return (
    <div className='container'>
        {
            characters?.map((character) => 
                <p>{character.name}</p>
            )
        }
    </div>
  )
}

export default Cards;
