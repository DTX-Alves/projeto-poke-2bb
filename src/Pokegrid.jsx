import poke from "./assets/pokeapi_256.png";
 import eevee from './assets/eevee.jpg';
 import './Pokegrid.css';
 
 const Pokegrid =() => {
    return (
        <div className="Pokegrid">
            <h1>PokeGrid</h1>
            <img src={poke} />  
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
        </div>
    )
 }
 
 export default Pokegrid;
 