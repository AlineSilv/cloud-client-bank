import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentScreen,
  RowHeader,
  MenuConfig,
  Logo,
  BoxLogo,
  IconUser,
  IconMenuNotification,
  HeaderMenuBar,
  IconMenuConfig,
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
          <IconMenuNotification>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-header-menu-config-notification.svg`}
              style={{ width: 25, height: 20 }} alt="" 
            />
          </IconMenuNotification>
          <IconMenuConfig>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Navbar/TreePoints.svg`}
              style={{ width: 40, height: 25 }}
              alt=""
            />
          </IconMenuConfig>
          <IconUser>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Navbar/UserCircle.svg`}
              style={{ width: 25, height: 20 }} alt="" 
            />
            <p>Aline</p>
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
