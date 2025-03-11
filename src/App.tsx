import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './pages/login/LoginScreen';
import Register from './pages/registerScreen/RegisterScreen';
import Error from './pages/errorScreen/ErrorScreen';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Relatory from './pages/relatory/Relatory';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página Principal */}
        <Route path="/home" element={<Home />} />

        {/* Rota para a página de Cadastro */}
        <Route path="/register" element={<Register />} />

        {/* Define a rota inicial como Login */}
        <Route path="/" element={<Login />} />
        
        {/* Rota para a página de Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rota para a página de Relatórios */}
        <Route path="/tabela" element={<Relatory />} />
        
        {/* Rota para exibir a página de erro (404) */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
