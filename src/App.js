import './App.css';
import HomePage from './pages/HomePage.tsx';
import Detalhes from './pages/Detalhes.tsx';
import Explorador from "./pages/Explorador.tsx"
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Detalhes/:id" element={<Detalhes />} />
          <Route path="/Explorador" element={<Explorador />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
