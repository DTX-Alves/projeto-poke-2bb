import poke from "./assets/pokeapi_256.png";
 import eevee from './assets/eevee.jpg';
 import './Pokeflex.css';
 
 const Pokeflex =() => {
    return (
        <div className="Pokeflex">
            <h1>PokeFlex</h1>
            <img src={poke} />  
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
        </div>
    )
 }
 
 export default Pokeflex;