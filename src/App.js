import './App.css';
import HomePage from './pages/HomePage.tsx';
import { BrowserRouter } from 'react-router-dom';
import Detalhes from './pages/Detalhes.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage />
        <Detalhes />
      </div>
    </BrowserRouter>
  );
}

export default App;
