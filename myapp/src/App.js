import './App.css';
import NavBar from './components/NavBar';
import File from './components/File';
import { BrowserRouter} from 'react-router-dom';
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
