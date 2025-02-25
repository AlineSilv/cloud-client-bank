import React, { useState } from 'react';
import { fakeAuth } from './loginscreenservice/authService.ts';
import { useNavigate } from 'react-router-dom';
import {
  BoxLogo,
  ContentScreen,
  ContainerLogin,
  Logo,
  BoxWelcome,
  TextWelcome,
  BoxLabel,
  LabelLogin,
  BoxInput,
  InputLogin,
  BoxButton,
  ButtonLogin,
  BoxAccount,
  TextAccount,
  TextAccountBold,
  BoxIcons,
  IconSpace,
  AsideTarja,
  ImgAsideLogin,
  Content,
  IconSocial
} from './LoginStyles.ts';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Previne o recarregamento da página
  
    try {
      const isAuthenticated = await fakeAuth(username, password);
      
      if (isAuthenticated) {
        localStorage.setItem("fake_token", "token_value"); 
        navigate("/home");
      } else {
        setError("Usuário e/ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setError("Erro ao tentar autenticar.");
    }
  };
  

  return (
    <ContentScreen>
      <Content>
        <BoxLogo>
          <Logo src="./assets/TelaLogin/softwareone-logo.svg" alt="logo image" />
        </BoxLogo>
        <ContainerLogin>
          <BoxWelcome>
            <TextWelcome as="h1">Bem-vindo de volta!</TextWelcome>
          </BoxWelcome>
          <form onSubmit={handleLogin}>
            <BoxLabel>
              <LabelLogin>Usuário:</LabelLogin>
            </BoxLabel>
            <BoxInput>
              <InputLogin
                id="username"
                type="text"
                placeholder="User"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </BoxInput>
            <BoxLabel>
              <LabelLogin>Senha:</LabelLogin>
            </BoxLabel>
            <BoxInput>
              <InputLogin
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </BoxInput>
            <BoxButton>
              <ButtonLogin type="submit">Login</ButtonLogin>
            </BoxButton>
          </form>
          <BoxAccount>
            <p>
              <TextAccount>Ainda não possui uma conta? </TextAccount>
              <TextAccountBold as="a" href="/register">Saiba mais</TextAccountBold>
            </p>
          </BoxAccount>
        </ContainerLogin>
      </Content>
      <AsideTarja>
        <ImgAsideLogin src="./assets/TelaLogin/cloudapp-login-bckg-screen.png" alt="Illustration background" />
      </AsideTarja>
    </ContentScreen>
  );
};

export default Login;
