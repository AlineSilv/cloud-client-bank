import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentScreen,
  RowHeader,
  MenuConfig,
  Logo,
  BoxLogo,
  IconUser,
  IconLogout,
  HeaderMenuBar,
  ContainerContent,
  ContainerIllustration,
  Illustration,
  BoxDescription,
  ButtonContainer,
  Button
} from './ErrorScreenStyles.ts';

function Error() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/'); 
  };

  return (
    <ContentScreen>
      <RowHeader>
        <BoxLogo>
          <Logo 
            src={`${process.env.PUBLIC_URL}/assets/TelaLogin/logo-cloud-client.png`}/>
        </BoxLogo>
        <HeaderMenuBar></HeaderMenuBar>
        <MenuConfig>
          <IconLogout>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-header-menu-config-notification.svg`}
              style={{ width: 15, height: 20 }} alt="" 
            />
          </IconLogout>
          <IconUser>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Navbar/UserCircle.svg`}
              style={{ width: 25, height: 20 }} alt="" 
            />
            <p>ErrorBot</p>
          </IconUser>
        </MenuConfig>
      </RowHeader>
      <ContainerContent>
        <ContainerIllustration>
          <Illustration src={`${process.env.PUBLIC_URL}/assets/TelaErro/RobotError.svg`} alt="" />
        </ContainerIllustration>
        <BoxDescription>
          <p>Ops, parece que nosso robô explorador deu um passo em falso!<br/>
            <span>Vamos guiá-lo de volta ao caminho certo.</span>
          </p>
        </BoxDescription>
        <ButtonContainer>
          <Button onClick={handleRedirect}>Voltar para a página inicial</Button>
        </ButtonContainer>
      </ContainerContent>
    </ContentScreen>
  );
}

export default Error;
