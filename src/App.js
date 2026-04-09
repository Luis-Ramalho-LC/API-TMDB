import './App.css';
import HomePage from './pages/HomePage.tsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
