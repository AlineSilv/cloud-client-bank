import styled from 'styled-components';

export const ContentScreen = styled.div``;

export const Content = styled.div`
  margin-right: 5%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: initial;
  }
`;

export const BoxLogo = styled.div``;

export const ContainerLogin = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  width: 35%;
  max-width: 35%;
  height: auto;
  position: relative;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Logo = styled.img`
  filter: grayscale(100%);
  margin-top:5%;
  width:15%;
  align-content: flex-start;
  padding-left: 10%;

  @media (max-width: 768px) {
  margin-top:20%;
  margin-bottom:5%;
  width:35%;
  align-content: flex-start;
  margin-left: 30%;
  }

`;

export const BoxWelcome = styled.div`
  text-align: center;
  white-space: nowrap;
`;

export const TextWelcome = styled.div`
  color:black;
  font-weight: 800;
  text-align: center;
  font-size:16px;
`;

export const BoxLabel = styled.div`
  padding-left: 20%;
  padding-top: 5%;
  height: auto;

  @media (max-width: 768px) {
    padding-right: 20%;
    text-align: center;
  }
`;

export const LabelLogin = styled.div`
  color:black;
`;

export const BoxInput = styled.div`
  text-align: center;
  height: auto;
`;

export const InputLogin = styled.input`
  width: 60%;
  border-radius: 20px;
  border: 1px solid;
  color:rgb(0, 0, 0);
  height: 30px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  padding: 0 14px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const BoxButton = styled.div`
  text-align: center;
  padding-top: 40px;
  height: auto;
`;

export const ButtonLogin = styled.button`
  width: 65%;
  color:white;
  font-size: 16px;
  font-weight: 600;
  background-color:rgb(0, 0, 0);
  border-radius: 20px;
  border: 1px solid;
  height: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 2px;
    width: 114%;
  }

  @media (max-width: 390px) {
    margin-top: 2px;
    width: 116%;
  }
`;

export const BoxAccount = styled.div`
  text-align: center;
  padding-bottom: 2%;
  padding-top: 2%;
`;

export const TextAccount = styled.span`
  color:rgb(0, 0, 0);

  @media (max-width: 768px) {
    text-align: center;
    white-space: nowrap;
  }
`;

export const TextAccountBold = styled.a`
  color:rgb(0, 0, 0);
  font-weight: 800;
  text-decoration: none;
`;

export const BoxIcons = styled.div`
  color:rgb(0, 0, 0);
  text-align: center;
  white-space: nowrap;
  padding-top: 2%;
`;

export const IconSpace = styled.span`
  margin-right: 2%;
`;

export const AsideTarja = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ImgAsideLogin = styled.img`
  filter: grayscale(100%);
  display: block;
  height:630px;
  padding:0;
  margin:0;

  @media (min-width: 1500px) {
    height:630px;
  }
  @media (max-width: 1200px) {
    height:600px;
    width:500px;
  }
  @media (max-width: 1150px) {
  heigh:500px;
  width:500px;
  }
   @media (max-width: 768px) {
    display:none;
  }
`;

export const IconSocial = styled.img`
margin-bottom:2%;
`;