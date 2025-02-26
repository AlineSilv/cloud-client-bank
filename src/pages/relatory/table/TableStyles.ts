import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff; 
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  font-size: 12px;
  padding: 12px;
  text-align: left;
  background-color: #f2f2f2;
  position: sticky;
  top: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 10; 
`;

export const Td = styled.td`
  font-size: 12px;
  text-align: left;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  border: 1px solid #ddd;
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
