import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ContentScreen,
  RowHeader,
  BoxLogo,
  Logo,
  HeaderMenuBar,
  MenuConfig,
  IconUser,
  IconMenuConfig,
  IconMenuNotification,
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
  
} from "./HomeStyles.ts";

function Home() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const navigate = useNavigate();
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const jsonUrl = process.env.NODE_ENV === 'development'
      ? `${process.env.PUBLIC_URL}/recursos.json`
      : "https://alinesilv.github.io/cloud-client-bank/recursos.json";

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar o JSON");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dados carregados:", data);
        setDados(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar JSON:", error);
      });
  }, []);

  return (
      <ContentScreen>
        <RowHeader>
            <BoxLogo><Logo src='./assets/TelaLogin/softwareone-logo.svg' 
            onMouseEnter={() => setIsAsideVisible(true)}/></BoxLogo>
            <HeaderMenuBar></HeaderMenuBar>
            <MenuConfig>
            <IconMenuNotification>
                <img
                  src='./assets/Navbar/icon-header-menu-config-notification.svg'
                  style={{ width: 25, height: 20 }} alt="alerts"
                ></img>
            </IconMenuNotification>
            <IconMenuConfig>
              <img
                src='./assets/Navbar/TreePoints.svg'
                style={{ width: 40, height: 25 }}
                alt=""
              />
            </IconMenuConfig>
            <IconUser>
            <img
              src='./assets/Navbar/UserCircle.svg'
              style={{ width: 25, height: 20 }} alt="usuario"
              ></img><p>Aline</p>
            </IconUser>
            </MenuConfig>
        </RowHeader>
        <ContentAside style={{ display: isAsideVisible ? "block" : "none" }}
        onMouseLeave={() => setIsAsideVisible(false)}>
          <WindowsAside>
              <BoxIcon onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                <IconButton
                  style={{ width: 20, height: 20 }}
                  src='./assets/Navbar/icon-graph.png'
                  alt="ícone Dashboard"
                />
                <BoxIconTitle>Dashboard</BoxIconTitle>
              </BoxIcon>
              <BoxIcon onClick={() => navigate("/tabela")} style={{ cursor: "pointer" }}>
                <IconButton
                  style={{ width: 20, height: 20 }}
                  src='./assets/Navbar/icon-table.png'
                  alt="ícone Tabela"
                />
                <BoxIconTitle>Tabela</BoxIconTitle>
              </BoxIcon>
          </WindowsAside>
          <ContainerHelp>
            <BoxIconHelp>
              <IconHelp
                style={{ width: 50, height: 35 }}
                src='./assets/Navbar/icon-box-help.svg'
                alt="ícone de Ajuda"
              />
            </BoxIconHelp>
            <TextBoxHelp>
              <TextBoldHelp>Precisa de Ajuda?</TextBoldHelp>
              <br></br>
              Fale conosco!
            </TextBoxHelp>
            <BoxButtonContact>
              <a href="https://www.softwareone.com/pt-br/entre-em-contato">
                <ButtonContact>Clique aqui</ButtonContact>
              </a>
            </BoxButtonContact>
          </ContainerHelp>
        </ContentAside>
      </ContentScreen>
  );
}

export default Home;