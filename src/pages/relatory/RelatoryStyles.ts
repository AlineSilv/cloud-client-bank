import styled from "styled-components";

export const ContentScreen = styled.div`
font-family: 'Poppins', sans-serif;
font-size: 16px;
`;

export const RowHeader = styled.div`
  background-color:#F8F9FA;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxLogo = styled.div`
  width: 250px;
  margin-left: 35px;
  padding-top:15px;
  padding-bottom:10px;

  @media (max-width: 1200px) {
  max-width: 100px;
  order:1;
  }

  @media (max-width: 750px) {
  display:none;
`;

export const Logo = styled.img`
filter: grayscale(100%);
 max-width:100px;
`;

export const HeaderMenuBar =styled.div`
  align-items: center;
  display: flex;
  white-space: nowrap;
   margin-left:-20%;
  justify-content: flex-start;

  @media (max-width: 1200px) {
    order: 2;
    }
  
    @media (max-width: 750px) {
    margin-left:0px;
    }

`;

export const LabelInstruct = styled.p`
  color: gray;
  padding-left: 15%;
  padding-right: 4%;

    @media (max-width: 550px) {
    padding:5%;
    }
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
margin-top:30px;
display: flex;
padding-bottom:4%;
flex-direction: row-reverse;
justify-content: flex-end; 
align-items: center;
text-align: center;

@media (max-width: 1200px) {
order:3;
}

`;


export const IconLogout = styled.div`
  width:60px;
  opacity: 60%;
  position: relative;
  cursor: pointer;
`;


export const RelatoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0em;
  width: auto;
`;