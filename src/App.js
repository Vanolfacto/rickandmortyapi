// import logo from './logo.svg';
import './App.css';
import Screen1 from './components/Screen1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Screen1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
