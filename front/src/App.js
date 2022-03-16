import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./features/header/header";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Header/>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
