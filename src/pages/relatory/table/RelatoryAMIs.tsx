import React, { useState } from "react";
import {
  Container,
  Table,
  Thead,
  Tr,
  PaginationContainer,
  PaginationButton,
  TableWrapper,
  Th,
  Td
} from "./TableStyles.ts";

interface AMIs {
  Account: string;
  Region: string;
  ImageID: string;
  Name: string;
  CreationDate: string;
  State: string;
}

interface RelatoryAMIsProps {
  data: AMIs[];
}

const RelatoryAMIs: React.FC<RelatoryAMIsProps> = ({ data }) => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <Container>
      <h2>Relatório de AMIs</h2>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Account</Th>
              <Th>Region</Th>
              <Th>Image ID</Th>
              <Th>Name</Th>
              <Th>Creation Date</Th>
              <Th>State</Th>
            </Tr>
          </Thead>
          <tbody>
            {currentItems.map((ami) => (
              <Tr key={ami.ImageID}>
                <Td>{ami.Account}</Td>
                <Td>{ami.Region}</Td>
                <Td>{ami.ImageID}</Td>
                <Td>{ami.Name}</Td>
                <Td>{ami.CreationDate}</Td>
                <Td>{ami.State}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationButton 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
          >
            Anterior
          </PaginationButton>
          <span>Página {currentPage} de {totalPages}</span>
          <PaginationButton 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages}
          >
            Próximo
          </PaginationButton>
        </PaginationContainer>
      )}
    </Container>
  );
};

export default RelatoryAMIs;
