import React from 'react';

import {
  ContentScreen,
  RowHeader,
  BoxLogo,
  Logo,
  HeaderMenuBar,
  LabelInstruct,
  LabelInstructBlack,
  CompanySelect,
  InputSelectDate,
  MenuConfig,
  IconUser,
  IconMenuConfig,
  IconMenuNotification,
  ContentAside,
  IconDashboard,
  IconConfVendas,
  IconAuditVendas,
  IconConciliFinanceira,
  IconPrevisaoRecebiveis,
  WindowsAside,
  BoxIconTitle,
  BoxIconDash,
  BoxIconConfVendas,
  BoxIconAuditVendas,
  BoxIconConciliFinanceira,
  BoxIconPrevisaoRecebiveis,
  ContainerHelp,
  BoxIconHelp,
  IconHelp,
  TextBoxHelp,
  TextBoldHelp,
  BoxButtonContact,
  ButtonContact,
  BoxIconTitleDash,
  
} from "./HomeStyles.tsx";

function Home() {

  return (
      <ContentScreen>
        <RowHeader>
            <BoxLogo><Logo src='./assets/TelaLogin/logo_pig.png'/></BoxLogo>
            <HeaderMenuBar>
                <LabelInstruct> Planner / <LabelInstructBlack>Home</LabelInstructBlack></LabelInstruct>
                <CompanySelect>
                  <option value="" selected>
                    Selecione a Tabela
                  </option>
                  <option value="empresa1">Tabela Controle</option>
                  <option value="empresa2">Tabela Finança</option>
                  <option value="empresa3">Tabela Histórico</option>
                  <option value="empresa3">Tabela Meta</option>
                </CompanySelect>
                <InputSelectDate type="calendar" placeholder="Selecione o período"></InputSelectDate>                      
              </HeaderMenuBar>
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
        <ContentAside>
          <WindowsAside>
              <BoxIconDash>
                <IconDashboard
                  style={{ width: 35, height: 35 }}
                  src='./assets/Navbar/icon-dashboard-home.svg'
                  alt="ícone Dashboard"
                />
                <BoxIconTitleDash>Dashboard</BoxIconTitleDash>
              </BoxIconDash>
              <BoxIconConfVendas>
                <IconConfVendas
                  style={{ width: 35, height: 35 }}
                  src='./assets/Navbar/icon-conf-vendas-home.svg'
                  alt="ícone Conferência de Vendas"
                />
                <BoxIconTitle>Controle</BoxIconTitle>
              </BoxIconConfVendas>
              <BoxIconAuditVendas>
                <IconAuditVendas
                  style={{ width: 35, height: 35 }}
                  src='./assets/Navbar/icon-audit-vendas-home.svg'
                  alt="ícone Auditoria de Vendas"
                />
                <BoxIconTitle>Finança</BoxIconTitle>
              </BoxIconAuditVendas>
              <BoxIconConciliFinanceira>
                <IconConciliFinanceira
                  style={{ width: 35, height: 35 }}
                  src='./assets/Navbar/icon-conciliacao-financeira-home.svg'
                  alt="ícone Conciliação Financeira"
                />
                <BoxIconTitle>Histórico</BoxIconTitle>
              </BoxIconConciliFinanceira>
              <BoxIconPrevisaoRecebiveis>
                <IconPrevisaoRecebiveis
                  style={{ width: 35, height: 35 }}
                  src='./assets/Navbar/icon-previsao-recebiveis-home.svg'
                  alt="ícone Previsão de Recebíveis"
                />
                <BoxIconTitle>Meta</BoxIconTitle>
              </BoxIconPrevisaoRecebiveis>
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
