import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/LoginScreen.tsx';
import Register from './pages/registerScreen/RegisterScreen.tsx';
import Error from './pages/errorScreen/ErrorScreen.tsx';
import Home from './pages/home/Home.tsx'

function App() {
  return (
    <Router>
      <Routes>

        {/* Define a rota inicial como Login */}
        <Route path="/home" element={<Home />} />

        {/* Define a rota inicial como Login */}
        <Route path="/" element={<Login />} />
        
        {/* Rota para a página de Registro */}
        <Route path="/register" element={<Register />} />
        
        {/* Rota para exibir a página de erro (404) */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
