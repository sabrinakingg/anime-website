// Import npm packages
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import SearchPage from "./pages/SearchPage";
import NotFound from './pages/NotFound';
import AnimePage from "./pages/AnimePage";
import Contact from "./pages/Contact";
import AnimeDetailsPage from "./pages/AnimeDetailsPage";
import FavoriteAnime from "./pages/FavoriteAnime";

import './styles/index.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/anime' element={<AnimePage />} />
        <Route path="/anime/:id" element={<AnimeDetailsPage />} />
        <Route path="/favorites" element={<FavoriteAnime />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
