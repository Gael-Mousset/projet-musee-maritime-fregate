import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./features/layout";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={} />
                  <Route path="weather" element={}/>
                  <Route path="picture_gallery" element={}/>
                  <Route path="boats" element={}>
                      <Route index element={} />
                      <Route path=":boatId" element={}>
                          <Route index element={} />
                          <Route path="schedule" element={}/>
                      </Route>
                  </Route>
              </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;