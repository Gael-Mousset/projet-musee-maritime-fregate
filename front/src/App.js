import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="*" />
            <Route path="/" />
            <Route path="/meteo" />
            <Route path="/galerie_photos" />
            <Route path="/liste_bateaux" />
            <Route path="/bateau/{?id}" />
            <Route path="/bateau/{?id}/planning" />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;