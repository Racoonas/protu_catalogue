import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';

import { Routes, Route } from 'react-router-dom';

import HoldsPage from "./pages/Holds.js";
import HoldPage from "./pages/Hold.js";
import EvolutionPage from "./pages/Evolution.js";
import PeoplePage from "./pages/People.js";
import TechnologyPage from "./pages/Technology.js";
import PlasticPage from "./pages/Plastic.js";
import WallsPage from "./pages/Walls.js";
import TrophiesPage from "./pages/Trophies.js";
import NoPage from "./pages/NoPage.js";
import ProjectsPage from './pages/Trophies';
import PartnersPage from './pages/Partners';

function App() {
  return (  
    <>
      <div className="App" />              
      <Routes>
        <Route path = "/" element={<Layout />}>
          <Route index element={<HoldsPage />} />
          <Route path = "holds" element={<HoldsPage />} />          
          <Route path = "set/:id" element={<HoldPage />} />
          <Route path = "projects" element={<ProjectsPage />} />          
          <Route path = "evolution" element={<EvolutionPage />} />
          <Route path = "people" element={<PeoplePage />} />          
          <Route path = "technology" element={<TechnologyPage />} />          
          <Route path = "plastic" element={<PlasticPage />} />
          <Route path = "walls" element={<WallsPage />} />
          <Route path = "trophies" element={<TrophiesPage />} />
          <Route path = "partners" element={<PartnersPage />} />
          <Route path = "404" element={<NoPage />} />
          <Route path = "*" element={<NoPage />} />          
        </Route >
      </Routes>
   </>  
  );
}

export default App;
