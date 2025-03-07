import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutModal from '../login/LogoutModal'

import {
  ContentScreen,
  RowHeader,
  BoxLogo,
  Logo,
  HeaderMenuBar,
  MenuConfig,
  IconLogout,
  ContentAside,
  IconButton,
  WindowsAside,
  BoxIcon,
  ContainerHelp,
  BoxIconHelp,
  IconHelp,
  TextBoxHelp,
  TextBoldHelp,
  BoxButtonContact,
  ButtonContact,
  BoxIconTitle,
  
} from "./HomeStyles";

function Home() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
      <ContentScreen>
        <RowHeader>
            <BoxLogo><Logo src={`${process.env.PUBLIC_URL}/assets/TelaLogin/logo-cloud-client.png`}
            onMouseEnter={() => setIsAsideVisible(true)}/></BoxLogo>
            <HeaderMenuBar></HeaderMenuBar>
            <MenuConfig>
            <IconLogout>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-logout.png`}
                  style={{ width: 15, height: 20 }} alt="logout"
                  onClick={() => setIsModalOpen(true)}></img>
            </IconLogout>
            </MenuConfig>
        </RowHeader>
        <ContentAside style={{ display: isAsideVisible ? "block" : "none" }}
        onMouseLeave={() => setIsAsideVisible(false)}>
          <WindowsAside>
                <BoxIcon  style={{ cursor: "pointer" }}>
                <IconButton
                  style={{ width: 25, height: 20 }} alt="usuario"
                  src={`${process.env.PUBLIC_URL}/assets/Navbar/UserCircle.svg`}
                />
                <BoxIconTitle>Aline</BoxIconTitle>
              </BoxIcon>
              <BoxIcon onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                <IconButton
                  style={{ width: 20, height: 20 }}
                  src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-graph.png`}
                  alt="ícone Dashboard"
                />
                <BoxIconTitle>Dashboard</BoxIconTitle>
              </BoxIcon>
              <BoxIcon onClick={() => navigate("/tabela")} style={{ cursor: "pointer" }}>
                <IconButton
                  style={{ width: 20, height: 20 }}
                  src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-table.png`}
                  alt="ícone Tabela"
                />
                <BoxIconTitle>Tabela</BoxIconTitle>
              </BoxIcon>
          </WindowsAside>
          <ContainerHelp>
            <BoxIconHelp>
              <IconHelp
                style={{ width: 50, height: 35 }}
                src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-box-help.svg`}
                alt="ícone de Ajuda"
              />
            </BoxIconHelp>
            <TextBoxHelp>
              <TextBoldHelp>Precisa de Ajuda?</TextBoldHelp>
              <br></br>
              Fale conosco!
            </TextBoxHelp>
            <BoxButtonContact>
              <a href="google.com">
                <ButtonContact>Clique aqui</ButtonContact>
              </a>
            </BoxButtonContact>
          </ContainerHelp>
        </ContentAside>
        <LogoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleLogout} 
        />
      </ContentScreen>
  );
}

export default Home;