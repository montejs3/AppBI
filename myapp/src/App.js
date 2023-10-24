import './App.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import File from './components/File';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <File />
    </BrowserRouter>
      
  
  );
}

export default App;
