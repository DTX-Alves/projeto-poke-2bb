import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Pokeflex from './Pokeflex.jsx'
import Pokegrid from './Pokegrid.jsx'
import Menu from './Menu';

const App = () => {

  return(
    <Routes>
      <Route index element={<Menu />} />
      <Route path="/" element={<Home />} />
      <Route path="pokeflex" element={<Pokeflex />} />
      <Route path="pokegrid" element={<Pokegrid />} />

    </Routes>
  )
}

export default App
