import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./features/layout/layout";
import Schedule from "./features/schedule/schedule";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index/>
                  <Route path="weather"/>
                  <Route path="picture_gallery"/>
                  <Route path="boats">
                      <Route index/>
                      <Route path=":boatId">
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