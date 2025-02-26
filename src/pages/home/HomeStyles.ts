import styled from "styled-components";

export const ContentScreen = styled.div`
font-family: 'Poppins', sans-serif;
background-color:#F8F9FA;
font-size: 16px;
`;

export const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxLogo = styled.div`
  width: 250px;
  margin-left: 35px;
  margin-top:30px;
  @media (max-width: 1200px) {
  width: 180px;
  padding-bottom: 0;
  order:1;
  }
`;

export const Logo = styled.img`
 max-width:100px;
 cursor:pointer;
`;

export const HeaderMenuBar =styled.div`
  width:70%;
  align-items: center;
  display: flex;
  white-space: nowrap;

  @media (max-width: 1200px) {
    display:flex;
    width: 70%;
    display: flex;
    align-items: center;
    padding-left: 80px;
    order: 2;

    }
`;

export const LabelInstruct = styled.p`
  color: gray;
  padding-left: 15%;
  padding-right: 4%;
`;

export const MenuConfig = styled.div`
margin-left:20%;
margin-top:20px;
width: 15%;
padding-bottom: 2%;
display: flex;
flex-direction: row-reverse;
justify-content: flex-end; 
align-items: center;
text-align: center;

@media (max-width: 1440px) {
margin-left:5%;
order: 3;
}
`;

export const IconUser = styled.div`
  width: 50px;
  opacity: 60%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  margin-bottom: 6px;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & p {
    padding-left: 8%;
    white-space: nowrap;
  }
`;

export const IconMenuConfig = styled.div`
  width:60px;
  opacity: 60%;
  position: relative;
  cursor: pointer;
`;

export const IconMenuNotification = styled.div`
  widht:70px;
  opacity: 60%;
`;

export const ContentAside = styled.div`
  height: auto;
  padding-left: 20px;
  padding-right: 40px;
  padding-top: 25px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;
  padding-bottom: 20px;
  border-radius: 0 0 15px 15px;
  background: linear-gradient(#f8f9fa 55%, transparent 70%);
  & a{
    text-decoration: none;
  }
`;

export const IconButton = styled.img`
  opacity:0.5;
`;

export const WindowsAside = styled.div`
  & img {
    height: auto;
    margin-top: 4%;
    margin-bottom: 4%;
    margin-left: 5%;
    transition: all 10s;
    white-space: nowrap;
  }
`;

export const BoxIconTitle = styled.div`
  font-size: 16px;
  color:#9999;
  font-weight: 500;
  padding-left: 7%;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  margin-top: 12px;
`;

export const BoxIcon = styled.div`
  display: flex;
  flex-direction: row;
  background: none;
  background-color: transparent;
  cursor:pointer;

  &:hover {
    width:200px;
    background-color: #ffffff;
    border-radius: 10px;
  }
`;

export const ContainerHelp = styled.div`
  height: auto;
  margin-top: 55%;
  width: 200px;
  margin-left: 20px;
  border-radius: 12%;
  background-color:rgb(0, 0, 0);
  color: #ffffff;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const BoxIconHelp = styled.div`
  padding-top: 10%;
  padding-left: 9%;
`;

export const IconHelp = styled.img`
filter: grayscale(100%);
`;

export const TextBoxHelp = styled.p`
  padding-left: 9%;
`;

export const TextBoldHelp = styled.span`
  font-weight: 600;
`;

export const BoxButtonContact = styled.div`
  padding-bottom: 10%;
  display: flex;
  padding-left: 9%;

  & a {
    text-decoration: none;
  }
`;

export const ButtonContact = styled.div`
  width: 140px;
  height: 30px;
  padding-top: 10%;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  background-color: #ffffff;
  color:rgb(0, 0, 0);
  font-weight: 600;
  text-align: center;
`;