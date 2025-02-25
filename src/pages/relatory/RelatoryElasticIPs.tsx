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
} from "./RelatoryStyles.ts";

interface ElasticIP {
  Account: string;
  PublicIP: string;
  Region: string;
  InstanceID: string;
}

interface RelatoryElasticIPsProps {
  data: ElasticIP[];
}

const RelatoryElasticIPs: React.FC<RelatoryElasticIPsProps> = ({ data }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <Container>
      <h2>Relatório de Elastic IPs</h2>
      <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Account</Th>
            <Th>Elastic IP</Th>
            <Th>Region</Th>
            <Th>Instance ID</Th>
          </Tr>
        </Thead>
        <tbody>
          {currentItems.map((ip, index) => (
            <Tr key={index}>
              <Td>{ip.Account}</Td>
              <Td>{ip.PublicIP}</Td>
              <Td>{ip.Region}</Td>
              <Td>{ip.InstanceID}</Td>
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

export default RelatoryElasticIPs;
