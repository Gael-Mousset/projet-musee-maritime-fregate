import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./features/layout/layout";
import BoatDetails from "./features/boats/BoatDetails";
import Home from "./features/home/home";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />}/>
                  <Route path="weather"/>
                  <Route path="picture_gallery"/>
                  <Route path="boats">
                      <Route index/>
                      <Route path=":boatId" element={<BoatDetails />}>
                          <Route index/>
                          <Route path="schedule"/>
                      </Route>
                  </Route>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;