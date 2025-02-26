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
  padding-top:25px;
  @media (max-width: 1200px) {
  width: 180px;
  order:1;
  }
`;

export const Logo = styled.img`
 max-width:100px;
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

export const LabelInstructBlack = styled.span`

color:black;
`;
export const InstanceSelect = styled.select`
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none; 
  background-color: #FFF;
  border: 1px solid #cccc;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #ccc;
  opacity:0.7;
  outline: none; 
  cursor: pointer;
  width:350px;
  height: 40px;
  padding-left: 35px; 
  margin-lef:100px;
  margin-right:30px;
  border-radius: 8px;
  background-image: url(${`${process.env.PUBLIC_URL}/assets/Navbar/icon-input-header-chevron.svg`});
  background-position:1% center;
  background-repeat: no-repeat;
  background-size: 30px 15px; 

  &::placeholder {
    padding-right:5px;
    color: #888;
  }

  option {
    border:none;
    border-radius:10px;
    background-color: #FFFF;
    opacity:0.6;
    color: #888;
  }

  option:checked {
    border:none;
    border-radius:10px;
    background-color: #ccc;
    color: #333;
    opacity:0.6;
  }
`;

export  const AccountSelect = styled.select`
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none; 
  background-color: #FFF;
  border: 1px solid #cccc;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #ccc;
  opacity:0.7;
  outline: none; 
  cursor: pointer;
  width:350px;
  height: 40px;
  padding-left: 35px; 
  margin-lef:100px;
  margin-right:30px;
  border-radius: 8px;
  background-image: url("../../assets/Navbar/icon-input-header-chevron.svg");
  background-position:1% center;
  background-repeat: no-repeat;
  background-size: 30px 15px; 

  &::placeholder {
    padding-right:5px;
    color: #888;
  }
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

export const RelatoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0em;
  width: auto;
`;