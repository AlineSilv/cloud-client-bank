import React from 'react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center',
        minWidth: '300px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
      }}>
        <h3>Deseja sair?</h3>
        <p>Você será redirecionado para a página de login.</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <button onClick={onClose} style={{ padding: '10px 20px', border: 'none', background: '#ccc', cursor: 'pointer' }}>
            Cancelar
          </button>
          <button onClick={onConfirm} style={{ padding: '10px 20px', border: 'none', background: '#e74c3c', color: 'white', cursor: 'pointer' }}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
