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

interface RDSSnapshots {
  Account: string;
  Region: string;
  SnapshotID: string;
  DBInstanceID: string;
  SizeGB: number;
  Status: string;
  CreateTime: string;
}

interface RelatoryRDSSnapshotsProps {
  data: RDSSnapshots[];
}

const RelatoryRDSSnapshots: React.FC<RelatoryRDSSnapshotsProps> = ({ data }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  return (
    <Container>
      <h2>Relatório de RDS Snapshots</h2>
      <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Account</Th>
            <Th>Region</Th>
            <Th>Snapshot ID</Th>
            <Th>DB Instance ID</Th>
            <Th>Size GB</Th>
            <Th>Status</Th>
            <Th>Create Time</Th>
          </Tr>
        </Thead>
        <tbody>
          {currentItems.map((snapshot, index) => (
            <Tr key={index}>
              <Td>{snapshot.Account}</Td>
              <Td>{snapshot.Region}</Td>
              <Td>{snapshot.SnapshotID}</Td>
              <Td>{snapshot.DBInstanceID}</Td>
              <Td>{snapshot.SizeGB}</Td>
              <Td>{snapshot.Status}</Td>
              <Td>{snapshot.CreateTime}</Td>
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

export default RelatoryRDSSnapshots;