import './Home.css'; 
import Pokeflex from "./Pokeflex";
import Pokegrid from "./Pokegrid";
import Menu from './Menu';

const Home = () => {
  return (
      <div className="Home">
          <Menu />
          <h1>Home</h1>
          <Pokeflex />
          <Pokegrid />
      </div>
  );
};

export default Home;
