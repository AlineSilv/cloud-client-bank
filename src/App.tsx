import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/LoginScreen.tsx';
import Register from './pages/registerScreen/RegisterScreen.tsx';
import Error from './pages/errorScreen/ErrorScreen.tsx';
import Home from './pages/home/Home.tsx'
import Dashboard from './pages/dashboard/Dashboard.tsx'
import Relatory from './pages/relatory/Relatory.tsx'
const basename = window.location.hostname === 'localhost' ? '' : '/cloud-client-bank';

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        {/* Rota para a página Principal */}
        <Route path="/home" element={<Home />} />

        {/* Rota para a página de Cadastro */}
        <Route path="/register" element={<Register />} />

        {/* Define a rota inicial como Login */}
        <Route path="/" element={<Login />} />
        
        {/* Rota para a página de Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rota para a página de Tabela */}
        <Route path="/tabela" element={<Relatory />} />
        
        {/* Rota para exibir a página de erro (404) */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
