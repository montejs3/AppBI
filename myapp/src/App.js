import './App.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import File from './components/File';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import HomePre from './components/HomePre';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <HomePre />
      <File />
    </BrowserRouter>
      
  
  );
}

export default App;
