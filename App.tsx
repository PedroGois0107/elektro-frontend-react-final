import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importa a Home
import Login from './pages/Login';
import Cadastro from './pages/Cadastro'; 
import Usuario from './pages/Usuario'; 
import Error from './pages/Error'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} /> {/* Rota para a Home */}
        <Route path="/login" element={<Login />} />{/* Rota para o Login*/}
        <Route path="/cadastro" element={<Cadastro />} /> {/*Rota para Cadastro*/}
        <Route path="/usuario" element={<Usuario />} />{/*Rota para Usuario*/}
        <Route path="/error" element={<Error />} />*/


      </Routes>
    </BrowserRouter>
  );
}

export default App;
