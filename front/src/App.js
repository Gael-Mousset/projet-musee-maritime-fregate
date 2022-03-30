import './App.css';
import  "./features/windowOnload";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./features/layout/layout";
import Schedule from "./features/schedule/schedule";
import BoatDetails from "./features/boats/BoatDetails";
import Home from "./features/home/home";
import WeatherPage from "./features/weather/weatherPage";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />}/>
                  <Route path="weather" element={<WeatherPage />}/>
                  <Route path="picture_gallery"/>
                  <Route path="boats">
                      <Route index/>
                      <Route path=":boatId" element={<BoatDetails />}>
                          <Route index/>
                          <Route path="schedule" element={<Schedule />}/>
                      </Route>
                  </Route>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;