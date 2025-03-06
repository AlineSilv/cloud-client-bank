import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableWrapper = styled.div`
  height:600px;
  margin:20px;
  overflow-y: auto;
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; 
`;

export const Table = styled.table`
  margin:20px;
  margin-left:40px;
  margin-top:0px;
  max-height:400px;
  border: none;
  border-collapse: collapse;
  background-color: #ffffff; 
`;

export const Th = styled.th`
  background-color: #ffffff; 
  border: 1px solid #ddd;
  color: #8392AB;
  font-size: 12px;
  padding: 12px;
  text-align: left;
  position: sticky;
  top: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 10; 
  border-top: none;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;

export const Td = styled.td`
  font-size: 12px;
  text-align: left;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  border: 1px solid #ddd;
  border-bottom: none;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;

export const Thead = styled.thead`
  color: black;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color:rgb(0, 0, 0);
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color:rgb(0, 0, 0);
  }

  &:disabled {
    background-color: #bbb;
    cursor: not-allowed;
  }
`;

export const DescriptionBox = styled.div`
margin:20px;
margin-left:40px;
`

export const ButtonSelectColumn = styled.button`
border: 1px solid #ddd;
background-color: #ffffff; 
height:25px;
padding:5px;
cursor:pointer;

`

export const Modal = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBody = styled.div`
  margin-top: 10px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

