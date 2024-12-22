import './App.css';
import React, {useState } from "react";
import RenderCards from './cards.js';

function App()
{
  const [img, setImg] = useState();
  const [offset, setOffset] = useState(0);

async function check ()
{
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=5&offset=${offset}`).then(res => res.json());
  console.log(res);
  return(RenderCards(res));
}

console.log(check())

return (
    <>
    <div id='sidemenu'></div>

    <div id='cards'>
    
    </div>
    </>
);
}

export default App() 