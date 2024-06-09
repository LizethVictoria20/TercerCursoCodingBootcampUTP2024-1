import { RenderAPI } from './apiFetch.jsx';
import { Information } from './Information.jsx';
import '../styles/cards.css';
import { Route, Routes, Link } from 'react-router-dom';


export function Cards({props}){
  const { character } = RenderAPI('https://stand-by-me.herokuapp.com/api/v1/characters');
  const urlImg = 'https://jojos-bizarre-api.netlify.app/assets/';

   <Routes>
        <Route path='*' element={<Cards />} >
          <Route path='/information' element={<Information/>} />
        </Route>
      </Routes>

  return (
    <div className='container'>
      {character?.map((data) => 
      <div key={data.id} className='card'>
          <h3 className='character-name'>{data.name}</h3>
          <p>{data.japaneseName}</p>
          <img src={urlImg + data.image} alt='Imagen personaje'/>

      </div>)}
      <Routes>
        <Route path='/' element={<Cards />} >
          <Route path='/information' element={<Information/>} />
        </Route>
      </Routes>
    </div>
    
    

  )
    
}
