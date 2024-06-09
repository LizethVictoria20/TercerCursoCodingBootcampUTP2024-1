import { useState } from 'react';

export function RenderAPI(url) {
    const [ character, setCharacter] = useState([]);
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        setCharacter(res);
    })
    .catch((error) => {console.error(`Hubo un error ${error}`)})
    return { character, RenderAPI };
}

