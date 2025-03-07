import React, {useState} from "react";
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
} from "./TableStyles";

interface RDS {
  Account: string;
  DBInstanceID: string;
  Region: string;
  Status: string;
  Engine: string;
  SizeGB: number;
  StorageType: string;
}

interface RelatoryRDSInstancesProps {
  data: RDS[];
}

const RelatoryRDSInstances: React.FC<RelatoryRDSInstancesProps> = ({ data }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <Container>
      <h2>Relatório de RDS Instances</h2>
      <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Account</Th>
            <Th>DB Instance ID</Th>
            <Th>Region</Th>
            <Th>Status</Th>
            <Th>Engine</Th>
            <Th>Size GB</Th>
            <Th>Storage Type</Th>
          </Tr>
        </Thead>
        <tbody>
          {currentItems.map((instance, index) => (
            <Tr key={index}>
              <Td>{instance.Account}</Td>
              <Td>{instance.DBInstanceID}</Td>
              <Td>{instance.Region}</Td>
              <Td>{instance.Status}</Td>
              <Td>{instance.Engine}</Td>
              <Td>{instance.SizeGB}</Td>
              <Td>{instance.StorageType}</Td>
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

export default RelatoryRDSInstances;
