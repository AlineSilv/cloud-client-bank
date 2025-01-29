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
  padding-top:20px;
  @media (max-width: 1200px) {
  width: 180px;
  padding-bottom: 0;
  margin-bottom:-15px;
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
export const CompanySelect = styled.select`
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

export  const InputSelectDate = styled.input`
  border: 1px solid #ccc;
  height: 40px;
  width:250px;
  padding-left: 30px; 
  border-radius: 8px;
  outline: none; 
  opacity:0.7;
  background-image: url("../../assets/Navbar/icon-input-header-calendar.svg");
  background-position:1% center;
  background-repeat: no-repeat;
  background-size: 30px 20px; 

&::placeholder{
  padding-left: 2%;
  font-size: 16px;
  color: #ccc;
  font-weight: 510;
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

export const IconDashboard = styled.img`
  box-shadow: 2px 4px 5px rgb(197, 197, 197);
  border-radius: 10px;
`;

export const IconConfVendas = styled.img`
  box-shadow: 2px 4px 5px rgb(197, 197, 197);
  border-radius: 10px;
`;

export const IconAuditVendas = styled.img`
  box-shadow: 2px 4px 5px rgb(197, 197, 197);
  border-radius: 10px;
`;

export const IconConciliFinanceira = styled.img`
  box-shadow: 2px 4px 5px rgb(197, 197, 197);
  border-radius: 10px;
`;

export const IconPrevisaoRecebiveis = styled.img`
  box-shadow: 2px 4px 5px rgb(197, 197, 197);
  border-radius: 10px;
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
  color: #252f64;
  font-weight: 500;
  padding-left: 7%;
  padding-top: 8px;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  margin-top: 9px;
  transition: all 1s;
`;

export const BoxIconTitleDash = styled.div`
  font-size: 16px;
  color: #252f64;
  font-weight: 500;
  padding-left: 7%;
  padding-top: 8px;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  margin-top: 9px;
`;

export const BoxIconDash = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    width:280px;
    background-color: #ffffff;
    border-radius: 10px;
  }
`;

export const BoxIconConfVendas = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    width:280px;
    background-color: #ffffff;
    border-radius: 10px;
  }
`;

export const BoxIconAuditVendas = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    width:280px;
    background-color: #ffffff;
    border-radius: 10px;
  }
`;

export const BoxIconConciliFinanceira = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    width:280px;
    background-color: #ffffff;
    border-radius: 10px;
  }
`;

export const BoxIconPrevisaoRecebiveis = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    width:280px;
    background-color: #ffffff;
    border-radius: 10px;
  }
`;

export const ContainerHelp = styled.div`
  height: auto;
  margin-top: 55%;
  width: 225px;
  margin-left: 20px;
  border-radius: 12%;
  background-color: #252f64;
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

export const IconHelp = styled.img``;

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
  width: 180px;
  height: 30px;
  padding-top: 5%;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  background-color: #ffffff;
  color: #252f64;
  font-weight: 600;
  text-align: center;
`;
