import styled from 'styled-components';

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

export const Logo = styled.img`
 max-width:100px;
 cursor:pointer;
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

export const ContainerContent = styled.div`
width:100%;
`;

export const ContainerIllustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Illustration = styled.img`
filter: grayscale(100%);
width:60%;
height:450px;
background-repeat: no-repeat;
background-position:right;
`;

export const BoxDescription = styled.div`
color:black;
font-size:18px;

p{
  text-align: center;
}
span{
  font-weight:800;
}
`;

export const ButtonContainer = styled.div`
text-align: center;
`;

export const Button = styled.button`
border:none;
border-radius:20px;
margin-bottom:50px;
text-align: center;
width:300px;
padding-top:10px;
padding-bottom:10px;
color:white;
background-color:black;
font-size:18px;
font-weight:800;
cursor:pointer;

`;