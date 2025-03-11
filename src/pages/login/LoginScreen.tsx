import React, { useState } from 'react';
import { fakeAuth } from './loginscreenservice/authService';
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
  AsideTarja,
  ImgAsideLogin,
  Content
} from './LoginStyles';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
  
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
          <Logo src={`${process.env.PUBLIC_URL}/assets/TelaLogin/logo-cloud-client.png`} alt="logo image" />
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
                placeholder="digite: teste"
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
                placeholder="digite: teste"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </BoxInput>
            {error && (
              <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>
                {error}
              </p>
            )}
            <BoxButton>
              <ButtonLogin type="submit">Login</ButtonLogin>
            </BoxButton>
          </form>
          <BoxAccount>
            <p>
              <TextAccount>Ainda não possui uma conta? </TextAccount>
              <TextAccountBold as="a" onClick={() => navigate("/register")}>
                Saiba mais
              </TextAccountBold>
            </p>
          </BoxAccount>
        </ContainerLogin>
      </Content>
      <AsideTarja>
        <ImgAsideLogin src={`${process.env.PUBLIC_URL}/assets/TelaLogin/cloudapp-login-bckg-screen.png`} alt="Illustration background" />
      </AsideTarja>
    </ContentScreen>
  );
};

export default Login;
