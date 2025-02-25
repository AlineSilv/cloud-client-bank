import React, {useState} from 'react';

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
  IconDashboard,
  WindowsAside,
  BoxIconDash,
  ContainerHelp,
  BoxIconHelp,
  IconHelp,
  TextBoxHelp,
  TextBoldHelp,
  BoxButtonContact,
  ButtonContact,
  BoxIconTitleDash,
  
} from "./HomeStyles.ts";

function Home() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

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
                  style={{ width: 25, height: 20 }}
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
              style={{ width: 25, height: 20 }}
              ></img><p>Aline</p>
            </IconUser>
            </MenuConfig>
        </RowHeader>
        <ContentAside style={{ display: isAsideVisible ? "block" : "none" }}
        onMouseLeave={() => setIsAsideVisible(false)}>
          <WindowsAside>
              <BoxIconDash>
                <IconDashboard
                  style={{ width: 25, height: 25 }}
                  src='./assets/Navbar/icon-graph.png'
                  alt="ícone Dashboard"
                />
                <BoxIconTitleDash>Dashboard</BoxIconTitleDash>
              </BoxIconDash>
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
              <a href="#">
                <ButtonContact>Clique aqui</ButtonContact>
              </a>
            </BoxButtonContact>
          </ContainerHelp>
        </ContentAside>
      </ContentScreen>
  );
}

export default Home;